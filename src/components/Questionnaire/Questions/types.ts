import { FreeTextProps } from "./FreeText/FreeText";
import { SingleOptionProps } from "./SingleOption/SingleOption";

export type QuestionTypes = "freeText" | "singleOption";

export type BaseQuestionProps<Type extends QuestionTypes> = {
    type: Type;
    question: string;
}

export type QuestionProps = FreeTextProps | SingleOptionProps