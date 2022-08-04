import getLessLimitSizeImage from '../../utils/image'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath: "",
        img_base: '',
        img_result: '',
        copy_txt: '',
        result: '',
        tmp_file: '',
        excel_data: '',
        kfg: {
            "TextDetections": [{
                "DetectedText": "Sun",
                "Confidence": 99,
                "Polygon": [{"X": 464, "Y": 100}, {"X": 538, "Y": 100}, {"X": 538, "Y": 135}, {"X": 464, "Y": 135}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":1}}",
                "ItemPolygon": {"X": 464, "Y": 100, "Width": 74, "Height": 35},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "1月8日",
                "Confidence": 99,
                "Polygon": [{"X": 476, "Y": 141}, {"X": 528, "Y": 141}, {"X": 528, "Y": 159}, {"X": 476, "Y": 159}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":2}}",
                "ItemPolygon": {"X": 476, "Y": 141, "Width": 52, "Height": 18},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "八色鸫",
                "Confidence": 99,
                "Polygon": [{"X": 62, "Y": 443}, {"X": 147, "Y": 442}, {"X": 147, "Y": 470}, {"X": 63, "Y": 471}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":3}}",
                "ItemPolygon": {"X": 62, "Y": 443, "Width": 85, "Height": 28},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "Pilta nympha",
                "Confidence": 97,
                "Polygon": [{"X": 61, "Y": 482}, {"X": 157, "Y": 483}, {"X": 157, "Y": 500}, {"X": 61, "Y": 499}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":4}}",
                "ItemPolygon": {"X": 61, "Y": 482, "Width": 96, "Height": 17},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "八色鸫雌鸟和雄鸟一样漂亮。它经常在亚热带的森林地面上走动,捕",
                "Confidence": 99,
                "Polygon": [{"X": 60, "Y": 506}, {"X": 486, "Y": 503}, {"X": 486, "Y": 521}, {"X": 60, "Y": 523}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":5}}",
                "ItemPolygon": {"X": 60, "Y": 506, "Width": 426, "Height": 18},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "食落叶下的昆虫和蜥蜴等小动物,唱歌时会飞到树上。因为森林砍伐",
                "Confidence": 99,
                "Polygon": [{"X": 60, "Y": 530}, {"X": 486, "Y": 530}, {"X": 486, "Y": 546}, {"X": 60, "Y": 546}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":5}}",
                "ItemPolygon": {"X": 60, "Y": 530, "Width": 426, "Height": 16},
                "Words": [],
                "WordCoordPoint": []
            }, {
                "DetectedText": "和非法的玩赏鸟贸易,现在它的数量已明显减少。",
                "Confidence": 99,
                "Polygon": [{"X": 59, "Y": 554}, {"X": 367, "Y": 552}, {"X": 368, "Y": 570}, {"X": 59, "Y": 572}],
                "AdvancedInfo": "{\"Parag\":{\"ParagNo\":5}}",
                "ItemPolygon": {"X": 59, "Y": 554, "Width": 308, "Height": 18},
                "Words": [],
                "WordCoordPoint": []
            }],
            "Language": "zh",
            "Angel": 359.989990234375,
            "PdfPageSize": 0,
            "RequestId": "334873fe-88d6-469d-8195-f5653c6a09b1"
        }

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
    copy() {
        console.log('复制数据')
        console.log(this.data.copy_txt)
        wx.setClipboardData({
            data: this.data.tmp_file,

            success: (res) => {
                wx.getClipboardData((res) => {
                    console.log(res)
                })
                wx.showToast({
                        title: "复制成功"
                    }
                )
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
                const img = res.tempFiles[0]['path']
                const imgSize = res.tempFiles[0]['size']
                if (imgSize > 200000) {
                    // console.log('图片过大')
                    wx.showToast({
                        title: "正在压缩中",
                        mast: true
                    })
                    wx.getImageInfo({
                        src: img,
                        success: (res) => {
                            let canvasId = 'zipCanvas';
                            let imagePath = res.path;
                            let limitSize = 4000;
                            let drawWidth = wx.getSystemInfoSync().windowWidth;
                            getLessLimitSizeImage(canvasId, imagePath, limitSize, drawWidth, (resPath) => {
                                // wx.hideLoading();
                                console.log('压缩后的图片路径')
                                // console.log(resPath)
                                const fileManager = wx.getFileSystemManager();
                                const base = fileManager.readFileSync(resPath, 'base64');
                                // console.log('=============================', base);
                                this.setData({
                                    imagePath: resPath
                                })
                                wx.setStorage({
                                    key: 'ocr_img',
                                    data: base,
                                })
                            })
                        }


                    })


                }
                // const fileManager = wx.getFileSystemManager();
                // const base64 = fileManager.readFileSync(res.tempFilePaths[0], 'base64');
                // // console.log('=============================', base64);
                // this.setData({
                //     img_base: base64
                // })

            }
        })
    },
    ocr_excel() {
        // return ('no msg'
        wx.request({
            url: 'https://api.etrnal.com/ocr/',
            method: 'POST',
            data: {
                img: wx.getStorageSync(
                    'ocr_img'),
                ocr_type: 0
            },
            header: {
                'content-type': 'application/json'

            },
            success: (res) => {

                if (res.data == null) {
                    wx.showToast({title: '请上传图片'})
                } else {
                    wx.showToast({
                        'title': '识别成功'
                    })
                    console.log(res.message)
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

                }

                // console.log(this.data.img_result)


            },
            fail: (res) => {
                console.log(res)
            }
        })
    },
    /**
     * 调用身份证识别接口
     */
    ocr_card() {
        // return ('no msg'
        wx.request({
            url: 'https://api.etrnal.com/ocr/',
            // url: "",
            method: 'POST',
            data: {
                img: this.data.img_base,
                ocr_type: 1
            },
            header: {
                'content-type': 'application/json'

            },
            success: (res) => {

                if (res.data == null) {
                    wx.showToast({title: '请上传图片'})
                } else {
                    wx.showToast({
                        'title': '识别成功'
                    })
                    // console.log('---you data')
                    // console.log(res.data.message)
                    // console.log('---you txt')
                    // console.log(res.data.message.Data)
                    // const base64 = fileManager.readFileSync(res.data.message.Data, 'base64');
                    // console.log(res.data.message.TextDetections)
                    this.setData({
                        img_result: res.data.message.TextDetections
                    })

                }

                // console.log(this.data.img_result)


            },
            fail: (res) => {
                console.log(res)
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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