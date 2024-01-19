"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewTask(){
  const router = useRouter();
  const { data: session } = useSession();
  const handleClick = async (e) => {
    const res = await fetch("api/newevent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: 'tugas 2',
        date: '2023-11-11',
        user: session?.user,
      }),

    });
    if(res.ok){
      router.push('/calendar')
    }

  }
  return(
    <form onSubmit={handleClick}>

      <button>test cok</button>
    </form>
  )
}