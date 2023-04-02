import MainContent from "./components/MainContent"
import Title from "./components/Title"
import TodoHeader from "./components/TodoHeader"

import "./styles/utilities/App.scss"

function App() {

  return (
    <div className="App">

      <Title>Todo List</Title>

      <div className="app__wrapper">
        <TodoHeader />
        <MainContent />
      </div>


    </div>
  )
}

export default App
