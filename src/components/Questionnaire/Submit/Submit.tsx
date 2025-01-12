import styles from "./Submit.module.css"

export type SubmitProps = {
    label: string;
}

export const Submit = ({ label }: SubmitProps) => {
    return <button className={styles.submitButton}>{label}</button>
}