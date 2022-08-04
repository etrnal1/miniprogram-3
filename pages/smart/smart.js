import getLessLimitSizeImage from '../../utils/image'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        cw: wx.getSystemInfoSync().windowWidth,
        imagePath: '',
        quality: 0.4,
        pageStyle: 'none',
        a: '',
        img_base: '',
        img_result: '',
        copy_txt: '',
        result: '',
        tmp_file: '',
        excel_data: '',
        keywords: '升级',

    },

    onChange(e) {
        // console.log(e.detail)
        const v = e.detail;
        let old = [];
        console.log(v)
        // ocr_card
        const img = wx.getStorageSync("imgInfo");
        let array = img;
        console.log(img)
        // console.log(array.length);
        // console.log(this.data.img_result)
        // console.log(v)
        for (let i = 0; i < array.length; i++) {
            if (array[i]['DetectedText'].indexOf(v) >= 0) {
                old.push(array[i])
            }
        }

        // console.log('----------------')
        // console.log(old)
        this.setData({
            img_result: old
        })
        // console.log(array.filter(e => e.DetectedText == "升级"))
        // console.log(e.currentTarget)
        // console.log(v)
        // this.setData({
        //     keywords: v
        // })
        // wx.clearStorage()
    },
    /**
     * 导出数据功能
     */
    export_data() {

        wx.request({
            url: 'https://api.etrnal.com/excel/',
            method: 'POST',
            data: {
                result: this.data.excel_data
            },
            header: {
                'content-type': "application/json"
            },
            success: (res) => {
                // console.log('you data')
                // console.log(res.data)
                // console.log('message')
                // console.log(res.data)
                wx.showToast({
                    'title': '导出成功'
                })
                wx.request({
                    url: '',
                    success(res) {
                        console.log(res)
                        wx.showToast({
                            'title': '数据下载成功'
                        })
                    }
                })
                wx.downloadFile({
                    url: "https://api.etrnal.com/download",
                    filePath: wx.env.USER_DATA_PATH + '/simple.xlsx',
                    success: (res) => {
                        this.setData({
                            tmp_file: "https://api.etrnal.com/download"
                        })
                        const {filePath} = res
                        wx.openDocument({
                            filePath: filePath,
                            // conso
                            fileType: 'xlsx',
                            showMenu: true,
                            success(res) {
                                // Toast()
                                console.log('文件下载成功')
                            },
                            complete(res) {
                                wx.hideLoading();
                            },
                            fail(error) {
                                wx.showToast({
                                    'title': '导出失败'
                                })
                                console.log(error)
                                wx.hideLoading();
                            }
                        })
                        // if (res.statusCode === 200) {
                        //     console.log('file send')
                        //     console.log(res)
                        //
                        // }
                    },
                    fail(error) {
                        wx.showToast({
                            'title': '导出失败'
                        })
                        console.log(error)
                    }

                })


            }

        })
    },
    changeStyle() {
        // console.log(this.data.pageStyle)
        const color = this.data.pageStyle == "none" ? "block" : 'none';
        this.setData({pageStyle: color});
        console.log(this.data.pageStyle)

    }

    ,
    clicklink() {
        wx.setClipboardData({
            data: this.data.tmp_file,
            success: (res) => {
                wx.getClipboardData((res) => {
                    console.log(res)
                })
                wx.showToast({title: '复制成功打开浏览器'})
            }
        })
    },

    copy(e) {
        console.log('复制数据')
        const val = e.currentTarget.dataset.value
        console.log(e.currentTarget.dataset.value)
        // console.log(this.data.item.DetectedText)
        wx.setClipboardData({
            data: val,

            success: (res) => {
                console.log(res)
                wx.getClipboardData((res) => {
                    console.log(res.data)
                })
                wx.showToast({
                        title: val
                    }
                )
            },
            fail: (err) => {
                console.log(err)
            }
        })
    },
    /**
     * chose 上传图片
     */
    choseImg() {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],//原图或压缩图
            sourceType: ['album', 'camera'],//图像 相机
            success: (res) => {
                wx.showToast({
                    'title': '上传成功'
                })
                // 14976694
                // console.log(res)
                const img = res.tempFiles[0]['path']
                const imgSize = res.tempFiles[0]['size']
                console.log('---------')
                console.log(imgSize)
                console.log(typeof (imgSize))
                if (imgSize > 20000) {
                    console.log('图片过大')
                    wx.showToast({
                        title: "正在压缩中",
                        mast: true
                    })
                    wx.getImageInfo({
                        src: img,
                        success: (res) => {
                            // console.log()
                            let canvasId = 'zipCanvas';
                            let imagePath = res.path;
                            let limitSize = 1000;
                            let drawWidth = wx.getSystemInfoSync().windowWidth;
                            wx.showLoading({title: '图片压缩中...', mask: true});
                            getLessLimitSizeImage(canvasId, imagePath, limitSize, drawWidth, (resPath) => {
                                wx.hideLoading();
                                console.log('压缩后的图片路径')
                                // console.log(resPath)
                                const fileManager = wx.getFileSystemManager();
                                const reallyImg = fileManager.readFileSync(resPath, 'base64');
                                // console.log('=============================', base);
                                this.setData({
                                    imagePath: resPath,


                                })
                                wx.setStorage({
                                    key: 'img',
                                    data: reallyImg
                                })
                                // wx.canvasToTempFilePath({
                                //     canvasId: 'mycanvas',
                                //     success: function (res) {
                                //         let tempFilePath = resPath;
                                //         that.setData({
                                //             loadImagePath: tempFilePath,
                                //         });
                                //     },
                                // })
                                // wx.saveImageToPhotosAlbum({
                                //     filePath: resPath,
                                //     success: (res) => {
                                //         wx.showToast({
                                //             title: "保存成功",
                                //         })
                                //     }
                                //
                                // })
                                // console.log(this.data.img_base)
                            })
                        }

                    })
                }
            }
        })
    },
    ocr_excel() {
        let new_data = wx.getStorageSync(
            img)
        console.log(new_data)
        // return false

        // wx.request({
        // url: 'https://api.etrnal.com/ocr/',
        // method: 'POST',
        // data: {
        //     img: new_data,
        //     ocr_type: 0
        // },
        // header: {
        //     'content-type': 'application/json'
        //
        // },
        // success: (res) => {
        // console.log(res)
        // if (res.data == null) {
        //     wx.showToast({title: '请上传图片'})
        // } else {
        //     wx.showToast({
        //         'title': '识别成功'
        //     })
        //     console.log(res.message)
        // this.setData({
        //     excel_data: res.data
        // })
        // console.log('---you data')
        // console.log(res.data.message)
        // console.log('---you txt')
        // console.log(res.data.message.Data)
        // const base64 = fileManager.readFileSync(res.data.message.Data, 'base64');
        // const filePath = ''
        // excel_data='',

        // console.log(res.data.message)
        // wx.openDocument({
        // filePath: filePath,
        // conso
        // fileType: 'xlsx',
        // showMenu: true,
        // success(res) {
        //     // Toast()
        //     console.log('文件下载成功')
        // },
        // complete(res) {
        //     wx.hideLoading();
        // },
        // fail(error) {
        //     console.log(error)
        //     wx.hideLoading();
        // }
        // })

        // }

        // console.log(this.data.img_result)


        // },
        // fail: (res) => {
        //     console.log(res)
        // }
        // })
    },
    /**
     * 调用身份证识别接口
     */
    ocr_card() {
        wx.request({
            url: 'https://api.etrnal.com/ocr/',
            // url: "",
            method: 'POST',
            data: {
                img: wx.getStorageSync(
                    'img'),
                ocr_type: 3
            },
            header: {
                'content-type': 'application/json'

            },
            success: (res) => {
                // console.log(res)
                if (res.data == null) {
                    wx.showToast({title: '请上传图片'})
                } else {
                    wx.showToast({
                        'title': '识别成功'
                    })
                    wx.clearStorageSync()
                    // console.log('---you data')
                    // console.log(res.data.message)
                    // console.log('---you txt')
                    // console.log(res.data.message.Data)
                    // const base64 = fileManager.readFileSync(res.data.message.Data, 'base64');
                    // console.log(res.data.message.TextDetections.length)
                    wx.setStorage({
                        key: "imgInfo",
                        data: res.data.message.StructuralItems,
                    })
                    this.setData({
                        img_result: res.data.message.StructuralItems
                    })

                }

                // console.log(this.data.img_result)


            },
            fail: (res) => {
                console.log(res)
            }
        })
    },

    //压缩图片函数
    Myimage(data) {
        const that = this;


        wx.showToast({
            "title": '正在压缩图片',
            "icon": "loading",
        })
        wx.compressImage({
            src: data,
            quality: 0,
            success: function (res) {
                // console.log(res)

                return res.tempFilePath;
                // wx.showToast({title: '压缩成功'})
                // return res;

            }

        })

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // import imagemin from '../../node_modules/imagemin/index';
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})