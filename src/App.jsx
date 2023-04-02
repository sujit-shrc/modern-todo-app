import ListingContent from "./components/ListingContent"
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
          <ListingContent />
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
