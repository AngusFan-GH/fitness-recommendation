const app = getApp();

Page({
  data: {
    fitnessLevels: [],
    fitnessLevelOptions: [
      { name: "没有，几乎不运动。", value: "0" },
      { name: "很少，每周1-3次。", value: "1" },
      { name: "有氧，每周4-5次。", value: "2" },
      { name: "高强度，每周4-5次。", value: "2" },
    ]
  },
  bindFitnessLevelChange: function(e) {
    this.setData({
      fitnessLevels: e.detail.value
    });
  },
  next: function() {
    if (this.data.fitnessLevels.length > 0) {
      app.globalData.fitnessLevels = this.data.fitnessLevels;
      wx.navigateTo({
        url: '/pages/result/result'
      });
    }
  },
  back: function() {
    wx.navigateBack();
  }
});
