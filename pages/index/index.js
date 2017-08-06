//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
<<<<<<< HEAD
  /*
=======
>>>>>>> da490dce7094bc8d3cfa8637b0623bbae03b4329
  bindHello:function() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
<<<<<<< HEAD
  */
  bindHello:function() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
=======
>>>>>>> da490dce7094bc8d3cfa8637b0623bbae03b4329
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
