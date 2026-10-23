// 课表 + 作业数据。改完保存、刷新页面即可，无需构建。
// day: 1=周一 … 7=周日；start/end: 节次；weeks: "all" | "odd"(单周) | "even"(双周)
// maxWeek: 可选，最后一次上课的周次；room/teacher 不确定时留空字符串 ""
window.KEBIAO = {
  term: "2026-2027 学年第一学期",
  week1Monday: "2026-08-31", // 第1周的周一（Asia/Shanghai）
  totalWeeks: 20,            // 仅用于周次切换范围，未经教务确认
  periodStart: { 1: "08:30", 3: "10:30", 5: "14:00", 7: "15:50", 9: "19:00" },
  courses: [
    { name: "客户关系管理",       teacher: "曲金艺", room: "208", day: 1, start: 3, end: 4, weeks: "all" },
    { name: "物流运输组织与管理", teacher: "徐驰",   room: "307", day: 1, start: 7, end: 8, weeks: "all" },
    { name: "创业基础",           teacher: "程欢",   room: "",    day: 1, start: 9, end: 9, weeks: "all" },

    { name: "采购管理与库存控制", teacher: "张亚强", room: "207", day: 2, start: 1, end: 2, weeks: "all" },
    { name: "物流市场营销",       teacher: "程巳益", room: "207", day: 2, start: 3, end: 4, weeks: "all" },
    { name: "物流项目管理",       teacher: "程巳益", room: "206", day: 2, start: 5, end: 6, weeks: "all" },

    { name: "客户关系管理",       teacher: "曲金艺", room: "209", day: 3, start: 3, end: 4, weeks: "even" },
    { name: "采购管理与库存控制", teacher: "张亚强", room: "207", day: 3, start: 5, end: 6, weeks: "even" },
    { name: "物流运输组织与管理", teacher: "徐驰",   room: "103", day: 3, start: 7, end: 8, weeks: "all" },
    { name: "物流系统规划与设计", teacher: "田丹梅", room: "执阅楼407", day: 3, start: 9, end: 10, weeks: "all" },

    { name: "学术论文写作与发表", teacher: "苏晓洲", room: "303", day: 4, start: 3, end: 4, weeks: "all" },
    { name: "智慧物流发展前沿",   teacher: "周林荣", room: "103", day: 4, start: 7, end: 8, weeks: "all" },

    { name: "习近平新时代中国特色社会主义思想概论", teacher: "闫杰", room: "执阅楼408", day: 5, start: 1, end: 2, weeks: "all" },
    { name: "物流系统规划与设计", teacher: "田丹梅", room: "执阅楼307", day: 5, start: 3, end: 4, weeks: "all" },
    { name: "形势与政策",         teacher: "王冬梅", room: "执阅楼104", day: 5, start: 7, end: 8, weeks: "all", maxWeek: 8 }
  ],
  // 作业：复制一行改内容即可。due 用 "YYYY-MM-DD" 或 "YYYY-MM-DD HH:mm"（北京时间）
  // id 要唯一，页面勾选“完成”会按 id 存在本机 localStorage；done:true 表示默认已完成
  homework: [
    // { id: "hw1", course: "物流系统规划与设计", content: "第四章作业", due: "2026-10-30 23:59", done: false },
  ]
};
