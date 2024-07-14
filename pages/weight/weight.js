const app = getApp();

Page({
  data: {
    weight: null,
    goalsWeight: null,
    unitOptions: ['kg', 'lbs'],
    unitIndex: 0,
    goalsUnitIndex: 0
  },
  bindWeightInput: function(e) {
    this.setData({
      weight: e.detail.value
    })
  },
  bindUnitChange: function(e) {
    this.setData({
      unitIndex: e.detail.value
    })
  },
  bindGoalsWeightInput: function(e) {
    this.setData({
      goalsWeight: e.detail.value
    })
  },
  bindGoalsUnitChange: function(e) {
    this.setData({
      goalsUnitIndex: e.detail.value
    })
  },
  next: function() {
    app.globalData.weight = this.data.weight;
    app.globalData.goalsWeight = this.data.goalsWeight;
    app.globalData.unit = this.data.unitIndex;
    app.globalData.goalsUnit = this.data.goalsUnitIndex;
    wx.navigateTo({
      url: '/pages/height/height'
    })
  },
  back: function() {
    wx.navigateBack();
  }
})
