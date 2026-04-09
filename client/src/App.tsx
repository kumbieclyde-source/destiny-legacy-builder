import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DestinyMillennium from './pages/DestinyMillennium';
import DOT3MSalesPage from './pages/DOT3MSalesPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destiny" element={<DestinyMillennium />} />
        <Route path="/dot3m" element={<DOT3MSalesPage />} />
      </Routes>
    </BrowserRouter>
  );
}
