
export default async function TaskList({task}:any) {

  return (
    <>
      {task?.map((t: any) => (
        <div
          key={t._id}
          className="h-full"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.name}</h2>
            <h3>{t.date}</h3>
          </div>
        </div>
      ))}
    </>
  );
}