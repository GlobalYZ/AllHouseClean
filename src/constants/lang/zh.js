import { useContext } from "react";

const zh = {
  home: "首页",
  projects: "项目",
  testimonials: "评价",
  about: "关于",
  hero: {
    title: "专注于构建卓越用户体验",
    description:
      "主要使用React、React Native、Next.js、Node.js、Javascript和TypeScript来搭建应用程序",
    buttonOne: "探索作品",
    buttonTwo: "马上联系",
    availability: "寻求开发岗位机会",
  },

  projectItems: {
    top: "作品集",
    title: "精选项目展示",
    description: "看看我开发的作品~",
    ProjectOne: {
      company: "个人项目",
      title: "作品集网站",
      results:
        "通过集成响应式技术和酷炫动画效果，提升用户体验。实现文本本地化功能，提升可访问性。使用技术: React, Next.js, Tailwind CSS, TypeScript, Framer Motion。",
    },
    ProjectTwo: {
      company: "BCIT ISSP项目",
      title: "SNEWS",
      results:
        "开发了一个具备FCM令牌管理功能的实时通知系统。在React Native应用集成FCM，支持离线下的消息存储功能。使用技术: React Native, Node.js, Firebase, SQLite, REST API, Android Studio。",
    },
    ProjectThree: {
      company: "BCIT学生项目",
      title: "Vacapal",
      results:
        "支持行程生成和聊天室功能等功能的旅行网站应用程序。应用OpenAI API来定制用户旅行日程，实现聊天信息的自动emoji生成。使用技术: Node.js, Express, MongoDB, OpenAI API, Socket.io, Docker。",
    },
    ProjectFour: {
      company: "BCIT学生项目",
      title: "TaleMaker",
      results:
        "一个基于大型语言模型(LLM)的故事生成应用程序。在电脑上部署大型语言模型(LLM)并通过Ngrok将服务以Https URL的形式暴露给应用端。使用技术: Dotnet, Flask(Python), React Native, SQLite, REST API, Ngrok。",
    },
  },
  tape: "高效快速, 高访问性, 交互丝滑, 卓越体验, 高扩展性, 高维护性, 安全可靠",
  testimonial: {
    top: "客户评价",
    title: "客户评价展示",
    description: "回顾过去，展望未来",
    clientOne: {
      name: "Barry Pointon",
      position: "物理系教授, BCIT",
      text: "Muyang的移动端开发技能和设计后端系统架构的能力对项目的成功至关重要。她在软件开发有着优秀的专业素养，并且在团队协作方面表现出色，能够按时交付高质量的成果。",
    },
    clientTwo: {
      name: "Warren Todd",
      position: "Galapagos Technologies Incorporated CEO",
      text: "她对Python有着深入的理解，并有效地将其用于后端开发和数据处理任务。不仅如此，她的Tailwind CSS使我们的团队轻松进行项目的前端设计，创建视觉上吸引人的应用程序。",
    },
  },
  toolBox: {
    title: "关于我",
    top: "了解更多",
    description: "快速了解我的专业技能和背景",
    summary: {
      title: "自我介绍",
      description:
        "我是一名 BCIT 毕业生，在前端开发、网页开发以及移动开发领域积累了扎实的专业知识。拥有3年的JavaScript和网站开发经验，以及1年的前端工程师工作经验。在过去几年里，我搭建了超过100个响应式页面，工作成果深受客户好评。",
    },
    skills: {
      title: "职能技能",
      description: "看看我的核心技能",
      webDevelopment: "网页开发",
      mobileDevelopment: "移动开发",
      RESTAPI: "REST API",
      testing: "测试",
      seo: "站内SEO",
      sql: "SQL数据库",
      deployment: "CI/CD部署",
      uxUI: "UX/UI设计",
    },
    devtools: {
      title: "工具箱",
      description: "开发工具和语言",
    },
  },
  contact: {
    title: "更多功能即将上线",
    description: "更多激动人心的功能正在开发中，敬请期待。",
    button: "马上联系",
  },
};

export default zh;
