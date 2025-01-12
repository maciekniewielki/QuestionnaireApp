import styles from './Questionnaire.module.css'
import { QuestionProps } from './Questions/types'
import { FreeText } from './Questions/FreeText/FreeText';
import { SingleOption } from './Questions/SingleOption/SingleOption';
import { Submit } from './Submit/Submit';

export type QuestionnaireProps = {
  headline: string;
  questions: QuestionProps[];
}

export const Questionnaire = ({ headline, questions }: QuestionnaireProps) => {
  return (
    <div className={styles.questionnaire}>
      <h1>{headline}</h1>
      <form action='#' method='post'>
        {questions.map(q => <div key={q.name} className={styles.questionWrapper}>{renderQuestion(q)}</div>)}
        <Submit />
      </form>
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