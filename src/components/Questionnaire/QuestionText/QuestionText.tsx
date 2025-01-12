import styles from "./QuestionText.module.css"

export type QuestionTextProps = {
    number: number;
    text: string;
}

export const QuestionText = ({ number, text }: QuestionTextProps) => {
    return <h2 className={styles.questionText}>{`${number}. ${text}`}</h2>
}