const app = getApp();
const share = require('../../utils/share.js');
Page({
    data: {
        genderOptions: [{
            name: "男生",
            value: "0",
            imageUrl: '/images/man.svg'
        },
        {
            name: "女生",
            value: "1",
            imageUrl: '/images/woman.svg'
        }
        ],
        gender: null
    },
    bindGenderChange: function (e) {
        this.setData({
            gender: e.currentTarget.dataset.gender
        });
    },
    next: function () {
        if (this.data.gender) {
            app.globalData.gender = this.data.gender;
            wx.navigateTo({
                url: '/pages/age/age'
            });
        }
    },
    onShareAppMessage: share.onShareAppMessage,
    onShareTimeline: share.onShareTimeline
});