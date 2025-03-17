const API_KEY = '替换为你的API密钥';

export const generateName = async (params) => {
  try {
    const response = await wx.request({
      url: 'https://api.deepseek.com/v1/chat/completions',
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      data: {
        model: 'deepseek-r1',
        messages: [{
          role: 'user',
          content: `生成中文名字，性别：${params.gender}，代际：${params.generation}。要求：
          1. 包含详细姓名解释
          2. 符合现代审美
          3. 包含${params.gender === '男' ? '阳刚' : '柔美'}特质`
        }]
      }
    });

    return {
      name: response.data.choices[0].message.content.match(/姓名：(.*?)\n/)[1],
      explanation: response.data.choices[0].message.content
    };
  } catch (error) {
    console.error('API请求失败:', error);
    throw new Error('生成失败，请稍后重试');
  }
};