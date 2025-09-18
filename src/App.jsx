

import { Suspense } from 'react'
import './App.css'
import Counter from './Counter'
import ConuntRun from './Cricket'
import Users from './Users'
import Player from './Player'
import Photogallary from './PhotoGallary'

// photoGallay function with useEffect useState but we don't use it
import { useEffect,useState } from 'react'



// json using .than 
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

// player function using await()
const playerFectchFunc = async () =>{
  const playerFetch = await fetch('https://jsonplaceholder.typicode.com/posts');
  return playerFetch.json()
}



function App() {
 
  
  // player function calling in App()
  const postPromise = playerFectchFunc()
  function handleClick(){
    alert ('I am Clicked.')
  }

  const handle3 = () =>{
    alert('Click by 3 arrow function')
  }
  const handle4 = (num) =>{
    const newNum = num + 5
    alert(newNum)
  }

  return (
    // fragment 
    <> 

    
     
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>   
      <Suspense fallback= {<h4>Loading...</h4>}>
        <Player postPromise = {postPromise}></Player>
      </Suspense>
      <h3>React simple project</h3>


      
      
      <Counter></Counter>
      <ConuntRun></ConuntRun>


      
      <button onClick={handleClick}>Click Me</button> <br />
      <button onClick={handleClick}>Click Me 1</button>
      <button onClick={()=>alert('click by inline arrow function')}>Click Me 2</button>
      <button onClick={handle3}>Click Me 3</button>
      <button onClick={()=>handle4(10)}>Click Me 4</button>         {/*   arrow function diye rap korte hobe */}
      
      
    </>
  )
}

export default App
