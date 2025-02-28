import React, { useState, useRef, useEffect } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import './styles.css'

type props = {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo = ({ todo, todos, setTodos }: props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDone = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
    setEdit(false)
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])


  return (
    <form className='todos__single' onSubmit={(e) => { handleEdit(e, todo.id) }}>
      {edit ? (
        <input ref={inputRef} className='todos__single--text' value={editTodo} onChange={(e) => { setEditTodo(e.target.value) }}></input>
      ) : (
        todo.isDone ? (
          <s className='todos__single--text'>{todo.todo}</s>
        ) : (
          <span className='todos__single--text'>{todo.todo}</span>
        )
      )}

      <div>
        <span className='icon'>
          <AiFillEdit onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit)
            }
          }} />
        </span>
        <span className='icon' onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
