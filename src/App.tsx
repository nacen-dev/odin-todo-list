import React from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='grid grid-cols-[200px_1fr] grid-template-rows-[10%_1fr]'>
      <Header className="col-span-2"/>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
