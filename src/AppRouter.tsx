import { FunctionComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './router/Home';
import Login from './router/Login';
import NotFound from './router/NotFound';

interface AppRouterProps {}

const AppRouter: FunctionComponent<AppRouterProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
