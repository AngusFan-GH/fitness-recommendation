const app = getApp();
const share = require('../../utils/share.js');

Page({
  data: {
    BFR: null,
    BFROptions: [],
    manBFROptions: [{
        name: "10%-14%",
        value: "0",
        imageUrl: '/images/man-BFR-1.png'
      },
      {
        name: "14%-20%",
        value: "1",
        imageUrl: '/images/man-BFR-2.png'
      },
      {
        name: "20%-28%",
        value: "2",
        imageUrl: '/images/man-BFR-3.png'
      },
      {
        name: "28%以上",
        value: "3",
        imageUrl: '/images/man-BFR-4.png'
      }
    ],
    womanBFROptions: [{
        name: "14%-18%",
        value: "0",
        imageUrl: '/images/woman-BFR-1.png'
      },
      {
        name: "18%-28%",
        value: "1",
        imageUrl: '/images/woman-BFR-2.png'
      },
      {
        name: "28%-38%",
        value: "2",
        imageUrl: '/images/woman-BFR-3.png'
      },
      {
        name: "38%以上",
        value: "3",
        imageUrl: '/images/woman-BFR-4.png'
      }
    ]
  },
  onLoad: function (options) {
    this.setData({
      BFROptions: app.globalData.gender === '1' ? this.data.womanBFROptions : this.data.manBFROptions
    })
  },
  bindBFRChange: function (e) {
    this.setData({
      BFR: e.currentTarget.dataset.bfr
    });
  },
  next: function () {
    if (this.data.BFR) {
      app.globalData.BFR = this.data.BFR;
      wx.navigateTo({
        url: '/pages/fitness/fitness'
      });
    }
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
});