function App() {
 // Generic
  // function getSize(arr: number[] | string[]| boolean[] | object[]): number {
  //   return arr.length;
  // }

  function getSize<T>(arr: T[]): number {
    return arr.length;
  }
  const arr1 = [1,2,3];
  getSize<number>(arr1) // 3
  /**  = function getSize(arr: number[]): number{
    ...
  }
  */

  const arr2 = ["a","b","c"];
  getSize<string>(arr2) // 3

  const arr3 = [false, true, false]
  getSize<boolean>(arr3) // 3

  const arr4 = [{}, {}, {name: "Tim"}]
  getSize<object>(arr4) // 3

  // Interface generic
  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Mobile<object> = {
    name: "s21",
    price: 10000,
    option: {
      color: "red",
      coupon: false
    }
  }

  const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good"
  }

  interface User{
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }

  interface Book {
    price: number;
  }

  const user: User = { 
    name: 'a', 
    age: 10
  }

  const car: Car = {
    name: 'bmw',
    color: "red"
  }

  const book: Book = {
    price: 3000
  }

  function showName<T extends {name: string}>(data: T): string{
    return data.name
  }

  showName(user)
  showName(car)
  // showName(book)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
