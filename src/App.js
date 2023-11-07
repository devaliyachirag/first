import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import Singleproduct from './component/Singleproduct';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Products></Products>}></Route>
        <Route path='/product/:id' element={<Singleproduct></Singleproduct>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;
