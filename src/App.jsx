

import './App.css'
import Counter from './Counter'
import ConuntRun from './Cricket'


function App() {
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
    <>     //fragment 
      
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
