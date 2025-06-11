import { create } from 'zustand'



// 建立 store hook
const usePsyStore = create((set) => ({
	// states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 6,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}));


const useQuestionStore = create((set) => ({
  questions: {
    "1":{
      title: "你走進魔法藥草園，哪一株植物最吸引你的目光？",
      options: [
        {title: "A. 銀色藤蔓纏繞的幽光花", value: 1},
        {title: "B. 燃燒著緋紅小果的烈焰木", value: 2},
        {title: "C. 微微顫動的清露蘑菇", value: 3},
        {title: "D. 結著繁星般種子的黑羽草", value: 4},
      ]
    },
    "2":{
      title: "你踏進了魔法圖書館，一本古書從高處墜落砸在你腳邊，你會怎麼做？",
      options: [
        {title: "A. 小心地翻閱，研讀書中的魔法陣", value: 1},
        {title: "B. 直接翻開書頁，希望觸發神奇咒語", value: 2},
        {title: "C. 將書抱回去，等有空再靜靜研讀", value: 3},
        {title: "D. 靜觀其變，沉思這是否是某種試煉", value: 4},
      ]
    },
    "3":{
      title: "若你能為自己施展一個一週內有效的魔法，你會選擇？",
      options: [
        {title: "A. 讀心術：能聽見他人的心聲", value: 1},
        {title: "B. 心靈淨化：釋放內在情緒與能量", value: 2},
        {title: "C. 回憶旅程：重溫過去某個溫暖片段", value: 3},
        {title: "D. 隱形咒：讓你從世界中悄然隱去", value: 4},
      ]
    },
    "4":{
      title: "你在舖滿夜光石的蜿蜒小徑上，撿到一瓶不知名藥水，你會怎麼做？",
      options: [
        {title: "A. 將瓶子舉高，觀察它的質地與色澤", value: 1},
        {title: "B. 輕搖瓶身，聽它在瓶中發出的聲音", value: 2},
        {title: "C. 打開瓶蓋，聞一聞瓶中藥水的氣味", value: 3},
        {title: "D. 對它施法，看看有什麼變化", value: 4},
      ]
    },
    "5":{
      title: "你即將踏入未知的魔法試煉，必須帶上一件護身物，你會選？",
      options: [
        {title: "A. 一面能映出心靈的銀鏡", value: 1},
        {title: "B. 一枚會發光的熾紅羽毛", value: 2},
        {title: "C. 一條藏著舊日記憶的布帶", value: 3},
        {title: "D. 一顆從星辰中落下的黑石", value: 4},
      ]
    },
    "6":{
      title: "歷經千辛萬苦，終於找到那瓶靈藥，當你伸手觸碰閃爍瓶身的瞬間，心中浮現的，是哪一個念頭？",
      options: [
        {title: "A. 願這股力量能引我守住界限與理性", value: 1},
        {title: "B. 願我能用這股力量照亮未知", value: 2},
        {title: "C. 願我能用這股力量守護重要人事物", value: 3},
        {title: "D. 願我能用這股力量與靈魂共鳴", value: 4},
      ]
    }
  },
}))



export { usePsyStore, useQuestionStore }