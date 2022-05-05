import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '.';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {Object.values(routes).map(({ id, path, Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Routes>
  </BrowserRouter>
);
