import { Form } from "react-bootstrap";


function InputSearch({filterTodos}) {
    return <Form.Control type="text" placeholder="Search" size="lg" className="my-3" onKeyUp={filterTodos}/>
}

export default InputSearch;