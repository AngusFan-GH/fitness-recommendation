const app = getApp();

Page({
    data: {
        sexCoefficient: [1, 0.9],
        shapeCoefficient: [1, 0.95, 0.9, 0.85],
        fitnessLevels: [1.2, 1.3, 1.46, 1.55],
        goalsCoefficient: [-7700, 6500],
        heatGapCoefficient: [6500, -7700, 0],
        proteinCoefficient: [2.5, 1.5, 2],
        fatCoefficient: [1, 0.8, 0.8],
        recommendations: {
            calories: 0,
            protein: 0,
            fat: 0
        },
        previewList: [
            {
                label: '小红书',
                src: '/images/qr-code2.jpg'
            },
            {
                label: '微信',
                src: '/images/qr-code.jpg'
            }
        ]
    },
    onLoad: function (options) {
        const {
            gender,
            weight,
            unit,
            goalsWeight,
            date,
            goals,
            fitnessLevel,
            BFR,
        } = app.globalData;
        const BMR = this.calcBMR(weight, gender, BFR);
        const TDEE = this.calcTDEE(BMR, fitnessLevel);
        const heatGap = this.calcHeatGap(weight, unit, goalsWeight, date, goals);

        const calories = (TDEE + heatGap).toFixed(0);
        const protein = (this.standardizeUnit2Kg(weight, unit) * this.data.proteinCoefficient[goals]).toFixed(0);
        const fat = (this.standardizeUnit2Kg(weight, unit) * this.data.fatCoefficient[goals]).toFixed(0);
        const carbohydrate = ((calories - protein * 4 - fat * 9) / 4).toFixed(0);

        this.setData({
            recommendations: {
                calories,
                protein,
                fat,
                carbohydrate
            }
        });
    },
    // 计算热量缺口
    calcHeatGap: function (weight, unit, goalsWeight, date, goals) {
        if (!goalsWeight) return 0;
        return (this.standardizeUnit2Kg(weight, unit) - this.standardizeUnit2Kg(goalsWeight, unit)) * this.data.heatGapCoefficient[goals] / this.calcDays(date);
    },
    // 计算总日能量消耗
    calcTDEE: function (BMR, fitnessLevel) {
        return BMR * this.data.fitnessLevels[fitnessLevel];
    },
    // 计算基础代谢率
    calcBMR: function (weight, gender, BFR) {
        return weight * 21 * this.data.sexCoefficient[gender] * this.data.shapeCoefficient[BFR];
    },
    // 计算目标日期距今天数
    calcDays: function (givenDate) {
        const date = new Date(givenDate);
        const now = new Date();
        const diffInMs = now - date;
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        return Math.floor(diffInDays);
    },
    // 体重单位转换
    standardizeUnit2Kg: function (weight, unit) {
        switch (unit) {
            case '1':
                return weight * 0.5;
            case '2':
                return weight * 2.20462;
            default:
                return weight;
        }
    },
    previewImage(e) {
        const currentUrl = e.currentTarget.dataset.src; // 获取当前点击图片链接
        wx.previewImage({
            current: currentUrl, // 当前点击的图片链接,
            urls: this.data.previewList.map(item => item.src)
        });
    }
});