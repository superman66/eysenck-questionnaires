import React from "react";
import { FlexboxGrid, List } from "rsuite";
import { emotionTypeData } from "../pages/api/emotion-type";
import { EmotionType, QuestionnaireResult } from "../types";
import Result from "./Result";

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
    <div className="">
      <h1 className="text-lg text-center">情绪评测表结果分析报告</h1>

      <div className="">
        <h2 className="text-left">维度说明</h2>
        <p className="mb-[20px]">
          情绪评测表210道题中包含7个分量表，每30道题一个量表，分别从
          <span className="font-bold">
            自卑感、抑郁性、焦虑、强迫症、依赖型、疑心病观念和负罪感
          </span>
          7个方面评价一个人的心理健康状态。
        </p>
        <List className="" bordered>
          {emotionTypeData.map(({ name, type, high, low }) => {
            return (
              <List.Item key={type}>
                <FlexboxGrid>
                  <FlexboxGrid.Item colspan={6}>
                    <div>{name}</div>
                    <div className="text-blue-600">分数：{result[type]}</div>
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={18}>
                    <div className="mb-[5px]">
                      <span className="font-bold">高分者：</span>
                      {high}
                    </div>
                    <div className="">
                      <span className="font-bold">低分者：</span>
                      {low}
                    </div>
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            );
          })}
        </List>

        <Result result={result} />
      </div>
    </div>
  );
}
