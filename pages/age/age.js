const app = getApp();
const share = require('../../utils/share.js');
Page({
  data: {
    age: '',
    minAge: 0,
    maxAge: 130
  },
  bindAgeInput: function (e) {
    const value = e.detail.value.replace(/\D/g, ''); // 去掉非数字字符
    const age = parseInt(value, 10);

    if (isNaN(age)) {
      this.setData({
        age: ''
      })
      return;
    }
    if (age > this.data.maxAge) {
      this.setData({
        age: this.data.maxAge
      })
    } else if (age < this.data.minAge) {
      this.setData({
        age: this.data.minAge
      })
    } else {
      this.setData({
        age: value
      })
    }
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