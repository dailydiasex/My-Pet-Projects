import { Container } from 'react-bootstrap';
import './App.css';
import CurrencyForm from './components/CurrencyForm';

function App() {
  return <Container className='my-3 d-flex justify-content-center'>
    <CurrencyForm />
  </Container>
}

export default App;
