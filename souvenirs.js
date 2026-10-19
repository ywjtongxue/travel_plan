/* Product ideas, not live stock or price claims. */
window.TravelGifts = (() => {
  const items = [
    {key:'hk-god',city:'香港',title:'G.O.D. 住好啲 · 港味布袋与收纳包',tag:'首选 · 轻、耐压、不怕放',what:'挑香港街景、招牌或传统花纹的布袋、拉链包、眼罩。给自己留一个，也适合送朋友。',where:'12/26 上环、中环散步时找顺路门店；不为购物另绕路。',pack:'布类平铺在衣物之间；避开同系列陶瓷、玻璃及大件家居。',buy:'在香港买。选本地设计图案，比通用品牌更有旅行记忆。',query:'G.O.D. Hong Kong'},
    {key:'hk-tram',city:'香港',title:'香港电车 · 金属钥匙扣与布章',tag:'小件纪念 · 优先扁平款',what:'电车造型钥匙扣、布章或贴纸；明信片可夹在硬纸板之间。',where:'若当天本来去港岛，再找电车纪念品；只走九龙就跳过这一项。',pack:'金属小件单独装袋避免刮花；不要选细长易折的电车模型。',buy:'香港顺路买，不把纪念品变成新增景点。',query:'Hong Kong Tramways souvenirs'},
    {key:'hk-disney',city:'香港',title:'香港迪士尼 · 徽章与刺绣小包',tag:'12/27 顺路 · 两个人各选一件',what:'优先香港迪士尼字样、园区元素或当季图案的徽章、刺绣包；选一对有呼应的款式。',where:'园内商店看中就记款号，离园前集中买。',pack:'徽章扣好针帽装入小盒，布包压平；避开水晶球、陶瓷杯与大型头饰。',buy:'不选饼干、鲜点或巧克力，省去后面多日保存的问题。',query:'Hong Kong Disneyland shops'},
    {key:'penang-batik',city:'槟城',title:'Batik 蜡染 · 小方巾或拉链包',tag:'首选 · 娘惹色彩，日常也能用',what:'选低饱和花叶纹小方巾、束口袋或化妆包；两个人可选同色系不同花纹。',where:'12/29 午后或 12/30 老城散步时看 George Town 工艺店；不专程绕去远郊工厂。',pack:'平铺装袋，与湿衣物分开。现场看面料、缝线和染色说明，再决定是否值得买。',buy:'在槟城挑花色；不要仅凭 batik 标签就按手工蜡染价格购买。',query:'George Town Penang batik shop'},
    {key:'penang-print',city:'槟城',title:'乔治市插画 · 明信片与布袋',tag:'轻便小礼 · 比通用冰箱贴更个人',what:'选店屋、姓氏桥、街猫或娘惹窗花主题的本地插画卡片、贴纸、布袋。',where:'亚美尼亚街周边文创店顺路挑；若考虑 Hin Bus Depot 市集，先看当天活动。',pack:'纸品夹硬卡，布袋折叠；避开无盒装的小瓷器。',buy:'槟城买当地创作者作品；食品暂不作为主选，后面还要继续旅行。',query:'Armenian Street Penang art souvenirs'},
    {key:'kl-boh',city:'吉隆坡',title:'BOH · 原叶红茶或独立茶包',tag:'机场优先候选 · 轻、易分送',what:'偏爱清爽就选无糖纯茶；想分送选独立茶包。奶茶粉与纯茶是不同产品，别只比较盒子大小。',where:'01/03 返程机场购物清单；市区超市看到时拍下包装正反面与价格。',pack:'密封原包装，纸盒放在衣物之间防压；按包装保存。',buy:'机场有同款、单包克重相同且价差可接受时再买；机场没有就放弃，不为茶包赶回市区。',query:'BOH tea KLIA Terminal 1'},
    {key:'kl-beryls',city:'吉隆坡',title:'Beryl’s · 小盒装巧克力',tag:'返程再买 · 避开多日高温携带',what:'选适合分送的小盒装、独立包装口味；优先原味、坚果等收礼人容易接受的选择。',where:'先在市区记同款价格；若 KLIA T1 出境动线有货，返程再购。',pack:'尽量在结束户外行程后买，避免暴晒；按包装温度保存，手提可减少受热与挤压。',buy:'机场优先是购买策略，不代表已确认机场同价。只比同口味、同克重、同件数。',query:'Beryls chocolate KLIA Terminal 1'},
    {key:'kl-pewter',city:'吉隆坡',title:'Royal Selangor · 小型锡制摆件',tag:'可选 · 送重要的人，先看预算',what:'优先小型书签、钥匙扣或迷你摆件；比杯壶更轻、更好装箱。',where:'市区若顺路可先看实物与型号；机场同型号、同价位再买。',pack:'保留原盒与填充物，锡质偏软，避免重物直压；较重款计入行李重量。',buy:'先确认返程航站楼是否有店及目标款；没有明确库存就不把它设成必买礼物。',query:'Royal Selangor KLIA Terminal 1'}
  ].map(item=>({...item,kind:'伴手礼'}));
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function render(x){return `<article class="card gift-card" data-gift="${esc(x.key)}"><div class="gift-meta">${esc(x.city)} / 带回家的小东西</div><h3>${esc(x.title)}</h3><p class="gift-tag">${esc(x.tag)}</p><dl><dt>挑什么</dt><dd>${esc(x.what)}</dd><dt>在哪买</dt><dd>${esc(x.where)}</dd><dt>怎么装</dt><dd>${esc(x.pack)}</dd><dt>购买顺序</dt><dd>${esc(x.buy)}</dd></dl><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x.query)}" target="_blank" rel="noopener">查门店 ↗</a></article>`;}
  return {items,render};
})();
