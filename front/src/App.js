import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Students from './components/applications/school/Students';
import Student from './components/applications/school/Student';
import Classes from './components/applications/school/Classes';
import Classe from './components/applications/school/Classe';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<Student />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classe/:id" element={<Classe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
