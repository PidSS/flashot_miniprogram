// pages/home/world/world.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    entranceUnions:[{
      name:"排行榜",
      icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/testicon.png",
      link:"",
    },{
      name:"测试2",
      icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/testicon.png",
      link:"",
    },{
      name:"测试3",
      icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/testicon.png",
      link:"",
    },{
      name:"测试4",
      icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/testicon.png",
      link:"",
    }],
    bannerImg:[{
      img:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/92616904_p0.png",
      link:"",
    },{
      img:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/92893443_p0.jpeg",
      link:"",
    }
    ],
    cardInfo:[{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/zeen-chin-005.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/QQ20211108-0.jpg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
    },{
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        name:"匿名用户",
        identity:"anons",
      },
      img:["cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/demoImg01.jpeg"],
      text:"这个塞尔达画得可太彳亍了，爱了家人们",
      likes:"312",
      follows:"27",
      comments:"36",
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
          selected: "home"
        })
      }
    }
  }
})