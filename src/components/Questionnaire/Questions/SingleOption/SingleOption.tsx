import { BaseQuestionProps } from "../types";

export type Option = {
    value: string;
    text: string;
}

export type SingleOptionProps = {
    options: Option[];
} & BaseQuestionProps<"singleOption">


export const SingleOption = ({ question, options }: SingleOptionProps) => {
    return <>
        <div>Single option question is "{question}" and the options are:</div>
        {options.map(option => 
            <div>{option.value}: {option.text}</div>
        )}
    </>
}