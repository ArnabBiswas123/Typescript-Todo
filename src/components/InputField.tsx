import React from 'react'
import { useRef } from 'react';
import './styles.css'

interface props {
  todo: string,
  setTodo: React.Dispatch<React.SetStateAction<string>>,
  handleAdd: (e: React.FormEvent) => void;//handle add is a function which takes nothing as props and returns void
}

const InputField = ({ todo, setTodo, handleAdd }: props) => {
  const inputRef = useRef<HTMLInputElement>(null) //here type is the type of the input element as the references


  return (
    <form
      className="input"

      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a Task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}

export default InputField
