import {useDebugValue, useState} from 'react'

import logo from './logo.svg';
import './App.css';
import FirstPage from './FirstPage';

function App() {

  const[showFirstPage,setShowfirstPage] = useState(false);
  const userDetails = {
    name:'prashant',
    city:'pune'
  };
  const country = "India";
  const openFirstPage = ()=>{
    setShowfirstPage(true);
  }
  const[name,setName] = useState('');
  const[city,setCity] = useState('');


  const getData = (e)=>{
    if(e.target.id == 'name'){
      setName(e.target.value);

    }
    if(e.target.id == 'city'){
      setCity(e.target.value);
    }
  }

// const getData = (e)=>{
//   setName(e.target.value);
// }
//   const getCity = (e)=>{
//     setCity(e.target.value);
//   }




  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <div>
      <h1>welcome to react</h1>
      {/* <h2>test h2 tag</h2> */}

    <button onClick={openFirstPage}>call first page</button>

    {showFirstPage && <FirstPage
    data = {userDetails}
    countryDetails = {country}
    />
  }
    </div>


<div>
    <input type='text' id='name' name='name' placeholder='Enter your name' onChange={getData}></input>
    <input type='text' id='city' name='city' placeholder='Enter your name' onChange={getData}></input>
    <button>show name</button>
    <h1>my name is {name} . my city is {city}</h1>
</div>



    
    </>

  );
}

export default App;
