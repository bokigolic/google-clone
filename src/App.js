import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes } from './components/Routes';



const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-200 dark:bg-gray-900">
      app
      </div>
    </div>

  );
};

export default App;