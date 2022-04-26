import React from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className='grid h-screen md-max:grid-cols-1 grid-cols-[200px_1fr] grid-rows-[10%_1fr]'>
      <Header className="col-span-2"/>
      <Sidebar className='md-max:hidden'/>
      <Content />
    </div>
  );
}

export default App;
