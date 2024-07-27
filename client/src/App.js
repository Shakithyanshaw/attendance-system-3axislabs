import { Route, Routes, Navigate } from 'react-router-dom';
import Signup from './component/Signup';

function App() {
  return (
    <Routes>
      <Route path="/signup" exact element={<Signup />} />

      <Route path="/" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
