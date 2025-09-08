import './App.css';
import { Container } from 'react-bootstrap';
import ToDos from './components/ToDos';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
  BrowserRouter,
  // Route,
  // BrowserRouter,
  // Routes,
} from "react-router-dom";
import SingleToDo from './components/SingleToDo';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDos />,
  },
  {
    path: "/todos/:todoId",
    element: <SingleToDo />,
  },
])

function App() {
  return (
    // <BrowserRouter>
      <Container className='bg-white py-3'>
        <RouterProvider router={router}/>
      </Container>
    //* </BrowserRouter>
)};

export default App;
