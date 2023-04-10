
function App() {

  
  function add(num1: number, num2: number) : number {
    return num1 + num2
  }

  // Parmeter value is optional, put question mark ? 
  function hello(name?: string){
    return `Hello ${name || 'world'}`
  }
  const result = hello("")

  // rest
  function add2(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0)
  }

  // bind
  interface User {
    name: string
  }

  const Sam: User = {name: 'Sam'}

  function showName(this:User, age: number, gender: 'm'|'f'){
    console.log(this.name, age, gender)
  }

  const a = showName.bind(Sam)
  a(30, 'm')

  //  Overload
  interface Person {
    name: string;
    age: number;
  }
  // function join(name: string, age: string) : string;
  function join(name: string, age: number) : Person;
  function join(name: string, age: number) : Person | string{
    if(typeof age === 'number'){
      return {
        name,
        age,
      }
    }else{
      return "Age should be number."
    }
  }

  const sam: Person = join('Sam',30)
  // const jane: string = join('Jane', '30')

  return (
    <div className="App">
      <h1>{result}</h1>
    </div>
  )
}

export default App
