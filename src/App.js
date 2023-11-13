import Pages from './Components/Pages';
import Form1 from './Components/Form1';
import './App.css';
import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [page, setPage] = useState(1)
  return (
  <div className='container'>
    <Pages page={page} />
    <Form1 name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} setPage={setPage} />
  </div>
  );
}

export default App;
