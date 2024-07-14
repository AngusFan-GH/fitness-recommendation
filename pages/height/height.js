const app = getApp();

Page({
  data: {
    height: null,
  },
  bindHeightInput: function(e) {
    this.setData({
      height: e.detail.value
    })
  },
  next: function() {
    app.globalData.height = this.data.height;
    wx.navigateTo({
      url: '/pages/goals/goals'
    })
  },
  back: function() {
    wx.navigateBack();
  }
})
