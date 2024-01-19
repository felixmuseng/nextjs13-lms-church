import Calendar from "@/components/Calendar"
import Navbar from "@/components/Navbar"

async function getData() {
  const res = await fetch("http://localhost:3000/api/gettasks");
  
  if (!res.ok) {
    throw new Error("Failed to fetch topics");
  }

  return await res.json()
};


export default async function CalendarPage() {  
  const data = await getData()
  
  return(
    <main>
      <Navbar/>
      <Calendar task={data}/>
    </main>
  ) 
}  