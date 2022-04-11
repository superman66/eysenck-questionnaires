import { AnswerType } from "../types/index";
import Answer from "./Answer";

interface QuestionProps {
  index: number;
  question: string;
  value?: string;
  onChange: (value: string | number) => void;
}

const Question = ({ index, question, value, onChange }: QuestionProps) => {
  return (
    <div>
      <div>
        {index + 1}. {question}
      </div>
      <div>
        <Answer value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default Question;
