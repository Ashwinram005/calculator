import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Functionsample } from './components/functionsample';
import { Multitypecomponent } from './components/multitypecomponent';
import { Oneofsample } from './components/oneofsample';
import { Arraysample } from './components/arraysample';
import { Header } from './components/header';
import { Student } from './components/studentprops';
import { ChildComponent } from './components/ChildComponent';
import { LearnComponent } from './components/Learncomponents';
function App() {
  const items=[
    {id:1,name:"Item1"},
    {id:2,name:"Item2"},
  ]
  function handle(){
    alert("Button clicked!");
  }
  return (
      <div className="App">
       Ashwinram
       <LearnComponent />
      <ChildComponent> 
       <Header/>
      <Student name="Ashwinram M" age={18} isMarried={false}/>
      <Student name="Aadharsh R" age={18} isMarried={true} />
      <Student />
      <p>Para 1</p>
      <p>Para 2</p>
      <p>Para 3</p>
      </ChildComponent>
       <Arraysample items={items}/>
       <Oneofsample color="red"/>
       <Multitypecomponent value={21}/>
       <Multitypecomponent value="Ashwinram M"/>
       <Multitypecomponent value={true}/>
       <Functionsample handleclick={handle}/>
      </div>
  );
}

export default App;
