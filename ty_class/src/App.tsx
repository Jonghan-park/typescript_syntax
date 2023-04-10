
function App() {

  // Access Modifier - public, private, protected
  /* 
  public - Child class, class instance 
  protected - Child class
  private - Only in the class 
  */ 
  class Car {
    color: string;
    // private variable can be accessed in the class has private variable
    // private name: string;
    // #name: string;
    name: string;

    // Static keyword 
    static wheels: number;

    constructor(color: string, name: string, wheels: number) {
      this.color = color;
      this.name = name; 
      // static variable should be using class name (NOT this keyword)
      // this.wheels = wheels;
      Car.wheels = wheels;
    }
    start() {
      console.log("Start")
    }
  }

  class Bmw extends Car {
    constructor(color: string, name: string, wheels: number){
      super(color,name, wheels);
    }
    showName(){
      console.log(super.name)
    }
  }

  const c = new Bmw("Black", "C class", 5)
  c.showName()
  console.log(c)
  // Using class name for static variable
  console.log(Car.wheels)

  // What if I don't want the variable name to change -> use readonly
  const z4 = new Bmw("White", "E class", 4)
  z4.name = "B class"


  // Abstract class
  

  return (
    <div className="App">
      
    </div>
  )
}

export default App
