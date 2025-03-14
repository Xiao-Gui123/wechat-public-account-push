/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'push-plus',

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '山东',
  CITY: '青岛',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o71lh6XmiQmucRr-wi98v2NBeICc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3TRS-A9n01as_pw5bSzK6uEpyJm9195w8_cOhcXHgt8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o71lh6ZKmJGUtZay6_2fH057-eMc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3TRS-A9n01as_pw5bSzK6uEpyJm9195w8_cOhcXHgt8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '01-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1999', date: '11-25',
        }
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-01-25' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '泽宇',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o71lh6ZX7v1vAviBJxbEcH0a53Aw',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3TRS-A9n01as_pw5bSzK6uEpyJm9195w8_cOhcXHgt8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-08',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '泽宇', year: '1999', date: '01-21',
        },
        {
          type: '节日', name: '五一', year: '2020', date: '05-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 毕业纪念日
        { keyword: 'marry_day', date: '2022-06-30' },
      ],
    },
     {
      // 想要发送的人的名字
      name: '旭宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o71lh6c6l43KK9YlqNF_0Q26GvYY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '3TRS-A9n01as_pw5bSzK6uEpyJm9195w8_cOhcXHgt8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-09',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '旭宝', year: '1999', date: '08-17',
        },
        {
          type: '节日', name: '五一', year: '2020', date: '05-01',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 毕业纪念日
        { keyword: 'marry_day', date: '2022-06-30' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG

