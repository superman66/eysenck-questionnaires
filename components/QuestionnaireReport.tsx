import React from "react";
import { emotionTypeData } from "../pages/api/emotion-type";
import { QuestionnaireResult } from "../types";

interface QuestionnaireReportProps {
  result: QuestionnaireResult;
}

/**
 * 情绪评测表结果分析报告
 */
export default function QuestionnaireReport({
  result,
}: QuestionnaireReportProps) {
  return (
    <div className="container mx-auto p-10 text-base">
      <h1>情绪评测表结果分析报告</h1>

      <div className="">
        <h2 className="text-left">维度说明</h2>
        <p>
          情绪评测表210道题中包含7个分量表，每30道题一个量表，分别从自卑感、抑郁性、焦虑、强迫症、依赖型、疑心病观念和负罪感7个方面评价一个人的心理健康状态。
        </p>
        <table>
          {emotionTypeData.map(({ type, high, low }) => {
            return (
              <tr key={type}>
                <td>
                  <div>{type}</div>
                  <div>分数：{result[type]}</div>
                </td>
                <td>
                  <div>高分者：{high}</div>
                  <div className="">低分者：{low}</div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
