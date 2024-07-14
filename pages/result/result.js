const app = getApp();

Page({
  data: {
    recommendations: {
      calories: 0,
      protein: 0,
      fat: 0
    }
  },
  onLoad: function(options) {
    const { gender, age, weight, unit, goalsWeight, goalsUnit, goals, fitnessLevels } = app.globalData;
console.log(app.globalData)
    // 示例计算，实际应用中根据需要进行计算
    const calories = (unit === 0 ? weight * 30 : weight * 13.5);
    const protein = (unit === 0 ? weight * 1.2 : weight * 0.54);
    const fat = (unit === 0 ? weight * 0.8 : weight * 0.36);

    this.setData({
      recommendations: {
        calories,
        protein,
        fat
      }
    });
  }
});
