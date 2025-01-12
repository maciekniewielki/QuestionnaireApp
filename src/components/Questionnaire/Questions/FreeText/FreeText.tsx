import { BaseQuestionProps } from "../types";

export type FreeTextProps = BaseQuestionProps<"freeText">

export const FreeText = ({ question }: FreeTextProps) => {
    return <div>Free text question is "{question}"</div>
}