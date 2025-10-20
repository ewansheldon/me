import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompetitionsIndex from './pages/CompetitionIndex/CompetitionsIndex';


type Props = {
  Router: React.ComponentType<any>;
  routerProps?: any;
};

const App = ({ Router, routerProps }: Props) => {

  return (
    <Router { ...routerProps }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<CompetitionsIndex />} />
      </Routes>
    </Router>
  )
};

export default App;
