import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state) //we have a state in it..we return it as it is

  console.log('state', state);

  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>fetch todos</button>
      {
        // if loading completed
        state.todo.data && state.todo.data.map((e) => (
          <li>{e.title}</li>
        ))
      }
    </div>
  );
}

export default App;
