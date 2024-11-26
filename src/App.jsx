import { useState } from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTodo([...todo, inputValue]);
    setInputValue("");
    console.log(todo);
  }

  function removeTodo(index) {
    const newList = todo.filter((_, i) => i !== index);
    setTodo(newList);
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-indigo-200 mx-auto h-[800px] p-5 rounded-lg shadow-lg">
      <div className="w-[600px] mx-auto">
        <div className="text-4xl flex justify-center pt-4 font-extrabold text-purple-600">
          Todo List
        </div>
        <div className="flex flex-col self-center w-full">
          <form onSubmit={addTodo} className="flex justify-center mt-5">
            <input
              className="custom-placeholder custom-input w-full h-[40px] rounded-md mr-2 p-2 bg-white shadow-inner placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              type="text"
              placeholder="Add to do"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <button
              type="submit"
              className="bg-yellow-500 rounded-md w-[50px] hover:bg-yellow-600 text-white font-bold shadow-md"
            >
              Add
            </button>
          </form>
          <div className="flex justify-center mt-5 self-start w-full">
            <ListItem todo={todo} removeTodo={removeTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
