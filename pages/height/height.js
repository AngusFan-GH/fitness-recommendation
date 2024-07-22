const app = getApp();
const share = require('../../utils/share.js');
Page({
  data: {
    height: null,
  },
  bindHeightInput: function(e) {
    const value = e.detail.value.replace(/\D/g, ''); // 去掉非数字字符
    const height = parseInt(value, 10);
    if (isNaN(height)) {
      this.setData({
        height: null
      })
      return;
    }
    this.setData({
      height: height
    })
  },
  next: function() {
    app.globalData.height = this.data.height;
    wx.navigateTo({
      url: '/pages/BFR/BFR'
    })
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
})
