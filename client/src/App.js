import "./App.css";
import TodoEditModal from "./components/TodoEditModal";

import TodoContainer from "./components/TodosContainer";

function App() {
  return (
    <div className="App">
      <TodoEditModal />
      <TodoContainer />
    </div>
  );
}

export default App;
