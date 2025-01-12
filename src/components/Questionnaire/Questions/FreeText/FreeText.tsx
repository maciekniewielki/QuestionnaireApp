import { useId } from "react";
import { BaseQuestionProps } from "../types";
import styles from "./FreeText.module.css"

export type FreeTextProps = {
    multiline: boolean;
} & BaseQuestionProps<"freeText">

export const FreeText = ({ multiline, name, question }: FreeTextProps) => {
    const id = useId();
    return <div className={styles.freeText}>
        <div>{question}</div>
        <label htmlFor={id}>Answer</label>
        {multiline ? <textarea id={id} name={name} rows={10}/> : <input id={id} name={name}/>}
    </div>
     
}