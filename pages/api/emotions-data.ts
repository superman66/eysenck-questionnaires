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
      [AnswerType.Yes]: 1,
      [AnswerType.No]: 0,
      [AnswerType.NotSure]: 0.5,
    },
    type: EmotionType.Inferiority,
  },
];
