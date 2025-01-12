import { BaseQuestionProps } from "../types";
import styles from "./SingleOption.module.css"

export type Option = {
    value: string;
    text: string;
}

export type SingleOptionProps = {
    options: Option[];
} & BaseQuestionProps<"singleOption">


export const SingleOption = ({ name, question, options }: SingleOptionProps) => {
    return <>
        <div>{question}</div>
        {options.map(option =>
            <label key={option.value} className={styles.radioLabel}>
                <input type="radio" value={option.value} name={name} />
                {option.text}
            </label>
        )}
    </>
}