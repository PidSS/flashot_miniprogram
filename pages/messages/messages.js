// pages/messages/messages.js

Component({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "B03社区",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/B03社区头像.png",
      },
      time: "2022-3-13",
      text: "感谢关注！",
    },{
      userInfo: {
        name: "Pid",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/Pid头像.png",
      },
      time: "2022-3-12",
      text: "同学，您反馈的问题已经处理，请查看！",
    },{
      userInfo: {
        name: "HXD",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/HXD头像.png",
      },
      time: "2022-3-11",
      text: "在吗？能借本工科数学分析教材吗？",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
    },{
      userInfo: {
        name: "官方通知",
        userID: "none",
        icon: "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/公告.svg",
      },
      time: "2022-3-14",
      text: "中期检查要到啦！快来爆肝吧～中期检查要到啦！快来爆肝吧～",
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
          selected: "message"
        })
      }
    }
  }
})