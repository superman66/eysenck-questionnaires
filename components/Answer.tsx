import { Radio, RadioGroup } from "rsuite";
import type { RadioGroupProps } from "rsuite";
import { AnswerType } from "../types/index";

const Answer = (props: RadioGroupProps<string | number>) => {
  return (
    <RadioGroup {...props}>
      <Radio value={AnswerType.Yes}>是</Radio>
      <Radio value={AnswerType.No}>否</Radio>
      <Radio value={AnswerType.NotSure}>不好说</Radio>
    </RadioGroup>
  );
};

export default Answer;
