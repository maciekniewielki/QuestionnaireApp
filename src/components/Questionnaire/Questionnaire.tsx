import styles from './Questionnaire.module.css'
import { QuestionProps } from './Questions/types'
import { FreeText } from './Questions/FreeText/FreeText';
import { SingleOption } from './Questions/SingleOption/SingleOption';

export type QuestionnaireProps = {
  headline: string;
  questions: QuestionProps[];
}

export const Questionnaire = ({ headline, questions }: QuestionnaireProps) => {
  return (
    <div className={styles.questionnaire}>
      <h1>{headline}</h1>
      <form action='#' method='post'>
        {/* TODO make the styles easier to use, maybe use camelCase for keys? */}
        {questions.map(q => <div className={styles["question-wrapper"]}>{renderQuestion(q)}</div>)}
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