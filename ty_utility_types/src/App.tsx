
function App() {
  // keyof
  interface User {
    id: number;
    name: string; 
    age: number;
    gender: 'm' | 'f';
  }

  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

  const uk:UserKey = 'name'

  // Partial<T>
  /**
    interface User {
    id?: number;
    name?: string; 
    age?: number;
    gender?: 'm' | 'f';
  }
   */

  let admin: Partial<User> = {
    id: 1,
    name: 'Bob'
  }

  // Required<T>
  interface Student {
    id: number;
    name: string;
    age?: number;
  }

  let admin2: Required<Student> = {
    id: 1,
    name: "Bob",
    age: 22
  }

  // Readonly<T>
  let admin3: Readonly<Student> = {
    id: 1,
    name: "Bob",
    age: 22
  }

  // admin3.name = "dd"

  //Record<K, T>
  type Grade = "1" | "2" | "3" | "4"
  type Score = "A" | "B" | "C" | "D"

  const score: Record<Grade, Score> ={
    1: "A",
    2: "B",
    3: "C",
    4: "D"
  }

  interface Book {
    id: number;
    name: string;
  }

  function isValid(book: Book){
    const result: Record<keyof Book, boolean> = {
      id: book.id > 0,
      name: book.name !== '',
    }
    return result
  }

  // Pick<T, K>
  interface Person {
    id: number;
    name: string;
    age: number;
    gender: 'M' | 'F';
  }
  
  // Pick = pick up some properties in an interface
  const admin4: Pick<Person, 'id' | "name"> = {
    id: 0,
    name: "Bob"
  }

  // Omit<T, K>
  // Omit = I can omit some properties
  const admin5: Omit<Person, "age" | "gender"> = {
    id: 0,
    name: "Bob"
  }

  // Exclude<T1, T2>
  // Exclude number and boolean in T1 
  type T1 = string | number | boolean | undefined
  type T2 = Exclude<T1, number | boolean>

  // NonNullable<Type>
  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>

  return (
    <div className="App">
      
    </div>
  )
}

export default App
