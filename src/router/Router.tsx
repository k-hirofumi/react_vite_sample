import { Route, Routes } from 'react-router-dom';
// import { MainLayout } from "../layout/MainLayout"
import { Home } from '../components/pages/Home';
import { Second } from '../components/pages/Second';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<Second />} />
    </Routes>
  );
};
