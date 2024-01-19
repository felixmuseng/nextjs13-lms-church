async function getTask(id) {
  const res = await fetch("http://localhost:3000/api/gettask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id
    })

  })
  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  return await res.json()
};

export default async function QuestionPage({ params }: { params: { id: string } }) {

const task = await getTask(params.id)
  if(task === null){return <h1>task does not exist</h1>}

  return (
  <main>
    <h1>{task._id}</h1>
    <h1>{JSON.stringify(task)}</h1>
    {task.questions.map((t:any)=>(
      <div key={t._id}>
        <h1>{t.value}</h1>
        <h1>{t.answer}</h1> ini shrsnya question box
      </div>
    ))}
  </main>
    // {task.finished ? <h1>show task</h1> :
    // <h1>ID: {params.id}</h1>
    // }
    )
}