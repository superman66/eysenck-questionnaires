import { AnswerType, EmotionType } from "../../../types";

export interface EmotionsQuestionnaireFormData {
  [key: string]: {
    id: number;
    value: AnswerType;
    type: EmotionType;
    score: number;
  };
}
