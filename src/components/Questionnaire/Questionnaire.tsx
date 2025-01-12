import styles from './Questionnaire.module.css'
import { QuestionProps } from './Fields/types'
import { FreeText } from './Fields/FreeText/FreeText';
import { SingleOption } from './Fields/SingleOption/SingleOption';
import { Submit } from './Submit/Submit';
import { QuestionText } from './QuestionText/QuestionText';

export type QuestionnaireProps = {
  headline: string;
  questions: QuestionProps[];
}

export const Questionnaire = ({ headline, questions }: QuestionnaireProps) => {
  return (
    <div className={styles.questionnaire}>
      <h1>{headline}</h1>
      <form action='#' method='post'>
        {questions.map((q, index) => 
        <div key={q.name} className={styles.questionWrapper}>
          <QuestionText number={index + 1} text={q.question}/>
          {renderField(q)}
        </div>)}
        <Submit />
      </form>
    </div>
  )
}


const renderField = (question: QuestionProps) => {
  switch(question.type) {
    case "freeText":
      return <FreeText {...question} />
    case "singleOption":
      return <SingleOption {...question}/>
  }
}