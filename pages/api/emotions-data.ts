import { AnswerType, EmotionsQuestionnaire, EmotionType } from "../../types";

/** 情绪评测表数据 */
export const emotionsQuestionnaireData: EmotionsQuestionnaire[] = [
  {
    id: 1,
    question: "你认为你能像大多数人那样行事吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 2,
    question: "你似乎总碰到倒霉事？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 3,
    question: "你比大多数人更容易脸红吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 4,
    question: "有一个思想总在你脑中反复出现，你想打消它，当是办不到？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 5,
    question: "你有想戒而戒不掉的不良嗜好（如吸烟）吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 6,
    question: "你是否总是感觉良好并精力充沛吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 7,
    question: "你常常为负罪感而烦恼吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 8,
    question: "你是否觉得有点儿骄傲？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 9,
    question: "早上醒来时，你是否经常感到心情郁闷？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 10,
    question: "即使发愁的时候，你也极少失眠吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 11,
    question: "你时常感到时钟的滴答声十分刺耳、难以忍受吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 12,
    question: "对于那种看上去你很在行的游戏，你想学会并享受其中乐趣吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 13,
    question: "你是否食欲不佳？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 14,
    question: "在你实际上没有错的时候，你是否常常寻找自己的不是？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 15,
    question: "你常常觉得自己时一个失败者吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 16,
    question: "总的来说，你是否满足于你的生活？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 17,
    question: "你通常是平静、不容易被烦扰吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 18,
    question: "在阅读的时候，如果发现标点错误，你是否觉得很难弄清句子的意思？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 19,
    question: "你是否通过锻炼或限制饮食来有计划地控制体形？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 20,
    question: "你的皮肤非常敏感和怕痛吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 21,
    question: "你是否有时觉得你所过的生活令你的父母失望？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 22,
    question: "你为你的自卑感到苦恼吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 23,
    question: "在生活中，你是否能发现许多愉快的事？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 24,
    question: "你是否觉得你有很多无法克服的困难？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 25,
    question: "你是否有时强迫自己洗手，尽管你明明知道你的手很干净？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 26,
    question: "你是否相信你的性格已由童年的经历所决定，所以无法改变？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 27,
    question: "你是否时常感到头脑发晕？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 28,
    question: "你是否觉得你犯了不可饶恕的罪过？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 29,
    question: "总的来说，你是否很自信？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 30,
    question: "有时你不在乎将来怎样。",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 31,
    question: "你是否总感到生活十分紧张？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 32,
    question: "你有时为一些细枝末节的小事总缠绕在思想中而烦恼吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 33,
    question: "不管别人怎么说，你总按自己的决定行事吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 34,
    question: "你比多数人更容易感到头痛吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 35,
    question: "你常有对自己的所作所为进行忏悔的强烈意愿吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 36,
    question: "你是否常常希望自己是另外一个人？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 37,
    question: "平时你感到精力充沛吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 38,
    question: "你小时候害怕黑暗吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 39,
    question:
      "你是否热衷于某种迷信仪式，以避免走路发出的噼啪声等诸如此类的不吉利的事？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 40,
    question: "你觉得控制体重困难吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 41,
    question: "你是否有时感到面部、头部、肩部抽搐？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 42,
    question: "你是否常觉得别人非难你？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 43,
    question: "当众讲话是否使你感到很不自在？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 44,
    question: "你是否曾经无缘无故地觉得自己很悲惨？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 45,
    question: "你是否常常忙忙碌碌似乎有所求，实际上不知所求？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 46,
    question: "你常担心抽屉、窗子、门、箱子等东西是否锁好吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 47,
    question: "你是否相信上帝、命运等超自然的力量控制着你的生老病死？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 48,
    question: "你很担心自己得病吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 49,
    question: "你是否相信此时此刻所得的幸福，最终不得不偿还？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 50,
    question: "如果可能的话，你将在许多方面改变自己吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 51,
    question: "你觉得自己前途乐观吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 52,
    question: "面对艰难的任务，你是否会发抖、出汗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 53,
    question: "上床睡觉之前，你常按程序检查所有的电灯、用具和水管关好没有吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 54,
    question:
      "如果事情出了差错，你是否常把它们归结为运气不佳，而不是方法不当？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 55,
    question: "即使你认为自己仅仅是着凉了，你也一定要去看病吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 56,
    question: "你很关心自己是否比周围大多数人都生活得好吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 57,
    question: "在一般情况下，你是否觉得自己颇受大家欢迎？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 58,
    question: "你是否有过自己不如死了好的想法？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 59,
    question: "即使知道对你不会有伤害，你也对一些人或事担惊受怕吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 60,
    question: "你是否小心翼翼地在家里储存了一些食品或粮食，以防粮食短缺？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 61,
    question: "你是否曾感到有一种坏念头支配着你？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 62,
    question: "你是否常感到精疲力竭？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 63,
    question: "你是否做过一些使你终生遗憾的事？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 64,
    question: "对于你的决定，你是否总是充满信心？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 65,
    question: "你常感到沮丧吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 66,
    question: "你比其他人更不容易焦虑吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 67,
    question: "你特别害怕和厌恶脏东西吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 68,
    question: "你是否常感到自己是某种无法控制的外力的受害者？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 69,
    question: "你被认为是一个体弱多病的人吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 70,
    question: "你常常无缘无故地受到责备和惩罚吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 71,
    question: "你是否觉得自己很有见地？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 72,
    question: "对你来说，事情总是没有希望吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 73,
    question: "你常常无缘无故地为一些不现实的东西担心吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 74,
    question: "在外面如果遇到火灾，你是否先计划怎样逃脱？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 75,
    question: "做事前，你是否总是设计一个明确的计划而不是碰运气？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 76,
    question: "你家里有一个小药箱来保存你以前看病剩余的各种药物吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 77,
    question: "如果友人训斥你，你往心里去吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 78,
    question: "你是否常常为一些你做过的事情感到惭愧？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 79,
    question: "你和多数人一样爱笑吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 80,
    question: "多数时间里你都为某些人或事感到忧心忡忡吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 81,
    question: "你是否会因为东西放错了地方而烦躁难受？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 82,
    question: "你曾经用扔硬币或类似完全凭几率的方法来做决策吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 83,
    question: "你非常担心你的健康吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 84,
    question: "如果你发生了意外事故，你是否觉得这是对你的报应？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 85,
    question:
      "当你注视自己的照片时，你是否感到窘迫，并抱怨人们总不能公平的对待你？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 86,
    question: "你常常毫无原因地感到无精打采和疲倦吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 87,
    question: "如果你在社交场合出了丑，你能很容易地忘却它吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 88,
    question: "对于你所有的花销，你都详细地记载吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 89,
    question: "你的所作所为是否常与习俗和父母的希望相悖？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 90,
    question: "强烈的痛苦和疼痛使你不可能把注意力集中在你的工作上吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 91,
    question: "你是否为你过早的性行为而后悔？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 92,
    question: "你家里是否有些成员使你感到自己不够好?",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 93,
    question: "你常受到噪音的干扰吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 94,
    question: "坐着或躺下时，你很容易放松吗?",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 95,
    question: "你是否很担心在公共场所传染上病菌？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 96,
    question: "当你感到孤独时，你是否努力去友善待人？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 97,
    question: "你是否经常为难以忍受的搔痒而烦恼？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 98,
    question: "你是否有些不可饶恕的怀习惯？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 99,
    question: "如果友人批评你，你是否感到非常不愉快？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 100,
    question: "你是否觉得自己受到生活的不公平待遇？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 101,
    question: "你很容易为一些意想不到的人的出现而吃惊吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 102,
    question: "你总是很细心地归还借物吗？哪怕钱少的微不足道？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 103,
    question: "你是否感到你不能左右你周围发生的事情？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 104,
    question: "你的身体健康吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 105,
    question: "你常受到良心的责备吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 106,
    question: "人们是否把你作为他们利用的对象？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 107,
    question: "你是否认为人们并不关心你？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 108,
    question: "安静地坐着呆一会儿，对你来说很困难吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 109,
    question: "你是否常常事必躬亲，而不相信别人也能把它做好？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 110,
    question: "你很容易被人说服吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 111,
    question: "你的家人是否多有肠胃不适的毛病？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 112,
    question: "你是否觉得荒废了自己的青春？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 113,
    question: "你是否喜欢提一些关于你自己作为一个人的价值的问题？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 114,
    question: "你常常感到孤独吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 115,
    question: "你过分地担心钱的问题吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 116,
    question: "你宁愿从马路旁的栏杆下钻过去，也不愿意绕道而行吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 117,
    question: "你感到生活难以应付吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 118,
    question: "当你不舒服时，别人是否表示同情？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 119,
    question: "你是否觉得自己不配得到别人的信任和友情？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 120,
    question: "当人们说起你的优点时，你是否觉得他们在恭维你？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 121,
    question: "你是否认为自己对世界有所贡献并过着有意义的生活？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 122,
    question: "你是否很容易入睡？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 123,
    question: "你不拘小节吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 124,
    question: "你所作的多数事情都能使他人愉快吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 125,
    question: "你长期便秘吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 126,
    question: "你是否总是考虑过去发生的事情，并惋惜自己没能做得更好吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 127,
    question: "你是否有时因害怕别人的嘲笑或批评而隐瞒自己的意见?",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 128,
    question: "你觉得世界上没有一个爱你的人吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 129,
    question: "在社交场合中，你很容易感到窘迫吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 130,
    question: "你是否把废旧的物品留着，以便将来派上用场？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 131,
    question: "你相信你的未来掌握在你的手中吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 132,
    question: "你曾经有过神经衰弱吗?",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 133,
    question: "你内心是否隐藏着某种内疚，而担心总有一天必定会被人知道？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 134,
    question: "在社交场合你是否感到害羞，并且自己意识到这种害羞？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 135,
    question: "你认为把一个孩子带到世界上来时一件很难的事吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 136,
    question: "如果事情没有按照预定的计划进行，你是否会感到手足无措？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 137,
    question: "房间里很乱时，你是否感到不舒服？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 138,
    question: "你是否和别人一样有意志？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 139,
    question: "你常感到心悸吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 140,
    question: "你相信恶有恶报吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 141,
    question: "与你遇到的人相比，你是否感到自卑，尽管客观上你并不比他差？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 142,
    question: "一般来讲，你是否成功实现了你的生活目标？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 143,
    question: "你常为噩梦惊醒并吓出一身大汗吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 144,
    question: "若别人的狗舔了你的脸，你感到恶心吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 145,
    question:
      "由于总受一些事情干扰，你不得不改变计划，因此，你觉得订计划是浪费时间吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 146,
    question: "你总担心家里人会生病吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 147,
    question: "如果你做了某些受到谴责的事，你是否能很快地忘掉，并放眼未来？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 148,
    question: "通常你觉得你能实现你想要达到的目标吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 149,
    question: "你很容易伤感吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 150,
    question:
      "当你和别人谈话，并向给人留下深刻的印象时，你的声音是否会变得颤抖？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 151,
    question: "你是不是那种万事不求人的人？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 152,
    question: "你更喜欢那种由他人决策，并告诉你该怎么做的工作吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 153,
    question: "甚至在天气暖和时你也时常手脚冰凉吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 154,
    question: "你常通过祈祷来请求得到宽恕吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 155,
    question: "你对你的相貌感到满意吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 156,
    question: "你是否觉得别人老是碰到好运气？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 157,
    question: "在紧急情况下你能保持镇静吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 158,
    question: "你是否把所有的约会和同一天所必须做的事都记在本上？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 159,
    question: "你是否感到在生活中变换环境时徒劳的？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 160,
    question: "你常感到呼吸困难吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 161,
    question: "听到下流的故事，你感到窘迫吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 162,
    question: "对于你不喜欢的人，你是否保持缄默？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 163,
    question: "你感到有很长时间你无法驾驭你周围的环境吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 164,
    question: "当你想到自己所面临的困难时，你是否觉得紧张和不知所措？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 165,
    question: "拜访别人时，进门之前，你是否总要整理一下头发和衣服？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 166,
    question: "你是否常常觉得难以控制你的生活方向？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 167,
    question: "你是否认为因轻微的不舒服，如咳嗽、着凉、感冒去看病是浪费时间？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 168,
    question: "你是否时常感到好像做错了什么事情，尽管这种感觉没有确切的依据？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 169,
    question: "你是否觉得为了赢得别人的关注和称赞而做事非常困难？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 170,
    question: "回首往事，你是否觉得受到了欺骗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 171,
    question: "受到羞辱使你难受很长时间吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 172,
    question:
      "和别人说话时，你是否总是试图纠正别人的语法错误，尽管礼貌可能不允许这样做？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 173,
    question: "你是否觉得现在的事情如此变化莫测，以至于简直找不到规律？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 174,
    question: "如果你得了感冒，你是否马上上床休息？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 175,
    question: "你是否由于你的老师没有充分备课而对他感到失望？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 176,
    question: "你是否常常把自己设想得比实际好？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 177,
    question: "你和别人一样生活得快乐吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 178,
    question: "你能够通过描述自己来认识别人吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 179,
    question: "你是否把自己描述成一个完美的人？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 180,
    question: "你总是有明确的生活目标吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 181,
    question: "早上你是否常常看看你舌头的颜色？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 182,
    question: "你是否常在回忆过去时，觉得自己以前对待别人太不好？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 183,
    question: "你是否觉得你从来没有做过任何好事？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 184,
    question: "你是否觉得自己是生活中多余的人？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 185,
    question: "你是否为可能会发生的事而操不必要的新？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 186,
    question: "当烦恼的事情使你无法入睡时，你是否按照习惯离开睡床？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 187,
    question: "你时常觉得别人在利用你吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 188,
    question: "你每天都称体重吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 189,
    question: "你是否期望上帝在来世惩罚你的罪过？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 190,
    question: "你是否常常怀疑你的性能力？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 191,
    question: "你的睡眠通常是不规则的吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 192,
    question: "你是否常常无缘无故变得非常激动？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 193,
    question: "保持整洁有序对你来说是至关重要的吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 194,
    question: "你是否有时受广告的影响而买一些你实际上并不想要的东西？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 195,
    question: "你是否常常为噪音而烦恼？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 196,
    question: "如果在人机交往中遇到挫折，你总是责备自己吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 197,
    question: "你有起码的自尊心吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 198,
    question: "即使你和其他人在一起时，你也常常感到孤独吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 199,
    question: "你曾经觉得你需要服一些镇静剂吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 200,
    question: "如果你的生活日程被一些预料之外的事情所打乱，你感到非常不快吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 201,
    question: "你是否通过占卜算卦来预测自己的未来？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 202,
    question: "你是否觉得有块东西堵在喉咙里？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 203,
    question: "你是否有时对你自己的性欲望和性幻想感到厌恶？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
  {
    id: 204,
    question: "你认为你的个性对异性有吸引力吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
  {
    id: 205,
    question: "在多数时间里，你内心感到宁静和满足吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Depressibility,
  },
  {
    id: 206,
    question: "你是一个神经质的人吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Anxiety,
  },
  {
    id: 207,
    question:
      "你是否常常花大量的时间来整理书籍，这样你可以在需要的时候知道它们在哪儿？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.ObsessiveCompulsiveDisorder,
  },
  {
    id: 208,
    question: "你是否总是由别人来决定你是看什么电影或节目？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Autonomy,
  },
  {
    id: 209,
    question: "你有过忽冷忽热的感觉吗？",
    answerMap: {
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Suspiciousness,
  },
  {
    id: 210,
    question: "你能很容易地忘记你所做过的错事吗？",
    answerMap: {
      [AnswerType.Yes]: 0,
      [AnswerType.No]: 1,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Guilty,
  },
];
