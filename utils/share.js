// utils/share.js

module.exports = {
    onShareAppMessage() {
      return {
        title: '饮食推荐',
        path: '/pages/index/index', 
        imageUrl: '/images/share_image.jpg' 
      };
    },
    onShareTimeline() {
      return {
        title: '60秒内找到最适合你的饮食',
        query: 'from=timeline',
        imageUrl: '/images/share_image.jpg'
      };
    }
  };
  