// pages/communities/communities.js

Component({

  /**
   * 页面的初始数据
   */
  data: {
    myCmtInfo: [{
      name: "B02",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/B02社区头像.png",
      members: "1328",
      about: "哈尔滨工业大学B02学生公寓。部寓共建，你我同行～",
    },{
      name: "基础学部",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/基础学部社区头像.png",
      members: "3547",
      about: "哈尔滨工业大学基础学部。规格严格，功夫到家。",
    },{
      name: "方便食间",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/方便食间社区头像.png",
      members: "172",
      about: "营业时间：1:00~25:00",
    },{
      name: "文体中心",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/文体中心社区头像.png",
      members: "498",
      about: "受疫情影响，室内场馆暂时关闭，敬请谅解",
    },{
      name: "开发组",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/开发组头像.jpg",
      members: "5",
      about: "正在爆肝中期检查",
    }],

    myDescriptionsInfo: [{
      name: "B03",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/B03社区头像.png",
      members: "719",
      about: "哈尔滨工业大学B03学生公寓。部寓共建，你我同行～",
    },{
      name: "二校区失物招领",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/失物招领社区头像.png",
      members: "355",
      about: "简介编不出来了所以我就展示一下一共可以放下这么这么这么这么这么这么这么多字",
    },{
      name: "二校区图书馆",
      icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/失物招领社区头像.png",
      members: "1998",
      about: "简介编不出来了",
    }],
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
          selected: "community"
        })
      }
    }
  }
})