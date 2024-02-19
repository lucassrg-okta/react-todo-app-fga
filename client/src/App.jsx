import React, { useState, useEffect } from 'react';
import 'flowbite/dist/flowbite.css';
import {Navbar } from 'flowbite-react';
import DashboardTabs from './components/DashboardTabs';
import { SolutionProvider } from './context/solutionContext';


function App() {
  

  return (
    <>
    <SolutionProvider>
    <div className="container mx-auto p-4 max-w-screen-xl">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://fga.dev">          
          <img src='/FGA-icon.svg' className="mr-3 h-6 sm:h-9" alt="Okta Fine Grained Authorization" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Okta Fine Grained Auhtorization (FGA) - Authorization as a Service</span>
        </Navbar.Brand>        
      </Navbar>          
      <DashboardTabs/>      
      </div>

    </SolutionProvider>

    </>
  );
}

export default App;
