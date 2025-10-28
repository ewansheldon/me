import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home/Home';
import About from './pages/About/About';


type Props = {
  Router: React.ComponentType<any>;
  routerProps?: any;
};

const App = ({ Router, routerProps }: Props) => {
  return (
    <Router {...routerProps}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
