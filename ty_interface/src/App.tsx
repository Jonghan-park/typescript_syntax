import { useState } from 'react'

type Score = 'A' | 'B';


function App() {
  const [count, setCount] = useState(0)

  interface User{
    name: string, 
    age: number,
    // Optional ? :
    gender?: string,
    // readonly 
    // only read the value
    readonly birthYear: number,
    // grade can be changed (ex: xx, key, val etc...)
    [grade: number] : Score
  }

  interface Add {
    (num1: number, num2: number): number
  }

  const add: Add = function(x , y){
    return x + y
  }

  function add2(num1: number, num2: number): number{
    return num1 + num2
  }

  interface isAdult{
    (age: number) : boolean
  }

  const a:isAdult = (age) =>{
    return age > 19;
  }

  interface Car {
    color: string,
    wheels: number,
    start(): void
  }
  // extends interface
  interface Benz extends Car{
    door: number,
    stop(): void
  }
  
  interface Toy {
    name: string
  }

  // extends two interfaces
  interface toyCar extends Toy, Car{
    price: number
  }

  const benz : Benz = {
    color: "White",
    wheels: 4,
    door: 5,
    stop(){
      console.log("Stop")
    },
    start() {
      console.log("Start")
    }
  }

  class BMW implements Car{
    color;
    wheels = 4;

    constructor(c: string){
      this.color = c
    }

    start() {
        console.log("GO")
    }
  }

  const c = new BMW('White')
  c.start()

 


  let user: User = {
    name: 'Joseph',
    age: 30,
    birthYear: 2000,
    1: "B"
  }
  user.age = 10;
  user.gender = "male"


  return (
    <div className="App">
      <h1>{c.color}</h1> 
    </div>
  )
}

export default App
