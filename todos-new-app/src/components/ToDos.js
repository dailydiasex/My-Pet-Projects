import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import ToDo from "./ToDo";
import InputSearch from "./InputSearch";




function ToDos(){
    const [todoItems, setTodoItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);


    useEffect(() => {
        fetch(`https://dummyjson.com/todos`).then(res => res.json()).then((data) => 
            setTodoItems(data.todos));

    }, [])

    useEffect(() => {
        const filterResult = todoItems.filter(todo => todo.todo.toLowerCase().includes(search.trim().toLowerCase()) ||
            todo.id.toString().toLowerCase().includes(search.trim().toLowerCase()));
        setFilteredTodos(filterResult);

    }, [search])


    function filterTodos(e) {
    const value = e.target.value.trim();
    setSearch(value);
  }


    return <>
        <h2>Todos</h2>
        <InputSearch filterTodos={filterTodos}/>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Completed</th>
                    <th>userId</th>
                </tr>
            </thead>
            <tbody>
            {
                search.trim() ?
                filteredTodos.map(todo => <ToDo todo={todo} key={todo.id}/>) :
                todoItems.map(todo => <ToDo todo={todo} key={todo.id}/>)
            }
            </tbody>

        </Table>
        
        
    </>
}


export default ToDos;