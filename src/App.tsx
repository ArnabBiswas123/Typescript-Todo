import React from 'react';
import './App.css';
import InputField from './components/InputField';
import { useState } from 'react';
import { Todo } from './model';
import { TodoList } from './components/TodoList';
// let name:string;
// let isDone: boolean;
// let hex: number = 0xf00d;
// let list: number[] = [1, 2, 3];//Array
// let list2: Array<number> = [1, 2, 3];// generic array type
// let x: [string, number];//touple
// let notSure: unknown = 4;
// declare function getValue(key: string): any;
// // OK, return value of 'getValue' is not checked


// type Person={//Custom type person
//   name:string,
//   age?:number  //? means age is optional
// }

// let person1:Person={
//   name:'Arnab'
// }

// let person2:Person[]

// let names:string|number; //here type may be number as well string

// type x={
//   a:string,
//   b:number
// }

// type y=x & { //extends the properties of x
//   c:string,
//   d:string
// }

// interface i1{
//   a:string,
//   b:number
// }

// interface i2 extends i1{
//   c:string,
//   d:string
// }




// unknown is the parent type of all other types. it's a regular type in the type system.
// any means "disable the type check". it's a compiler directive.


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("") //giving type to string to useState
  const [todos, setTodos] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
