const share = require('../../utils/share.js');

Page({
  startQuiz: function() {
    wx.navigateTo({
      url: '/pages/gender/gender'
    })
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
})
