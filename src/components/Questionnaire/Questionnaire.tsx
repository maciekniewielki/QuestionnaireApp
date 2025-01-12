import './Questionnaire.css'
import { QuestionProps } from './Questions/types'
import { FreeText } from './Questions/FreeText/FreeText';
import { SingleOption } from './Questions/SingleOption/SingleOption';

export type QuestionnaireProps = {
  questions: QuestionProps[];
}

export const Questionnaire = ({ questions }: QuestionnaireProps) => {
  return (
    <div>
      {questions.map(q => renderQuestion(q))}
    </div>
  )
}


const renderQuestion = (question: QuestionProps) => {
  switch(question.type) {
    case "freeText":
      return <FreeText {...question} />
    case "singleOption":
      return <SingleOption {...question}/>
  }
}