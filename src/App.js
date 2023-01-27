
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

import Watch from './components/Watch/Watch';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/watch" element={  <Watch />} />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
