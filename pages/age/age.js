const app = getApp();

Page({
  data: {
    age: '',
    minAge: 0,
    maxAge: 120
  },
  bindAgeInput: function(e) {
    const value = e.detail.value.replace(/\D/g, ''); // 去掉非数字字符
    const age = parseInt(value, 10);

    if (!isNaN(age) && age >= this.data.minAge && age <= this.data.maxAge) {
      this.setData({
        age: value
      });
    } else {
      this.setData({
        age: ''
      });
    }
  },
  next: function() {
    if (this.data.age !== '') {
      app.globalData.age = this.data.age;
      wx.navigateTo({
        url: '/pages/goals/goals'
      });
    }
  }
});
