const app = getApp();
const share = require('../../utils/share.js');
Page({
  data: {
    height: null,
    containerStyle: ''
  },
  bindHeightInput: function (e) {
    this.setData({
      containerStyle: 'margin-top: 0;' // 恢复居中
    });
    const value = e.detail.value.replace(/\D/g, ''); // 去掉非数字字符
    const height = parseInt(value, 10);
    if (isNaN(height)) {
      this.setData({
        height: null
      });
      return;
    }
    this.setData({
      height: height
    });
  },
  onFocus: function (e) {
    const keyboardHeight = e.detail.height; // 获取键盘高度
    this.setData({
      containerStyle: `margin-top: -${keyboardHeight}px;` // 你可以调整这个值来控制向上移动的距离
    });
  },
  skip: function () {
    wx.navigateTo({
      url: '/pages/BFR/BFR'
    });
  },
  next: function () {
    app.globalData.height = this.data.height;
    wx.navigateTo({
      url: '/pages/BFR/BFR'
    });
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
});
