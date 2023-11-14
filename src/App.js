import Pages from './Components/Pages';
import Form1 from './Components/Form1';
import Form2 from './Components/Form2';
import Form3 from './Components/Form3';
import Form4 from './Components/Form4';
import './App.css';
import { useState } from "react"

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [page, setPage] = useState(1)
  const [toggle, setToggle] = useState(false)
  const [cart, setCart] = useState("")
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);

  return (
  <div className='container'>
    <Pages page={page} />
    {page === 1 ? <Form1 name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} setPage={setPage} /> : null}
    {page === 2 ? <Form2 setPage={setPage} page={page} toggle={toggle} setToggle={setToggle} cart={cart} setCart={setCart} /> : null}
    {page === 3 ? <Form3 setPage={setPage} setCart={setCart} toggle={toggle} setToggle={setToggle} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} customProfile={customProfile} setCustomProfile={setCustomProfile} /> : null}
    {page === 4 ? <Form4 setPage={setPage} cart={cart} online={online} setOnline={setOnline} storage={storage} setStorage={setStorage} customProfile={customProfile} setCustomProfile={setCustomProfile} toggle={toggle} setToggle={setToggle} /> : null}
  </div>
  );
}

export default App;
