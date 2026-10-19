window.TravelEditorial = (() => {
  const scenes = [
    ['深圳','深圳的第一晚','深圳福田天际线'],['香港','九龙街头，维港入夜','维多利亚港与天星小轮'],
    ['迪士尼','圣诞留给迪士尼','香港迪士尼城堡'],['槟城','初到乔治市','乔治市骑楼街巷'],
    ['槟城','娘惹宅邸与山顶日落','升旗山与乔治市日落'],['槟城 → 吉隆坡','旧城清晨，列车南下','邱公司与南洋店屋'],
    ['吉隆坡','吉隆坡的跨年夜','双子塔与 KLCC 公园'],['马六甲','红屋与马六甲河','荷兰红屋与马六甲河岸'],
    ['吉隆坡','留一晚给演唱会','武吉加里尔演出夜'],['吉隆坡 → 上海','吉隆坡 → 上海','吉隆坡天际线与返程']
  ];
  const version = '20261020-journal';
  function art(index, className='scene-art') {
    const x=(index%2)*561,y=Math.floor(index/2)*280.4;
    return `<svg class="${className}" viewBox="${x} ${y} 561 280.4" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${scenes[index][2]}主题插画"><image href="assets/destination-art.png?v=${version}" x="0" y="0" width="1122" height="1402"/></svg>`;
  }
  function dayHero(day,index) {
    const scene=scenes[index];
    return `<div class="day-hero day-cover">${art(index,'day-cover-art')}<div class="day-cover-shade"></div><div class="day-cover-top"><span class="day-number">DAY ${String(index+1).padStart(2,'0')}</span><span class="day-cover-date">${day.date}</span></div><div class="day-cover-copy"><span class="day-cover-city">${scene[0]}</span><h2>${scene[1]}</h2><span class="day-cover-weather">${day.weather} · 气候参考</span></div></div>`;
  }
  return {scenes,art,dayHero,version};
})();
