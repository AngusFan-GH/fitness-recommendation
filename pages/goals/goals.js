const app = getApp();

Page({
  data: {
    goals: null,
    goalOptions: [
      { name: "我想增加肌肉和力量。", value: "0"},
      { name: "我想减肥。", value: "1"},
      { name: "我想保持现在的身材。", value: "2"}
    ]
  },
  bindGoalChange: function(e) {
    this.setData({
      goals: e.detail.value
    })
  },
  next: function() {
      if (this.data.goals) {
          app.globalData.goals = this.data.goals;
          wx.navigateTo({
            url: '/pages/weight/weight'
          })
      }
  }
})
