
import { useState } from 'react';
import './App.css';
import DisplayForm from './components/DisplayForm';
import MyForm from './components/MyForm';

function App() {
  const [filteredData, setfilteredData] = useState({})
  const weatherData = (data)=>{
    setfilteredData(data)
  }
  return (
    <div className="App">
      <MyForm weatherData={weatherData} />
      <DisplayForm filteredData={filteredData} />
      
    </div>
  );
}

export default App;
