//通过canvas将图片压缩至指定大小

//判断图片大小是否满足需求,limitSize的单位是kb
function imageSizeIsLessLimitSize(imagePath, limitSize, lessCallback, moreCallback) {
    //获取文件信息
    wx.getFileInfo({
        filePath: imagePath,
        success: (res) => {
            console.log("压缩前图片大小", res.size / 1024, 'kb');
            //如果图片太大了走moreCallback
            if (res.size > 1024 * limitSize) {
                moreCallback()
            }
            //图片满足要求了走lessCallback
            else {
                lessCallback()
            }
        }
    })
}

//将图片画在画布上并获取画好之后的图片的路径
function getCanvasImage(canvasId, imagePath, imageW, imageH, getImgSuccess) {
    //创建画布内容
    var _self = this;
    const ctx = wx.createCanvasContext(canvasId, _self);
    //图片画上去，imageW和imageH是画上去的尺寸，图像和画布间隔都是0
    ctx.drawImage(imagePath, 0, 0, imageW, imageH);
    //这里一定要加定时器，给足够的时间去画（所以每次递归最少要耗时200ms，多次递归很耗时！）
    ctx.draw(false, setTimeout(function () {
        //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
        wx.canvasToTempFilePath({
            canvasId: canvasId,
            x: 0,
            y: 0,
            width: imageW,
            height: imageH,
            quality: 1, //最高质量
            success: (res) => {
                //将取出的图片路径通过回调函数返回
                getImgSuccess(res.tempFilePath);
            }
        })
    }, 1000));
}

//主函数，默认限制大小1024kb即1mb,drawWidth是绘画区域的大小
//初始值传入为画布自身的边长（我们这是一个正方形的画布）
function getLessLimitSizeImage(canvasId, imagePath, limitSize = 1024, drawWidth, callback) {
    //判断图片尺寸是否满足要求
    imageSizeIsLessLimitSize(imagePath, limitSize,
        (lessRes) => {
            //满足要求走callback，将压缩后的文件路径返回
            callback(imagePath);
        },
        (moreRes) => {
            //不满足要求需要压缩的时候
            wx.getImageInfo({
                src: imagePath,
                success: (imageInfo) => {
                    let maxSide = Math.max(imageInfo.width, imageInfo.height);
                    let windowW = drawWidth;
                    let scale = 1;
                    /*
                    这里的目的是当绘画区域缩小的比图片自身尺寸还要小的时候
                    取图片长宽的最大值，然后和当前绘画区域计算出需要放缩的比例
                    然后再画经过放缩后的尺寸，保证画出的一定是一个完整的图片。由于每次递归绘画区域都会缩小，
                    所以不用担心scale永远都是1绘画尺寸永远不变的情况，只要不满足压缩后体积的要求
                    就会缩小绘画区域，早晚会有绘画区域小于图片尺寸的情况发生
                    */
                    if (maxSide > windowW) {
                        scale = windowW / maxSide;
                    }
                    //trunc是去掉小数
                    let imageW = Math.trunc(imageInfo.width * scale);
                    let imageH = Math.trunc(imageInfo.height * scale);
                    console.log('调用压缩', imageW, imageH);
                    //图片在规定绘画区域上画并获取新的图片的path
                    getCanvasImage(canvasId, imagePath, imageW, imageH,
                        (pressImgPath) => {
                            /*
                            再去检查是否满足要求，始终缩小绘画区域，让图片适配绘画区域
                            这里乘以0.95是必须的，如果不缩小绘画区域，会出现尺寸比绘画区域小，
                            而体积比要求压缩体积大的情况出现，就会无穷递归下去，因为scale的值永远是1
                            但0.95不是固定的，你可以根据需要自己改，0到1之间，越小则绘画区域缩小的越快
                            但不建议取得太小，绘画区域缩小的太快，压出来的将总是很糊的
                            */
                            getLessLimitSizeImage(canvasId, pressImgPath, limitSize, drawWidth * 0.95, callback);
                        }
                    )
                }
            })
        }
    )
}

export default getLessLimitSizeImage