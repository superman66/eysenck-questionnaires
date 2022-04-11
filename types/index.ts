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
  Inferiority = "inferiority",
  /** 抑郁性 */
  Depressibility = "depressibility",
  /** 焦虑 */
  Anxiety = "anxiety",
  /** 强迫症 */
  ObsessiveCompulsiveDisorder = "obsessive-compulsive-disorder",
  /** 依赖性 */
  Dependency = "dependency",
  /** 疑心病 */
  Suspiciousness = "suspiciousness",
  /** 负罪感 */
  Guilty = "guilty",
}

export interface EmotionsQuestionnaire {
  id: number;
  question: string;
  answerMap: {
    [key in AnswerType]: number;
  };
  type: EmotionType;
}
