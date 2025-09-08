import './Todo.css'
import { Link } from "react-router-dom";

function ToDo({todo}) {
    return <tr>
        <td className="todo-item" ><Link className="todo-item" to={`/todos/${todo.id}`}>{todo.todo}</Link></td>
        <td>{todo.completed.toString()}</td>
        <td>{todo.userId}</td>
    </tr>
};

export default ToDo;