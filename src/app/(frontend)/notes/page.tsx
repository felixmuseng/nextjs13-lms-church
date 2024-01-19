import Navbar from "@/components/Navbar";

import TaskList from "@/components/Tasklist";

async function getData() {
  const res = await fetch("http://localhost:3000/api/gettasks");
  
  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  return await res.json()
};

export default async function NotePage() {
  const data = await getData()

  return(
    <main>
      <Navbar/>
      <h1>Notes</h1>
      <TaskList task={data}/>
    </main>
  ) 
}