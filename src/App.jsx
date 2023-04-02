import MainContent from "./components/MainContent"
import Title from "./components/Title"
import TodoHeader from "./components/TodoHeader"
import { Toaster } from "react-hot-toast";

import "./styles/utilities/App.scss"

function App() {

  return (
    <>
      <div className="App">
        <Title>Todo List</Title>
        <div className="app__wrapper">
          <TodoHeader />
          <MainContent />
        </div>
      </div>
            
      <Toaster    
        toastOptions={
        {
          style: {
          marginTop:'20px',
          fontSize: '1.4rem',
          }}
        }
      />
    </>
  );
}

export default App
