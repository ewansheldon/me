import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


type Props = {
  Router: React.ComponentType<any>;
  routerProps?: any;
};

const App = ({ Router, routerProps }: Props) => {

  return (
    <Router { ...routerProps }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  )
};

export default App;
