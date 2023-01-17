import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin, Signup } from './pages';
import Todos from './pages/Todos/Todos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
