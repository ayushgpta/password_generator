import { useEffect, useState,useRef } from 'react'


function App() {
  const [password,setpassword]=useState("");
  const [length,setlength]=useState(8);
  const [number,setnumber]=useState(false);
  const [character,setcharacter]=useState(false);
 
 const generatepassword=()=>{
  let pass="";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (number) str += "0123456789"
  if (character) str += "!@#$%^&*-_+=[]{}~`"
  for(let i=0;i<length;i++){
    let index=Math.floor(Math.random()*str.length);
    pass+=str[index];
  }
  setpassword(pass);
 }
useEffect(()=>{
  generatepassword()
},

[character,number,length])
let passref=useRef(null)
function copypassword(){
passref.current?.select()
alert("you copied the passowrd");
  window.navigator.clipboard.writeText(password);
}


  return (
    
    <div className='maindiv'>
      <div className="upper">
        <input type="text" id="password" placeholder='password' value={password} readOnly ref={passref}/>
        <button id="copy"
        onClick={copypassword}>copy</button>
      </div>
      <div className="lower">
       <input type="range" id="length"
       value={length}
       onChange={(e)=>{
        setlength(e.target.value)
       }}/>
       <label htmlFor="length">length {length}</label>
       <input type="checkbox" id="numbers"
       defaultChecked={number}
       onChange={()=>{
        setnumber((prev)=>!prev)
       }}/>
       <label htmlFor="numbers">numbers</label>
       <input type="checkbox" id='character' 
        defaultChecked={character}
        onChange={(e)=>{
         setcharacter((prev)=>!prev)
        }}/>
       <label htmlFor="character">characters</label>
      </div>
      </div>  
    
  )
}

export default App
