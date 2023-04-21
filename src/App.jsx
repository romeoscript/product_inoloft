import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Product />}/>
    </Routes>
    </>
  );
}

export default App;
