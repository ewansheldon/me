import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Santa from './pages/Santa';

type Props = {
  Router: React.ComponentType<any>;
  routerProps?: any;
};

const App = ({ Router, routerProps }: Props) => {
  return (
    <Router { ...routerProps }>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
};

export default App;
