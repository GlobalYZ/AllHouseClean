import { useContext } from "react";

const zh = {
  nav: {
    description: "简介",
    checklist: "服务清单",
    projects: "案例",
    testimonial: "评价",
  },
  hero: {
    title: "舒爽清洁",
    subtitle: "— 从家洁生活服务开始",
    contact: {
      title: "联系我们",
      phone: "(825) 889-6127 (message-only)",
      email: "service@allhouseclean.ca",
      address: "40 - 3710 Allan Drive SW\nEdmonton, AB T6X 0B6",
      button: "联系我们",
    },
  },
  description: {
    paragraphs: [
      "作为一家立足于埃德蒙顿的综合住宅清洁服务公司，我们用心帮助每一位需要我们的顾客，耐心细致的客户服务、可靠放心的规范化流程、无惧返工的清洁效果承诺，都让我们一步一步在好口碑之中走得更远。",
      "放心把您的清洁任务交给我们，我们会用专业的技术和工具，让您家中的每一个角落都得到充分关注，还您一个洁净的家。",
      "感谢每一位长期支持我们的客户、为我们介绍新朋友的客户、用暖心好评鼓励我们的客户，我们永远相信，质量和口碑才是最长远的，我们有信心成为最值得您信赖的选择。",
    ],
  },
  services: {
    header: {
      eyebrow: "我们的服务",
      title: "服务",
      description: "家洁生活服务提供专业的清洁服务，确保您的家居环境整洁舒适",
    },
    items: [
      {
        title: "专业清洁",
        description: "为您的家居或办公室提供专业的清洁服务，确保环境一尘不染。",
      },
      {
        title: "深度清洁",
        description: "彻底清洁每个角落，包括难以触及的区域，细致入微的关注。",
      },
      {
        title: "搬入/搬出",
        description:
          "专业的搬入/搬出和配套清洁服务，确保您的家为下一个租客做好准备。",
      },
    ],
  },
  checklist: {
    header: {
      eyebrow: "我们的服务",
      title: "服务清单",
      description: "我们提供专业的清洁服务，确保您的家居环境整洁舒适",
    },
    cleaningTypes: {
      daily: "日常清洁",
      deep: "深度清洁",
    },
    rooms: {
      bathroom: {
        title: "浴室",
        dailyTasks: [
          "消毒所有表面",
          "局部清洗墙壁/门",
          "清洁可触及的灯具和吊扇",
          "擦拭浴缸/淋浴间",
          "清洁淋浴间、水槽、镜子和梳妆台",
        ],
        deepTasks: [
          "消毒所有表面",
          "局部清洗墙壁/门",
          "清洁可触及的灯具和吊扇",
          "擦拭浴缸/淋浴间",
          "清洁淋浴间、水槽、镜子和梳妆台",
          "清洁柜子和抽屉内部 ⭐",
          "彻底清洗墙壁 ⭐",
        ],
      },
      kitchen: {
        title: "厨房",
        dailyTasks: [
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁可触及的灯具和吊扇",
          "清洁橱柜外部、电器和台面",
          "清洁微波炉内外",
        ],
        deepTasks: [
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁可触及的灯具和吊扇",
          "清洁橱柜外部、电器和台面",
          "清洁微波炉内外",
          "清洁冰箱后面 ⭐",
          "清洁烤箱和炉灶后面 ⭐",
        ],
      },
      living: {
        title: "客厅",
        dailyTasks: [
          "吸尘沙发、椅子和垫子下面",
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁家具、装饰品、百叶窗、窗台和踢脚线",
          "清洁可触及的灯具和吊扇",
        ],
        deepTasks: [
          "吸尘沙发、椅子和垫子下面",
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁家具、装饰品、百叶窗、窗台和踢脚线",
          "清洁可触及的灯具和吊扇",
          "清洁可触及的窗户 ⭐",
          "清洁柜子和抽屉内部 ⭐",
          "彻底清洗墙壁 ⭐",
        ],
      },
      bedroom: {
        title: "卧室",
        dailyTasks: [
          "吸尘床铺、椅子和垫子下面",
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁家具、装饰品、百叶窗、窗台和踢脚线",
          "清洁可触及的灯具和吊扇",
        ],
        deepTasks: [
          "吸尘床铺、椅子和垫子下面",
          "清洁所有表面、地毯和地板",
          "局部清洗墙壁/门",
          "清洁家具、装饰品、百叶窗、窗台和踢脚线",
          "清洁可触及的灯具和吊扇",
          "清洁可触及的窗户 ⭐",
          "清洁柜子和抽屉内部 ⭐",
          "彻底清洗墙壁 ⭐",
        ],
      },
    },
  },
  projects: {
    header: {
      eyebrow: "我们的工作",
      title: "成功案例",
      description: "展示我们专业的清洁服务成果",
    },
    items: [
      {
        title: "西南独立屋",
        date: "2025年5月2日",
        link: "#",
        before: "地板有顽固污渍，厨房油渍严重，卫生间有异味",
        after: "地板焕然一新，厨房洁净如新，卫生间清新无异味",
      },
      {
        title: "市中心公寓",
        date: "2025年4月15日",
        link: "#",
        before: "窗户积灰严重，地毯有污渍，浴室水垢明显",
        after: "窗户明亮如新，地毯洁净无痕，浴室焕然一新",
      },
      {
        title: "东区别墅",
        date: "2025年3月28日",
        link: "#",
        before: "庭院杂草丛生，室内灰尘堆积，厨房油污严重",
        after: "庭院整洁美观，室内一尘不染，厨房洁净如新",
      },
    ],
  },
  testimonial: {
    title: "客户评价",
    description: "客户体验分享",
    clientOne: {
      name: "张美玲",
      text: "今天，我终于可以安心地搬入新家了。感谢家洁生活服务团队，他们不仅帮我搬家，还帮我清洁了新家。他们的服务非常专业，让我非常满意。",
    },
    clientTwo: {
      name: "李伟",
      text: "这个团队表现出色 - 他们准时、细致，而且使用出处明确的清洁剂。对于我的许多问题都会一一耐心解答，工作也非常专业，强烈推荐！",
    },
  },
  whyUs: {
    header: {
      eyebrow: "我们的优势",
      title: "为什么选择我们",
      description: "",
    },
    introduction:
      "我们是扎根于埃德蒙顿的清洁团队，专业服务本地客户。我们真心热爱清洁事业，不断学习、不断成长，以最诚恳的态度完成每一次服务，无论是日常清洁、深度清洁还是退租清洁，我们都会认真面对，用心服务好每一位客户。 ",
    features: [
      {
        title: "专业",
        description: "针对不同的清洁区域和材质，我们有足够的知识储备和技术。",
      },
      {
        title: "可靠",
        description: "保证清洁效果，如有不达标处免费返工。",
      },
      {
        title: "安全",
        description:
          "使用的清洁工具和清洁剂均来自Home Depot，高效可靠，对生物无害。",
      },
    ],
  },
  footer: {
    company: {
      name: "AllHouseClean",
      description:
        "专业的清洁服务，让您的家居环境整洁舒适。我们提供全方位的家居清洁解决方案。",
    },
    contact: {
      title: "联系我们",
      phone: "(825) 889-6127 (message-only)",
      email: "service@allhouseclean.ca",
      address: "40 - 3710 Allan Drive SW\nEdmonton, AB T6X 0B6",
    },
    quickLinks: {
      title: "快速链接",
      home: "首页",
      about: "关于我们",
      services: "服务项目",
      contact: "联系我们",
    },
    copyright: "© {year} AllHouseClean. All rights reserved.",
  },
  contactForm: {
    remainingSubmissions: "您还可以提交 {count} 次消息",
    name: "姓名 *",
    email: "邮箱 *",
    message: "消息内容 *",
    sending: "发送中...",
    send: "发送消息",
    success: "消息已发送！我们将在24小时内与您联系。",
    error: "发送消息失败，请稍后重试。",
    rateLimit: "提交次数已达上限，请在 {minutes} 分钟后再试",
    serverError: "服务器返回了无效的响应，请稍后再试",
  },
};

export default zh;
