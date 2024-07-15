const app = getApp();

Page({
    data: {
        fitnessLevel: null,
        fitnessLevelOptions: [{
                name: "没有，几乎不运动。",
                value: "0"
            },
            {
                name: "很少，每周1-3次。",
                value: "1"
            },
            {
                name: "力量训练+有氧，每周4-5次。",
                value: "2"
            },
            {
                name: "高强度，每周4-5次。",
                value: "3"
            },
        ]
    },
    bindFitnessLevelChange: function (e) {
        this.setData({
            fitnessLevel: e.detail.value
        });
    },
    next: function () {
        if (this.data.fitnessLevel) {
            app.globalData.fitnessLevel = this.data.fitnessLevel;
            wx.navigateTo({
                url: '/pages/result/result'
            });
        }
    }
});