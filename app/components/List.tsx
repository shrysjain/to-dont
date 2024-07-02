import { ITask } from "@/types/tasks";
import Task from "./Task";

interface ListProps {
  tasks: ITask[]
}

const List: React.FC<ListProps> = ({ tasks }) => {
  return (
  <div className="overflow-x-auto">
    <table className="table">
      <thead>
        <tr>
          <th className="text-base text-slate-200">Whatever you do, DON&apos;T</th>
        </tr>
      </thead>
      <tbody className="text-slate-300">
        {tasks.map((task) => <Task key={task.id} task={task} />)}
      </tbody>
    </table>
  </div>
  );
};

export default List;