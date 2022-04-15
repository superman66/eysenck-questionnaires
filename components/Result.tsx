import React from "react";
import { FlexboxGrid, List } from "rsuite";
import { EmotionResultData, emotionTypeData } from "../pages/api/emotion-type";
import { EmotionType, QuestionnaireResult } from "../types";

interface ResultProps {
  result: QuestionnaireResult;
}

/**
 * 情绪评测表结果
 */
export default function Result({ result }: ResultProps) {
  return (
    <div className="">
      <p className="mt-[30px] mb-[10px]">
        计算完每个分表的得分后，可以参照上表中的文字说明来解释分数的含义。同时，结合下表可以看出你的个性特点。高亮蓝色维度你的性格特点。
      </p>
      <List bordered>
        <List.Item>
          <FlexboxGrid>
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>得分</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>情绪不稳定性</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={4}>情绪适应性</FlexboxGrid.Item>
            <FlexboxGrid.Item colspan={6}></FlexboxGrid.Item>
          </FlexboxGrid>
        </List.Item>
        {EmotionResultData.map(
          ({ name, antonymName, unstableScore, stableScore, type }) => {
            const highlighUnstable =
              result[type] >= unstableScore[0] &&
              result[type] <= unstableScore[1];
            const highlighStable =
              result[type] >= stableScore[0] && result[type] <= stableScore[1];
            return (
              <List.Item key={name}>
                <FlexboxGrid>
                  <FlexboxGrid.Item
                    colspan={6}
                    className={highlighUnstable ? "text-blue-600" : ""}
                  >
                    {name}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>
                    {result[type]}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>
                    {unstableScore.join("-")}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item colspan={4}>
                    {stableScore.join("-")}
                  </FlexboxGrid.Item>
                  <FlexboxGrid.Item
                    colspan={6}
                    className={highlighStable ? "text-blue-600" : ""}
                  >
                    {antonymName}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </List.Item>
            );
          }
        )}
      </List>
    </div>
  );
}
