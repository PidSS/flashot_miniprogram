// pages/me/me.js
Component({
  /**
   * 页面的初始数据
   */
  data: {
    userBackground: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/aw-anqi-squall-for-internet.jpeg",
    entrances: [{
      name: "我的账户",
      link: "",
    },{
      name: "个人信息",
      link: "",
    },{
      name: "我的发布",
      link: "",
    },{
      name: "最近浏览",
      link: "",
    },{
      name: "其他",
      link: "",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: "me"
        })
      }
    }
  }
})