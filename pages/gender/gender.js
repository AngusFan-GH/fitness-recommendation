const app = getApp();

Page({
  data: {
    genderOptions: [
      { name: "男生", value: "0" },
      { name: "女生", value: "1" }
    ],
    gender: null
  },
  bindGenderChange: function(e) {
    this.setData({
      gender: e.detail.value
    });
  },
  next: function() {
    if (this.data.gender) {
      app.globalData.gender = this.data.gender;
      wx.navigateTo({
        url: '/pages/age/age'
      });
    }
  }
});
