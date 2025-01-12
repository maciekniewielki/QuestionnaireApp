import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Questionnaire } from './components/Questionnaire/Questionnaire.tsx'
import { props } from "./questionnairePropsMock.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Questionnaire {...props} />
  </StrictMode>,
)
