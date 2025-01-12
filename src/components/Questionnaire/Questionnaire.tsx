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
}

export const Questionnaire = ({ headline, questions }: QuestionnaireProps) => {
  const [submitted, setSubmitted] = useState(false);

  const renderForm = (questions: QuestionProps[]) => {
    return <form action='#' method='post' onSubmit={onFormSubmitted}>
      {questions.map((q, index) =>
        <div key={q.name} className={styles.questionWrapper}>
          <QuestionText number={index + 1} text={q.question} />
          {renderField(q)}
        </div>)}
      <Submit />
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
      {submitted ? <h2>Thank you for submitting the form</h2> : renderForm(questions)}
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