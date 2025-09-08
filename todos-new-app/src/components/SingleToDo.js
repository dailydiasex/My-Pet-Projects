import { useEffect, useState } from "react";
import { Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";


function SingleToDo() {
    const {todoId} = useParams();
    const [todo, setTodo] = useState({});

    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${todoId}`).then(res => res.json()).then((data) => {
            setTodo(data);
        })
    }, [])

    function changeTodoStatus() {
        fetch(`https://dummyjson.com/todos/${todoId}`, {
            method: 'PUT', /* or PATCH */
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                completed: !todo.completed,
            })
        })
            .then(res => res.json())
            .then(updatedTodo => setTodo(updatedTodo));
    }

    return <>
        <div><p>{todo.todo}</p></div>
        <div className="mb-0 d-flex justify-content-between">
            <div>
                <b className="mx-3">Status:</b>
                {
                    todo.completed
                    ? <Badge bg="success">Completed</Badge>
                    : <Badge bg="danger">Not Completed</Badge>
                }
            </div>
            <div className="mx-3">
                {
                    todo.completed
                    ? <Button 
                    variant="danger" 
                    size="sm"
                     onClick={changeTodoStatus}
                     >Cancel</Button>
                    : <Button 
                    variant="success" 
                    size="sm" 
                    onClick={changeTodoStatus}
                    >Complete</Button>
                }
            </div>
        </div>
    </>
}

export default SingleToDo;