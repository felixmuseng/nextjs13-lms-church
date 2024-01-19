"use client"

import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NotePage() {

  const router = useRouter();
  const { data: session } = useSession();
  const [questions, setQuestions] = useState<{
      value: string,
      answer: string
    }[]>([])

  function addQuestionField(){
    const newQuestion = {
      value: "",
      answer: ""
    }
    setQuestions([...questions, newQuestion])
  }
  const handleClick = async (e) => {
    const res = await fetch("api/newtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: 'tugas 3',
        date: '2023-12-11',
        user: session?.user,
        questions: questions
      }),

    });
    if(res.ok){
      router.push('/calendar')
    }

  }

  return(
    <main>
      <h1>New Task</h1>
      <button onClick={addQuestionField}>Add Question</button>
      <ul>
        <h1>list</h1>
        {questions.map((question, i) =>(
          <li key = {i}>
            <div>
              <span className="pr-2">{i+1}</span>
              <input name="question" placeholder='Name' value={question.value} 
                onChange={(e) => setQuestions(questions.map((q, j) => i === j ? {...q, value: e.target.value} : q))} 
              ></input>
            </div>
            <button onClick={() => {
              setQuestions(questions.filter((_,j) => j !== i))
            }}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Submit</button>
    </main>
  ) 
}