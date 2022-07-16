interface Props {
 id: number;
 title: string;
 completed: boolean;
}

export const TodoEntry: React.FC<Props> = ({title, completed}) => {
  return (
    <div
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-3 bg-pink-500 justify-center w-100
      bg-pink-100 hover:bg-pink-200 duration-300
      hover:translate-y-1
      "
    >
      <div>
        <div className="text-xl font-medium text-black text-center w-100">{title}</div>
        <p className="text-slate-500 w-100">
          This task is {completed ? "completed" : "not completed"}
        </p>
      </div>
    </div>
  )
}
