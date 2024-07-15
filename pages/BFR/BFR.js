const app = getApp();

Page({
  data: {
    BFR: null,
    BFROptions: [],
    manBFROptions: [
      { name: "10%-14%", value: "0" },
      { name: "14%-20%", value: "1" },
      { name: "20%-28%", value: "2" },
      { name: "28%以上", value: "3" }
    ],
    womanBFROptions:    [
        { name: "14%-18%", value: "0" },
        { name: "18%-28%", value: "1" },
        { name: "28%-38%", value: "2" },
        { name: "38%以上", value: "3" }
    ]
  },
  onLoad: function(options) {
    this.setData({
        BFROptions: app.globalData.gender === '1' ? this.data.womanBFROptions : this.data.manBFROptions
    })
  },
  bindBFRChange: function(e) {
    this.setData({
      BFR: e.detail.value
    });
  },
  next: function() {
    if (this.data.BFR) {
      app.globalData.BFR = this.data.BFR;
      wx.navigateTo({
        url: '/pages/fitness/fitness'
      });
    }
  }
});
