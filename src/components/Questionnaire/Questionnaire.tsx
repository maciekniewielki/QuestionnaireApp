import styles from './Questionnaire.module.css'
import { QuestionProps } from './Fields/types'
import { FreeText } from './Fields/FreeText/FreeText';
import { SingleOption } from './Fields/SingleOption/SingleOption';
import { Submit } from './Submit/Submit';
import { QuestionText } from './QuestionText/QuestionText';
import { useState } from 'react';

export type QuestionnaireProps = {
  headline: string;
  questions: QuestionProps[];
  thankYouText: string;
  submitEndpoint: string;
  labels: QuestionnaireLabels;
}

export type QuestionnaireLabels = {
  submit: string;
}

export const Questionnaire = ({ headline, questions, thankYouText, labels }: QuestionnaireProps) => {
  const [submitted, setSubmitted] = useState(false);

  const renderForm = (questions: QuestionProps[]) => {
    return <form action='#' method='post' onSubmit={onFormSubmitted}>
      {questions.map((question, index) =>
        <div key={question.name} className={styles.questionWrapper}>
          <QuestionText number={index + 1} text={question.question} />
          {renderField(question)}
        </div>)}
      <Submit label={labels.submit}/>
    </form>
  }

  const onFormSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(questions.map(q => [q.name, event.currentTarget[q.name].value]))

    // TODO send an API request instead of logging
    console.log("Submitted data:", data);
    setSubmitted(true);
  }

  return (
    <div className={styles.questionnaire}>
      <h1 className={styles.headline}>{headline}</h1>
      {submitted ? <h2>{thankYouText}</h2> : renderForm(questions)}
    </div>
  )
}

const renderField = (question: QuestionProps) => {
  switch (question.type) {
    case "freeText":
      return <FreeText {...question} />
    case "singleOption":
      return <SingleOption {...question} />
  }
}