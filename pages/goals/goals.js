const app = getApp();

Page({
  data: {
    goals: [],
    goalOptions: [
      "我想增加肌肉和力量。",
      "我想减肥。",
      "我想保持现在的身材。"
    ]
  },
  bindGoalChange: function(e) {
    this.setData({
      goals: e.detail.value
    })
  },
  next: function() {
    app.globalData.goals = this.data.goals;
    wx.navigateTo({
      url: '/pages/fitness/fitness'
    })
  },
  back: function() {
    wx.navigateBack();
  }
})
