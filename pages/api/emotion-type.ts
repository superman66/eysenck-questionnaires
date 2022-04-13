import { EmotionType } from "../../types";

/**
 * 情绪评测维度
 */
export const emotionTypeData = [
  {
    type: EmotionType.Inferiority,
    high: "对自己及自己的能力充满自信，认为自己是有价值的、有用的人，并相信自己是受人欢迎的。这种人非常自爱，不自高自大。",
    low: "自我评价低，自认为自己不被人喜欢。",
  },
  {
    type: EmotionType.Depressibility,
    high: "欢快乐观，情绪状态良好，对自己感到满意，对生活感到满足，与世无争。",
    low: "悲观厌世，易灰心，心情抑郁，对自己的生活感到失望，与环境格格不入，感到自己在这个世界上是多余的。",
  },
  {
    type: EmotionType.Anxiety,
    high: "容易为一些区区小事而烦恼焦虑，对一些可能发生的不幸事件存在着毫无必要的担忧，杞人忧天。",
    low: "平静、安详，并且对不合理的恐惧、焦虑有抵抗能力。",
  },
  {
    type: EmotionType.ObsessiveCompulsiveDisorder,
    high: "谨小慎微，认真仔细，追求细节的完美，规章严明，沉着稳重，容易因脏污不净、零乱无序而烦恼不安",
    low: "不拘礼仪，随遇而安，不讲究规则、常规、形式、程序。",
  },
  {
    type: EmotionType.Autonomy,
    high: "自主性强，尽情享受自由自在的乐趣，很少依赖别人，凡事自己做主，把自己视为命运的主人，以现实主义的态度去解决自己的问题。",
    low: "常缺乏自信心，自认为是命运的牺牲品，易受周围其他人或事件所摆布，趋附权威。",
  },
  {
    type: EmotionType.Suspiciousness,
    high: "常常抱怨躯体各个部分的不适感，过分关心自己的健康状况，经常要求医生、家人及朋友对自己予以同情。",
    low: "很少生病，也不为自己的健康状况而担心。",
  },
  {
    type: EmotionType.Guilty,
    high: "自责、自卑，常为良心的折磨所烦恼，不考虑自己的行为是否真正应受到道德的谴责。",
    low: "很少有惩罚自己或追悔过去行为的倾向。",
  },
];
