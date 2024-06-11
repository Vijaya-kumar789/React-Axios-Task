import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, } from "react-router-dom";
import InputPage from "./InputPage";
import UserData from "./UserData";
import NavBar from "./NavBar";
import { UserProvider } from "./contextApi";

function App() {
  
  return (
    <>
    
      <div className="container">
      <UserProvider>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <InputPage/>
            }
          />
          <Route
            path="/UserData"
            element={
              <UserData />
            }
          />
        </Routes>
        </UserProvider>
      </div>
     
    </>
   
  );
}

export default App;
