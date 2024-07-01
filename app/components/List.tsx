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
          <th>Whatever you do, DON&apos;T</th>
          <th>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => <Task key={task.id} task={task} />)}
      </tbody>
    </table>
  </div>
  );
};

export default List;