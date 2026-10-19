// Stable IDs keep confirmation state independent of grouping and display order.
(() => {
  const stages = ['订票与预订时', '出发前 7–10 天', '出发前 1–2 天', '出行当天 / 启用备选前'];
  const categories = ['交通', '住宿', '活动', '餐饮', '证件与通信', '天气', '预算'];
  const tasks = [
    {id:'flights', stage:0, category:'交通', when:'12/25 · 12/28 · 01/03', title:'三段航班订单与机票权益', detail:'核对 HO1881、UO746、FM882 的出票状态、起降时间、航站楼、行李额与餐食；返程 FM882 计划 14:20 起飞。'},
    {id:'hk-rail', legacy:'0-4', stage:0, category:'交通', when:'12/26', title:'福田 ⇄ 西九龙往返高铁', detail:'开售后确定去回程车次，按回程时间安排晚餐、维港停留与通关。'},
    {id:'ets', legacy:'0-6', stage:0, category:'交通', when:'12/30', title:'ETS 车票与送站车辆', detail:'确定 Butterworth → KL Sentral 车次；预约 Sunway 酒店经跨海公路直达火车站的车辆、费用和出发时间。'},
    {id:'melaka-car', legacy:'0-7', stage:0, category:'交通', when:'01/01', title:'布城、马六甲往返包车', detail:'确定车型、接送点、费用、停车安排和回程时间。'},
    {id:'hotels', stage:0, category:'住宿', when:'全程 9 晚', title:'酒店订单与吉隆坡住宿方案', detail:'核对四地入住日期、房型和早餐权益；确定吉隆坡连续 4 晚的酒店，按实付房费调整预算。'},
    {id:'concerts', legacy:'1-0', stage:0, category:'活动', when:'12/25 · 01/02', title:'两场演唱会门票', detail:'保存电子票，核对场馆全名、开演时刻、入场口、安检与随身包尺寸。'},
    {id:'disney-ticket', legacy:'1-1', stage:0, category:'活动', when:'12/27', title:'迪士尼日期票与入园预约', detail:'核对日期级别、票种及预约要求，完成购票与预约。', source:'https://www.hongkongdisneyland.com/'},
    {id:'penang-hill', legacy:'1-2', stage:0, category:'活动', when:'12/29', title:'升旗山小火车', detail:'核对往返票价、购票方式与末班下山时间；The Habitat 如启用，另查门票和开放时段。', source:'https://www.penanghill.gov.my/'},
    {id:'petronas', legacy:'1-3', stage:0, category:'活动', when:'12/31 · 如入内', title:'双子塔登塔预约', detail:'决定是否入内；如登塔，预订时段并更新门票预算。', source:'https://www.petronastwintowers.com.my/'},
    {id:'restaurants', legacy:'1-4', stage:0, category:'餐饮', when:'12/29 · 01/01', title:'Ivy’s 与 Nancy’s 餐厅预约', detail:'核对营业、预约、元旦菜单、两人份量及停车安排；备选 Auntie Gaik Lean’s、Nyonya Makko 启用时也一并联系。'},
    {id:'travel-docs', stage:0, category:'证件与通信', when:'出发前', title:'护照与入境材料', detail:'核对护照有效期、香港过境及马来西亚入境所需材料，保存订单和证件备份。'},
    {id:'budget-prices', stage:0, category:'预算', when:'每次出票 / 付款后', title:'以实付金额更新账本', detail:'核对两人机票、9 晚房费、交通、门票、保险和 eSIM；确认行李、早餐、接驳等费用是否已含，避免重复计费。'},
    {id:'disney-calendar', legacy:'2-0', stage:1, category:'活动', when:'12/27', title:'迪士尼圣诞日历与夜间演出', detail:'查询开园、巡游及夜秀时间，再衔接酒店往返接驳。', source:'https://www.hongkongdisneyland.com/'},
    {id:'countdown', legacy:'2-1', stage:1, category:'活动', when:'12/31', title:'吉隆坡跨年活动', detail:'查询官方活动、烟花与场地公告；没有确定场次时保留城市夜游，不把烟花计入固定安排。'},
    {id:'penang-museum', stage:1, category:'活动', when:'12/29', title:'槟城州博物馆旧馆开放', detail:'核对 Lebuh Farquhar 旧馆是否开放；开放再安排入内，否则保留街区散步。'},
    {id:'weather-outlook', stage:1, category:'天气', when:'出发前 7–10 天', title:'更新目的地天气', detail:'用近期天气预报替代页面气候参考，调整外套、雨具和升旗山等户外安排。'},
    {id:'sz-airport', legacy:'0-2', stage:2, category:'交通', when:'12/25', title:'深圳机场至酒店步行段', detail:'核对 11 号线福星站出口、酒店实际入口及携行李路线。'},
    {id:'disney-shuttle', legacy:'0-0', stage:2, category:'交通', when:'12/27', title:'福朋 ⇄ 迪士尼接驳', detail:'向酒店确认预约、票价、上车点、行李安排、首末班与回程集合点；据此落实抵园时间。'},
    {id:'airport-shuttle', legacy:'0-1', stage:2, category:'交通', when:'12/28', title:'福朋 → 香港机场接驳', detail:'确认预约、班次、上车点和是否直停 T2；选择可在 08:45–09:00 抵达机场的班次，并预留航站楼转场。'},
    {id:'tungchung-shuttle', stage:2, category:'交通', when:'12/27', title:'东涌站 ⇄ 酒店接驳', detail:'核对时刻表与集合点，保留出租车替代方案。'},
    {id:'return-airport', stage:2, category:'交通', when:'01/03', title:'吉隆坡酒店送机', detail:'按所选酒店确定 Grab / 机场快线方案，预留值机与安检时间。'},
    {id:'shanghai-transfer', stage:2, category:'交通', when:'01/03', title:'浦东机场返家交通', detail:'确定返沪后的目的地与地铁、机场线或出租车方案，结合 19:40 计划抵达时间核对末班。'},
    {id:'breakfast', stage:2, category:'住宿', when:'吉隆坡入住时', title:'早餐权益与入场时间', detail:'如住尚萃，核对含早人数、供应时间及早餐截止；12/31 和 01/02 的早午合并安排随之调整。'},
    {id:'esim', stage:2, category:'证件与通信', when:'出发前 1–2 天', title:'eSIM 与离线资料', detail:'检查香港、马来西亚流量覆盖和启用方式，保存电子票、酒店地址与路线图。'},
    {id:'weather-alerts', stage:2, category:'天气', when:'出发前 48 小时', title:'暴雨、雷暴与台风预警', detail:'查看官方预警；必要时调整海滨、山顶与跨城出发时间。'},
    {id:'sz-concert-return', legacy:'0-3', stage:3, category:'交通', when:'12/25', title:'深圳演唱会散场交通', detail:'核对黄木岗 14 号线末班、现场出口及导流方向，预留散场排队。'},
    {id:'border-hours', stage:3, category:'交通', when:'12/26–27', title:'高铁通关与口岸开放时间', detail:'核对当天通关窗口和口岸开放安排，为入园日的过境留出排队余量。'},
    {id:'countdown-return', stage:3, category:'交通', when:'12/31', title:'跨年回程与封路', detail:'核对 KLCC 周边开放通道、列车末班和延运安排；住嘉轩时核对两段换乘及末段叫车。'},
    {id:'arena-return', legacy:'2-2', stage:3, category:'交通', when:'01/02', title:'Unifi Arena 散场末班车', detail:'核对 Sri Petaling 线和单轨的末班、临时延运与换乘衔接，保留出租车方案。'},
    {id:'night-food', stage:3, category:'餐饮', when:'12/29 · 01/02', title:'下山晚餐与散场夜宵', detail:'确认 New Lane、酒店附近店铺的晚间供应；夜宵按需要安排，演出前先吃足正餐。'},
    {id:'food-hours', stage:3, category:'餐饮', when:'当天 / 启用备选前', title:'餐厅营业与菜单', detail:'核对节假日营业、末单、预约、目标菜品与分量；Ho Kow 午后供应、Pak Putra 开门时间需单独确认。'},
    {id:'attraction-access', stage:3, category:'活动', when:'当天 / 启用备选前', title:'景点开放、门票与导览', detail:'核对侨生博物馆、Khoo Kongsi、山顶缆车、昂坪、康华利斯堡、伊斯兰艺术博物馆及娘惹家宅馆的开放区域、票价、维护和预约。'},
    {id:'harbour-show', stage:3, category:'活动', when:'12/26', title:'维港灯光秀与天星小轮', detail:'查询当天灯光秀安排及渡轮班次、票价，再决定是否衔接中环。'},
    {id:'melaka-river', stage:3, category:'活动', when:'01/01', title:'鸡场街夜市与河船', detail:'核对夜市开放、游船班次与票价，按回程时间决定是否体验。'},
    {id:'religious-sites', stage:3, category:'活动', when:'当天 / 启用备选前', title:'宗教场所参观规则', detail:'核对祈祷时段、访客开放范围、着装、摄影和车辆临停规则；粉红清真寺主行程只看外观。'}
  ];
  const storageKey = 'tripChecksV3';
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  const done = task => Object.hasOwn(saved, task.id) ? saved[task.id] === true : Boolean(task.legacy && saved[task.legacy]);
  const groupSelect = document.getElementById('confirmationGroup');
  const categorySelect = document.getElementById('confirmationCategory');
  const list = document.getElementById('checklist');
  function updateProgress() {
    const finished = tasks.filter(done).length;
    document.getElementById('confirmationProgress').textContent = `已确认 ${finished} / ${tasks.length} 项`;
    list.querySelectorAll('[data-confirm-group]').forEach(group => {
      const ids = [...group.querySelectorAll('[data-check]')].map(input => input.dataset.check);
      group.querySelector('[data-group-progress]').textContent = `${ids.filter(id => done(tasks.find(task => task.id === id))).length} / ${ids.length}`;
    });
  }
  function render() {
    const filtered = tasks.filter(task => categorySelect.value === '全部' || task.category === categorySelect.value);
    const byTime = groupSelect.value === 'time';
    const groups = byTime ? stages : categories;
    list.innerHTML = groups.map((name, index) => {
      const items = filtered.filter(task => byTime ? task.stage === index : task.category === name);
      if (!items.length) return '';
      return `<section class="card check-card" data-confirm-group><div class="confirmation-group-heading"><h4>${name}</h4><span data-group-progress></span></div>${items.map(task => `<div class="confirmation-item"><label class="check-item"><input type="checkbox" data-check="${task.id}" ${done(task) ? 'checked' : ''}><span><span class="confirmation-meta">${byTime ? task.category : stages[task.stage]} · ${task.when}</span><strong>${task.title}</strong><span class="confirmation-detail">${task.detail}</span></span></label>${task.source ? `<a class="confirmation-source" href="${task.source}" target="_blank" rel="noopener">官方查询 ↗</a>` : ''}</div>`).join('')}</section>`;
    }).join('');
    list.querySelectorAll('[data-check]').forEach(input => input.addEventListener('change', () => {
      saved[input.dataset.check] = input.checked;
      localStorage.setItem(storageKey, JSON.stringify(saved));
      updateProgress();
    }));
    updateProgress();
  }
  groupSelect.addEventListener('change', render);
  categorySelect.addEventListener('change', render);
  render();
})();
