/** 答案类型 */
export enum AnswerType {
  /** 是 */
  Yes = "Yes",
  /** 否 */
  No = "No",
  /** 不好说 */
  NotSure = "NotSure",
}

/**
 * 情绪类型
 */
export enum EmotionType {
  /** 自卑 */
  Inferiority = "Inferiority",
  /** 抑郁性 */
  Depressibility = "Depressibility",
  /** 焦虑 */
  Anxiety = "Anxiety",
  /** 强迫症 */
  ObsessiveCompulsiveDisorder = "ObsessiveCompulsiveDisorder",
  /** 自主性 */
  Autonomy = "Autonomy",
  /** 疑心病 */
  Suspiciousness = "Suspiciousness",
  /** 负罪感 */
  Guilty = "Guilty",
}

export interface EmotionsQuestionnaire {
  id: number;
  question: string;
  answerMap: {
    [key in AnswerType]: number;
  };
  type: EmotionType;
}

export interface EmotionsQuestionnaireFormDataItem {
  id: number;
  value: AnswerType;
  type: EmotionType;
  score: number;
}
export interface EmotionsQuestionnaireFormData {
  [key: string]: EmotionsQuestionnaireFormDataItem;
}

export type QuestionnaireResult = {
  [key in string]: number;
};
