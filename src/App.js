
import './App.css';
import {useState} from 'react';


function App() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [main, setmain] = useState([]);

 const btnhendler = () =>{
  const obj ={
    name:name,
    email:email,
  }
  setmain([...main,obj]);
 }
 const del = ()=>{
      setmain([])
 }
  return (
    <>
    <table>

    
    name :  <input type="text" onChange={(e)=>{setname(e.target.value)} } />
    <br></br>

    email :  <input type="text" onChange={(e)=>{setemail(e.target.value)}} />
    <br></br>

    <input type="button" value="click here" onClick={btnhendler} />

    </table>
    {
    main.map((item) =>{
      return(
        <center>
          <table>
            <tr>
              <td>name : {item.name}</td>
              <td>email : {item.email}</td>
              <td> <input type="button" value="click here" onClick={del} /></td>
            </tr>
           
          </table>
            
              
            
              
          </center>
       
      )
    })
  }

    </>
  );
}

export default App;
