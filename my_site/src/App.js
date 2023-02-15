import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Kolyan';
  const getName = () => 
  {
    return name;  
  }
  return (
    <>

    <p>Hello, {getName()}!</p>
    
    {['1', '2', '3', '4'].map(item => {
      return <p>{item}</p>
    })}

    </>
  );
}

export default App;
