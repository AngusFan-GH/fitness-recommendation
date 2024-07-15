const app = getApp();

Page({
    data: {
        goals: null,
        weight: null,
        goalsWeight: null,
        unitOptions: ['kg', 'lbs'],
        unitIndex: 0,
        goalsUnitIndex: 0,
        date: null,
        startDate: null
    },
    onLoad: function (options) {
        this.setStartDate();
        this.setData({
            goals: app.globalData.goals,
        })
    },
    bindWeightInput: function (e) {
        this.setData({
            weight: e.detail.value
        })
    },
    bindUnitChange: function (e) {
        this.setData({
            unitIndex: e.detail.value
        })
    },
    bindGoalsWeightInput: function (e) {
        this.setData({
            goalsWeight: e.detail.value
        })
    },
    bindGoalsUnitChange: function (e) {
        this.setData({
            goalsUnitIndex: e.detail.value
        })
    },
    bindDateChange: function (e) {
        this.setData({
            date: e.detail.value
        })
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
    next: function () {
        app.globalData.weight = this.data.weight;
        app.globalData.goalsWeight = this.data.goalsWeight;
        app.globalData.unit = this.data.unitIndex;
        app.globalData.goalsUnit = this.data.goalsUnitIndex;
        app.globalData.completeDate = this.data.date;
        wx.navigateTo({
            url: '/pages/height/height'
        })
    }
})