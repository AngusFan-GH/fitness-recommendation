const app = getApp();

Page({
    data: {
        goals: null,
        goalOptions: [{
                name: "我想增加肌肉和力量。",
                value: "0",
                imageUrl: '/images/power.svg'
            },
            {
                name: "我想减肥。",
                value: "1",
                imageUrl: '/images/fit.svg'
            },
            {
                name: "我想保持现在的身材。",
                value: "2",
                imageUrl: '/images/yoga.svg'
            }
        ]
    },
    bindGoalChange: function (e) {
        this.setData({
            goals: e.currentTarget.dataset.goals
        })
    },
    next: function () {
        if (this.data.goals) {
            app.globalData.goals = this.data.goals;
            wx.navigateTo({
                url: '/pages/weight/weight'
            })
        }
    }
})