import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DestinyMillennium from './pages/DestinyMillennium';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destiny" element={<DestinyMillennium />} />
      </Routes>
    </BrowserRouter>
  );
}
