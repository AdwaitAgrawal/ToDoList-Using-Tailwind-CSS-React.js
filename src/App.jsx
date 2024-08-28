import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="h-screen bg-gray-900 flex justify-center pt-10">
      <div className="text-teal-300 flex flex-col items-center">
        <div className="flex items-center space-x p-3  ">
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/6150/c40a9e1f-308b-48f1-b49e-14ef0e05af70.svg"
            width="75"
            height="75"
          />
          <span className="text-3xl">ToDoList</span>
        </div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
