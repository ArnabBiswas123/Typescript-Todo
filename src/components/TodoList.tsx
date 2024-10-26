import { Todo } from "../model"
import { SingleTodo } from "./SingleTodo"
import './styles.css'
interface props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,

}


export const TodoList: React.FC<props> = ({ todos, setTodos }: props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">
          Active tasks
        </span>
        {
          todos.map(todo => {
            return (
              <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
            )
          })
        }
      </div>
      <div className="todos remove">
        <span className="todos__heading">
          Completed tasks
        </span>
        {
          todos.map(todo => {
            return (
              <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
            )
          })
        }
      </div>
    </div>
    // <div className="todos">
    //   {
    //     todos.map(todo => {
    //       return (
    //         <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}></SingleTodo>
    //       )
    //     })
    //   }

    // </div>
  )
}
