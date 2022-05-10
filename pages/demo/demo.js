// pages/demo/demo.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'


Page({

    /**
     * 页面的初始数据
     */
    data: {
        // show: false,
        date: '',
        show: false,
        value: '',


    },


    onChange(e) {
        this.setData({
            value: e.detail,
        });
    },
    onSearch() {
        // Toast({
        //     'context': this,
        //     'message': 'success',
        //
        // })
        Toast.success('搜索信息成功');
    },
    onClick() {
        Toast('搜索' + this.data.value);
    },

    onDisplay() {
        this.setData({show: true});
    },
    onClose() {
        this.setData({show: false});
    },
    formatDate(date) {
        date = new Date(date);
        return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) {
        this.setData({
            show: false,
            date: this.formatDate(event.detail),
        });
    },
    click() {
        console.log('test')
        console.log(typeof 'test')
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
