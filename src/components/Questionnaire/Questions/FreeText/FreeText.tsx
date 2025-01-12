import { BaseQuestionProps } from "../types";
import styles from "./FreeText.module.css"

export type FreeTextProps = {
    multiline: boolean;
} & BaseQuestionProps<"freeText">

export const FreeText = ({ multiline, name, question }: FreeTextProps) => {
    return <div className={styles.freeText}>
        <div>{question}</div>
        {multiline ? <textarea name={name} rows={10}/> : <input name={name}/>}
    </div>
     
}