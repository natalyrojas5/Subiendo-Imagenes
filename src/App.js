import React from 'react';
import './App.css';
import './stylesTailwind.css';
import { Header } from './components/Header';
import  Picture  from './components/Picture';


function App() {
  return (
    <main className="main bg-white mx-64 w-2/3 mt-20 rounded">
      <Header />
      <form className="rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-10">
        <Picture 
            title={'Imagen Cuadrada'}  />

        <Picture 
            title={'Imagen Circular'} 
            clase={'rounded-full'} />

      </form> 
    </main>
  );
}

export default App;
