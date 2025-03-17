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
    // 调用Deepseek R1 API生成名字
    // 这里将实现名字生成逻辑
  }
})