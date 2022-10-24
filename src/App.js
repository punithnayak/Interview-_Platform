import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import EditorPage from "./Pages/EditorPage";
import Home from "./Pages/Home";
import "./App.css"
import {Toaster} from "react-hot-toast";
function App() {
  return (
   <>
   <Toaster position="top-right" toastOptions={
    {
      success:{
        theme:{
          primary: "green"
        }
      }
    }
   }>
   
   </Toaster>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/editor/:rootId" element={<EditorPage/>}/>
   </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
