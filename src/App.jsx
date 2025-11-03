import { Cliente } from "./pages/cliente"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin } from "./pages/admin";
import { ClientAdmin } from "./components/ClientAdmin/index";


function App() {

  return (
    <>
    <BrowserRouter>
      <ClientAdmin/>
      <Routes>
        <Route path="/" element={<Cliente />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
