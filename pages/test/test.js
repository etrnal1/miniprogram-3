// pages/test/test.js
// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";

Page({

    /**
     * 页面的初始数据
     */
    data: {},
    test() {
        console.log('测试')
        // Toast('我是提示文案，建议不超过十五字~');
        // Toast.loading({
        //     mask: true,
        //     message: '加载中...'
        // });
        // Toast.success('成功文案');
        // Toast.fail('失败文案');
        const toast = Toast.loading({
            duration: 0,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            message: '倒计时 3 秒',
            loadingType: 'spinner',
            selector: '#custom-selector'
        });

        let second = 3;
        const timer = setInterval(() => {
            second--;
            if (second) {
                toast.setData({
                    message: `倒计时 ${second} 秒`
                });
            } else {
                clearInterval(timer);
                Toast.clear();
            }
        }, 1000);
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
        console.log('ce')
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