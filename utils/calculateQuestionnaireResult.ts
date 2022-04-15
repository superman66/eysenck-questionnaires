import {
  EmotionsQuestionnaireFormData,
  EmotionsQuestionnaireFormDataItem,
  EmotionType,
  QuestionnaireResult,
} from "../types";

export function getEmotionTypeScore(
  data: EmotionsQuestionnaireFormDataItem[],
  type: EmotionType
): number {
  const filterData = data.filter((item) => item.type === type);
  return filterData.reduce((prev, curr) => prev + curr.score, 0);
}

/**
 * 计算情绪维度分数
 */
export function calculateQuestionnaireResult(
  formData: EmotionsQuestionnaireFormData
): QuestionnaireResult {
  const data = Object.values(formData);
  let scoreMap: QuestionnaireResult = {};
  for (let type in EmotionType) {
    scoreMap[type] = getEmotionTypeScore(data, type as EmotionType);
  }
  return scoreMap;
}
