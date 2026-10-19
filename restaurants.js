/* A rating is shown only with a source URL and verification date. */
window.TravelDining = (() => {
  const make = (id, name, city, area, menu, budget, hours = null) => ({id, name, city, area, menu, budget, hours, hoursVerifiedAt:null, dianping:{rating:null, source:null, verifiedAt:null}, googleMaps:{rating:null, source:null, verifiedAt:null}, storefront:null, source:null});
  const entries = [
    make('fenghuanglou','凤凰楼','深圳','华强北 · 门店与路线待落实',['虾饺','红米肠','叉烧包'],'¥80'),
    make('huaxiange','华香鹅','深圳','笋岗 · 门店与路线待落实',['卤鹅拼盘','卤水豆腐','粿条汤'],'¥60'),
    make('sunhing','新兴食家','香港','坚尼地城',['虾饺','烧卖','流沙包＋茶'],'HK$90'),
    make('australia','澳洲牛奶公司','香港','佐敦',['炒蛋多士','叉烧通粉','热奶茶'],'HK$75','07:30–22:00；周四常休'),
    make('kaikai','佳佳甜品','香港','佐敦',['芝麻糊','杏仁露','汤圆分食'],'HK$35','12:00–次日 03:00'),
    make('makman','麦文记面家','香港','佐敦',['鲜虾云吞面','鲮鱼球','蚝油菜心'],'HK$70'),
    make('royal','皇家宴会厅 Royal Banquet Hall','香港','迪士尼 · 幻想世界',['叉烧饭或日式套餐','当天蔬菜配菜','饮料两杯'],'HK$160'),
    make('mainstreet','Main Street Bakery','香港','迪士尼 · 美国小镇大街',['当日甜点一份','咖啡两杯'],'HK$75'),
    make('explorer','Explorer’s Club Restaurant','香港','迪士尼 · 迷离庄园旁',['东南亚风味套餐两份','小食一份'],'HK$180'),
    make('tungchung-eatery','宜客乐 The Eatery','香港','东涌福朋喜来登酒店',['早餐自助：粥或蛋料理','面包、水果','咖啡或茶'],'HK$150'),
    make('teksen','德盛饭店 Tek Sen Restaurant','槟城','George Town · Carnarvon Street',['双烤猪肉','炒豆苗','豆腐＋米饭'],'RM55','12:00–14:30 / 17:30–21:00'),
    make('beehwa','Bee Hwa Cafe','槟城','George Town',['咖喱面','云吞面','咖啡两杯'],'RM20','07:00–14:30'),
    make('ivy','Ivy’s Nyonya Cuisine','槟城','George Town',['娘惹咖喱鸡','参巴虾','小金杯＋米饭'],'RM60','12:00–15:00 / 18:00–21:00'),
    make('cliff','Cliff Café','槟城','升旗山 · 山顶餐饮区',['咖啡或茶两杯','小点心分食'],'RM18'),
    make('888','888 Hokkien Mee','槟城','Presgrave Street',['福建虾面两碗','卤蛋','凉茶'],'RM23'),
    make('tohsoon','Toh Soon Cafe','槟城','Campbell Street 巷内',['炭烤咖椰吐司','半熟蛋','咖啡'],'RM18','08:00–15:00；周日常休'),
    make('hameediyah','Hameediyah Restaurant','槟城','Campbell Street',['Nasi Kandar 米饭','咖喱鸡、牛肉各一份','秋葵'],'RM35','10:00–22:00'),
    make('mtr','MTR 1924','吉隆坡','Brickfields · KL Sentral 周边',['Masala Dosa','南印度套餐','热饮'],'RM40'),
    make('yutkee','Yut Kee Restaurant','吉隆坡','Dang Wangi',['海南面','Kaya Roll 分食','半熟蛋＋咖啡'],'RM28','07:30–15:00；周一常休'),
    make('koonkee','Koon Kee Wantan Mee','吉隆坡','茨厂街',['干捞云吞面两份','水饺'],'RM23','10:00–20:00'),
    make('tokyo','The Tokyo Restaurant','吉隆坡','Lot 10 · Isetan',['巴斯克芝士蛋糕分食','咖啡两杯'],'RM35'),
    make('kimlian','金莲记 Kim Lian Kee','吉隆坡','Lot 10 Hutong · 档口待落实',['福建面','另一份主食分食','饮料'],'RM45'),
    make('oldtown','OldTown White Coffee','吉隆坡','Bukit Jalil · 分店待落实',['咖椰吐司','半熟蛋','白咖啡'],'RM23'),
    make('nancy','Nancy’s Kitchen','马六甲','Taman Kota Laksamana',['鸡肉 Pongteh','Otak-otak','娘惹杂菜＋米饭'],'RM60','11:30–17:00'),
    make('jonker88','Jonker 88','马六甲','鸡场街',['煎蕊','Baba Laksa 分食'],'RM18','09:30–18:00'),
    make('famosa','古城鸡饭粒 Famosa Chicken Rice Ball','马六甲','鸡场街',['海南鸡分食','鸡饭粒','青菜'],'RM40'),
    make('dacheng','大城堡鱼头 Restoran SKW','吉隆坡','Sri Petaling · 门店与路线待落实',['蒸鱼头分食','豆腐','青菜＋米饭'],'RM45'),
    make('madamkwan','Madam Kwan’s','吉隆坡','Suria KLCC',['椰浆饭','Nasi Bojari 分食','蔬菜'],'RM45'),
    make('abc','ABC Bistro Café','吉隆坡','Sri Petaling',['Roti Canai','Dhal 豆咖喱','热拉茶'],'RM25'),
    make('pelita','Nasi Kandar Pelita','吉隆坡','Jalan Ampang',['Roti Canai','汤面或米饭','热拉茶'],'RM25'),
    make('ilforno','IL Forno · 凯悦尚萃酒店','吉隆坡','Hyatt Centric City Centre',['早餐自助：蛋料理','水果、面包','咖啡或茶'],'房价含早','06:30–10:30'),
    make('grandmamas','Grandmama’s','吉隆坡','KLIA T1 · 登机区域待落实',['椰浆饭或鸡饭两份','饮料'],'RM50'),
    make('mido','美都餐室 Mido Cafe','香港','油麻地',['焗猪扒饭','菠萝油','奶茶'],'HK$80'),
    make('hop-yik-tai','合益泰小食','香港','深水埗 · 路线待落实',['肠粉两份','鱼蛋','豆浆'],'HK$35'),
    make('auntie','Auntie Gaik Lean’s Old School Eatery','槟城','George Town',['娘惹咖喱','Jiu Hu Char','小金杯＋米饭'],'RM90'),
    make('joohooi','Joo Hooi Cafe','槟城','Penang Road 周边',['亚参叻沙','煎蕊'],'RM23'),
    make('deen','Deen Maju Nasi Kandar','槟城','Jalan Gurdwara',['Nasi Kandar','咖喱鸡','蔬菜'],'RM33'),
    make('hokow','何九海南茶店 Ho Kow','吉隆坡','茨厂街周边',['咖椰吐司','半熟蛋','海南咖啡'],'RM30'),
    make('village','Village Park Restaurant','吉隆坡','Damansara Uptown',['炸鸡椰浆饭','参巴酱另放','饮料'],'RM35'),
    make('merchant','Merchant’s Lane','吉隆坡','Jalan Petaling',['咖啡两杯','分享餐或蛋糕一份'],'RM40'),
    make('makko','Restoran Nyonya Makko','马六甲','Taman Melaka Raya',['Pongteh','Otak-otak','娘惹杂菜＋米饭'],'RM65'),
    make('chungwah','中华茶室 Chung Wah','马六甲','鸡场街口',['海南白切鸡','鸡饭粒'],'RM30'),
    make('pakputra','Pak Putra Tandoori & Naan','马六甲','Taman Kota Laksamana',['Tandoori 烤鸡','Naan','Dhal 豆咖喱'],'RM35')
  ];
  const venues = Object.fromEntries(entries.map(v => [v.id, v]));
  const mealIds = [
    ['fenghuanglou','huaxiange'], ['sunhing','kaikai','makman'],
    [null,'royal','mainstreet','explorer'], ['tungchung-eatery',null,null,'teksen'],
    ['beehwa','ivy','cliff','888'], ['tohsoon','hameediyah',null,'mtr'],
    ['yutkee','koonkee','tokyo','kimlian'], ['oldtown','nancy','jonker88','famosa'],
    ['oldtown','dacheng',null,'abc'], ['oldtown','grandmamas',null]
  ];
  const alternatives = {mido:'mido',makman:'makman',timho:'hop-yik-tai',auntie:'auntie',joohooi:'joohooi',deen:'deen',hokow:'hokow',village:'village',merchant:'merchant',makko:'makko',chungwah:'chungwah',pakputra:'pakputra'};
  function prepareMeals(days, galleries) {
    days.forEach((day, i) => day.meals.forEach((meal, j) => {meal[9] = mealIds[i][j] || null; const venue=venues[meal[9]]; if(venue){meal[1]=venue.name;meal[6]=venue.menu.join('＋');}}));
    const picks = {teksen:['teksen',1],ivy:['ivy',0],nancy:['nancy',1],jonker88:['cendol',1]};
    Object.entries(picks).forEach(([id,[key,index]])=>{const photo=galleries[key]?.[index];if(photo){venues[id].storefront={url:photo.url,source:photo.source,caption:photo.caption};venues[id].source=photo.source;}});
  }
  function labelBudgetRows(rows) {
    const dates=['12/25','12/26','12/27','12/28','12/29','12/30','12/31','01/01','01/02','01/03'];
    dates.forEach((date, dayIndex) => {
      let mealIndex=0;
      rows.filter(row=>row[0]===date).forEach(row=>{
        if(dayIndex===1&&row[1]==='早餐')return;
        const id=mealIds[dayIndex][mealIndex++];
        const venue=venues[id];
        if(!venue){row[2]='路途补给';return;}
        row[2]=venue.name;
        const price=venue.budget.match(/^(HK\$|RM|¥)([0-9.]+)$/);
        if(price){const total=Number(price[2])*2;row[3]=price[1]+total;row[4]=Math.round(total*(price[1]==='HK$'?0.93:price[1]==='RM'?1.7:1));}
      });
    });
  }
  function query(venue){return `https://m.dianping.com/search?keyword=${encodeURIComponent(venue.city+' '+venue.name+' '+venue.area.replace(/ · .*待落实/g,''))}`;}
  const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function renderVenue(id,options={}) {
    const venue=venues[id];if(!venue)return '';
    const providers = [
      {key:'dianping', label:'点评', name:'大众点评', valid:u=>u.hostname==='dianping.com'||u.hostname.endsWith('.dianping.com')},
      {key:'googleMaps', label:'Google Maps', name:'Google Maps', valid:u=>(u.hostname==='www.google.com'||u.hostname==='maps.google.com')&&u.pathname.startsWith('/maps')}
    ];
    const provider=providers.find(p=>{
      const r=venue[p.key];if(!r)return false;
      try{return typeof r.rating==='number'&&r.rating>=0&&r.rating<=5&&new URL(r.source).protocol==='https:'&&p.valid(new URL(r.source))&&typeof r.verifiedAt==='string'&&Number.isFinite(Date.parse(r.verifiedAt));}catch{return false;}
    });
    const verified=!!provider;
    const rating=provider?venue[provider.key]:null;
    const mapsQuery=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.city+' '+venue.name+' '+venue.area.replace(/ · .*待落实/g,''))}`;
    const image=venue.storefront;
    return `<article class="card meal restaurant-card ${options.backup?'backup-profile':''}" data-restaurant="${escape(id)}"><div class="restaurant-heading"><span class="meal-slot">${escape(options.slot||'备选餐厅')}</span><a class="dp-rating" href="${escape(verified?rating.source:mapsQuery)}" target="_blank" rel="noopener" aria-label="${escape(venue.name)}${verified?provider.name+'评分 '+rating.rating+'，核验于 '+rating.verifiedAt:'Google Maps 查询'}"><span class="dp-mark">${verified?provider.label:'Google Maps'}</span>${verified?`<strong>${rating.rating.toFixed(1)}</strong><span>/ 5</span><time class="rating-date">${escape(rating.verifiedAt.slice(0,10))}</time>`:'<span>查评分 ↗</span>'}</a></div>${image?`<figure class="restaurant-storefront"><button type="button" data-photo="${escape(image.url)}" data-caption="${escape(image.caption)}" data-source="${escape(image.source)}" aria-label="放大${escape(venue.name)}店面图片"><img loading="lazy" decoding="async" referrerpolicy="no-referrer" src="${escape(image.url)}" alt="${escape(image.caption)}" onerror="this.closest('figure').hidden=true"></button></figure>`:''}<div class="meal-body"><p class="restaurant-area">${escape(venue.city)} / ${escape(venue.area.replace(' · 分店待落实','').replace(' · 档口待落实','').replace(' · 航站楼待落实','').replace(' · 登机区域待落实',''))}</p><h4>${escape(venue.name)}</h4><div class="restaurant-facts"><div><span>人均预算</span><b>${escape(options.included?'房价含早':venue.budget)}</b></div><div><span>${venue.hours?'营业参考':'营业时间'}</span>${venue.hours?`<b>${escape(venue.hours)}</b>`:`<a href="${escape(mapsQuery)}" target="_blank" rel="noopener">查门店 ↗</a>`}</div></div><div class="restaurant-order"><span class="order-label">两个人，点这些</span><ul>${venue.menu.map(dish=>`<li>${escape(dish)}</li>`).join('')}</ul></div>${options.note?`<p class="restaurant-context">${escape(options.note)}</p>`:''}<div class="restaurant-links"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.city+' '+venue.name+' '+venue.area.replace(/ · .*待落实/g,''))}" target="_blank" rel="noopener">Google Maps ↗</a><a href="${escape(query(venue))}" target="_blank" rel="noopener">大众点评 ↗</a>${image?`<a href="${escape(image.source)}" target="_blank" rel="noopener">门头来源 ↗</a>`:''}</div></div></article>`;
  }
  function renderMeal(meal) {
    let id=meal[9];
    const centric=localStorage.getItem('tripKLHotelRoute')==='centric';
    if(centric&&!id&&meal[0].startsWith('第二顿'))id='madamkwan';
    if(!id)return '';
    if(meal[1].includes('IL Forno'))id='ilforno';
    if(centric&&id==='dacheng')id='madamkwan';
    if(centric&&id==='abc')id='pelita';
    // In the included-breakfast version, the former snack slot becomes a full pre-show meal.
    if(centric&&!id&&meal[0].startsWith('第二顿'))id='madamkwan';
    return renderVenue(id,{slot:meal[0],included:id==='ilforno'});
  }
  function renderBackup(item) {
    const id=alternatives[item.key];if(!id)return '';
    const photo=item.photos?.find(p=>/Exterior|Entrance|Shopfront|Queue/.test(p.title));
    if(photo&&!venues[id].storefront)venues[id].storefront={url:photo.url,source:photo.source,caption:photo.title};
    return renderVenue(id,{backup:true,note:item.fit});
  }
  return {venues,prepareMeals,labelBudgetRows,renderMeal,renderVenue,renderBackup,query};
})();
