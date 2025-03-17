Page({
  data: {
    genderOptions: ['男', '女'],
    generationOptions: ['00后', '90后', '80后'],
    selectedGender: '',
    selectedGeneration: '',
    generatedName: '',
    nameExplanation: ''
  },
  onLoad: function() {
    // 页面加载时初始化数据
  },
  onGenderChange: function(e) {
    this.setData({
      selectedGender: e.detail.value
    });
  },
  onGenerationChange: function(e) {
    this.setData({
      selectedGeneration: e.detail.value
    });
  },
  generateName: function() {
    if (!this.data.selectedGender || !this.data.selectedGeneration) {
      wx.showToast({
        title: '请先选择性别和代际',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({ title: '生成中...' });

    const api = require('../../utils/api');
    api.generateName({
      gender: this.data.selectedGender,
      generation: this.data.selectedGeneration
    })
    .then(res => {
      this.setData({
        generatedName: res.name,
        nameExplanation: res.explanation
      });
      wx.hideLoading();
    })
    .catch(err => {
      wx.hideLoading();
      wx.showToast({
        title: err.message || '生成失败',
        icon: 'none'
      });
    });
  }
})