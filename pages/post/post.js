// pages/home/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{
      text:"小狐狸真的是太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️太可爱🌶️",
      img:[
        "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/92616904_p0.png",
        "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/92893443_p0.jpeg",
        "cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/QQ20211108-0.jpg"
      ],
      cmtInfo:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
        name:"B02",
        members:"1328",
      },
      user:{
        icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/Snipaste_2022-03-06_23-10-46.png",
        name:"Pid",
        identity:"general",
        points:"312",
      },
      postTime:"2022-3-7",
      read:"4247",
      statusList:[{
        class:"发布",
        user:{
          icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/Snipaste_2022-03-06_23-10-46.png",
          name:"Pid",
          identity:""
        },
        text:"发布了该问题",
        time:"2022-3-7"
      },{
        class:"接收",
        user:{
          icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
          name:"B02管理员",
          identity:""
        },
        text:"问题已接收，负责人：Administer",
        time:"2022-3-8"
      },{
        class:"解决",
        user:{
          icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
          name:"B02管理员",
          identity:""
        },
        text:"问题已解决。",
        time:"2022-3-9"
      },{
        class:"关闭",
        user:{
          icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/test_community_icon.png",
          name:"B02管理员",
          identity:""
        },
        text:"问题已被关闭。关闭原因：还没想好",
        time:"2022-3-10"
      },{
        class:"追问",
        user:{
          icon:"cloud://cloud1-7g8nzm85f25b63a8.636c-cloud1-7g8nzm85f25b63a8-1309182985/resources/images/Snipaste_2022-03-06_23-10-46.png",
          name:"Pid",
          identity:""
        },
        text:"提出了追问",
        time:"2022-3-11"
      }]
    }
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

  }
})