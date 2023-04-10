import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // data type
  let age: number = 23;
  let isAdult: boolean = true;
  let a: number[] = [1,2,3];
  let a2: Array<number> = [1,2,3]

  let week1: string[] = ['mon', 'tue', 'wed']
  let week2: Array<string> = ['mon2', 'tue2', 'wed2']

  // Tuple
  let b: [string, number] = ['hello', 1]
  // error
  // b = [1, 'hello']

  // void
  // void doesn't return any value
  function sayHello():void {
    console.log('Hello')
  }

  // naver
  // When return value is error and the function has infinete loop task
  function showError(): never{
    throw new Error();
  }

  function infLoop(): never {
    while(true){
      
    }
  }

  // enum
  enum Os {
    Window = 45, 
    Ios,
    Android
  }

  type myType = {
    name: string,
    email: string, 
    phone: number,
  }

  let user: myType = {
    name: "Joseph",
    email: "ddd222@gmail.com",
    phone: 11113542333
  }

  // null, undefined
  let c: null = null;
  let d: undefined = undefined

  return (
    <div className="App">
     <h1>{age}</h1>
     <h1>{typeof isAdult}</h1>

     <h1>{a.map(a=>{
      return (a + ", ")
     })}</h1>

     <h1>{a2.map(a => {
      return (a + " | ")
     })}</h1>

     <h1>{week1.map(week => {
      return (week +" ")
     })}</h1>

    <h1>{week2.map(week => {
      return (week +" ")
     })}</h1>
    <h1>{user.phone}</h1>
    </div>
  )
}

export default App
