const app = getApp();
const share = require('../../utils/share.js');
Page({
  data: {
    goals: null,
    goalsMap: ['增肌', '减脂'],
    weight: null,
    goalsWeight: null,
    unitOptions: ['公斤', '斤', '磅'],
    unitIndex: 0,
    date: null,
    startDate: null,
    recommendDays: 0,
    recommendDate: null
  },
  onLoad: function (options) {
    this.setStartDate();
    this.setData({
      goals: app.globalData.goals,
    });
  },
  bindWeightInput: function (e) {
    const type = e.currentTarget.dataset.type;
    let value = parseFloat(e.detail.value.replace(/[^\d.]/g, ''));
    value = !isNaN(value) && value >= 0 ? value : null;

    if (type === 'weight') {
      this.setData({
        weight: value
      });
    } else {
      this.setData({
        goalsWeight: value
      });
    }
    const {
      weight,
      goalsWeight,
      goals
    } = this.data;
    if (weight !== null && goalsWeight !== null) {
      let days = 0,
        date = null;
      switch (goals) {
        case '0':
          days = this.calculateDaysForMuscleGain(weight, goalsWeight);
          date = this.addDaysToCurrentDate(days);
          break;
        case '1':
          days = this.calculateDaysForWeightLoss(weight, goalsWeight);
          date = this.addDaysToCurrentDate(days);
          break;
        default:
          days = 0;
          date = null;
      }
      this.setData({
        recommendDays: days,
        recommendDate: date.toLocaleDateString().replace(/\//g, '-')
      });
    }
  },
  bindUnitChange: function (e) {
    this.setData({
      unitIndex: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  setStartDate: function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.setData({
      startDate: `${year}-${month}-${day}`
    });
  },
  // 计算减脂所需的天数
  calculateDaysForWeightLoss: function (weight, goalsWeight) {
    const rate = 0.005; // 每周减重0.5%
    const weeks = Math.log(goalsWeight / weight) / Math.log(1 - rate);
    const days = weeks * 7;
    return Math.ceil(days);
  },
  // 计算增肌所需的天数
  calculateDaysForMuscleGain: function (weight, goalsWeight) {
    const rate = 0.01; // 每月增重1%
    const months = Math.log(goalsWeight / weight) / Math.log(1 + rate);
    const days = months * 30;
    return Math.ceil(days);
  },
  addDaysToCurrentDate: function (days) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + days);
    return currentDate;
  },
  useRecommendDate: function () {
    this.setData({
      date: this.data.recommendDate
    });
  },
  clearGoalsWeight: function () {
    this.setData({
      goalsWeight: null,
      recommendDate: null,
      recommendDays: null
    });
  },
  next: function () {
    app.globalData.weight = this.data.weight;
    app.globalData.goalsWeight = this.data.goalsWeight;
    app.globalData.unit = this.data.unitIndex;
    app.globalData.completeDate = this.data.date;
    wx.navigateTo({
      url: '/pages/height/height'
    });
  },
  onShareAppMessage: share.onShareAppMessage,
  onShareTimeline: share.onShareTimeline
});