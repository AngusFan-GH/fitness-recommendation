const app = getApp();
const share = require('../../utils/share.js');
Page({
  data: {
    age: '',
    minAge: 0,
    maxAge: 130,
    containerStyle: ''
  },
  bindAgeInput: function (e) {
    this.setData({
      containerStyle: 'margin-top: 0;' // 恢复居中
    });
    const value = e.detail.value.replace(/\D/g, ''); // 去掉非数字字符
    const age = parseInt(value, 10);
    if (isNaN(age)) {
      this.setData({
        age: ''
      });
      return;
    }
    if (age > this.data.maxAge) {
      this.setData({
        age: this.data.maxAge
      });
    } else if (age < this.data.minAge) {
      this.setData({
        age: this.data.minAge
      });
    } else {
      this.setData({
        age: value
      });
    }
  },
  onFocus: function (e) {
    const keyboardHeight = e.detail.height; // 获取键盘高度
    this.setData({
      containerStyle: `margin-top: -${keyboardHeight}px;` // 你可以调整这个值来控制向上移动的距离
    });
  },
  skip: function () {
    wx.navigateTo({
      url: '/pages/goals/goals'
    });
  },
  next: function () {
    if (this.data.age !== '') {
      app.globalData.age = this.data.age;
      wx.navigateTo({
        url: '/pages/goals/goals'
      });
    }
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
});