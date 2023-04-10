
function App() {
  // Literal types
  const userName1 = "Bob"
  let userName2: string | number = "Tom"
  userName2 = 2

  type Job = "Police" | "Developer" | "Teacher"

  interface User {
    name: string
    job: Job
  }

  let user1: User = { name: "Bob", job: "Developer" } 

  // Number literal
  interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3;
  }

  // Union types
  interface Car {
    name: "Car";
    color: string;
    start(): void;
  }
  interface Mobile {
    name: "Mobile";
    color: string;
    call(): void
  }

  function getGift(gift: Car | Mobile){
    console.log(gift.color)
    if(gift.name === "Car"){
      gift.start()
    } else {
      gift.call()
    }
  }

  // Intersection Types
  interface Car2 {
    name: string;
    start(): void
  }
  
  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Toy & Car2 = {
    name: "Hoho",
    start() {
        
    },
    color: "Blue",
    price: 10000
  }

  return (
    <div className="App">
      
    </div>
  )
}

export default App
