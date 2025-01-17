import { QuestionnaireProps } from "./components/Questionnaire/Questionnaire";

export const props: QuestionnaireProps = {
    headline: "Welcome to the developer questionaire. Please take a minute to answer our questions",
    thankYouText: "Thank you for submitting the form",
    labels: {
      submit: "Submit"
    },
    submitEndpoint: "/questionnaire",
    questions: [
      {
        name: "name",
        type: "freeText",
        multiline: false,
        question: "Tell us your name"
      },
      {
        name: "pastExperience",
        type: "freeText",
        multiline: true,
        question: "Tell us something about your past experience"
      },
      {
        name: "role",
        type: "singleOption",
        question: "Choose a role in which you feel most comfortable in",
        options: [
          {
            value: "1",
            text: "Backend"
          },
          {
            value: "2",
            text: "Frontend"
          },
          {
            value: "3",
            text: "Fullstack"
          },
          {
            value: "4",
            text: "Devops"
          }
        ]
      },
      {
        name: "hobbies",
        type: "freeText",
        multiline: true,
        question: "Tell us something about your hobbies"
      },
      {
        name: "workType",
        type: "singleOption",
        question: "Choose your favourite work type",
        options: [
          {
            value: "1",
            text: "On-Site"
          },
          {
            value: "2",
            text: "Hybrid"
          },
          {
            value: "3",
            text: "Remote"
          }
        ]
      },
    ]
  };