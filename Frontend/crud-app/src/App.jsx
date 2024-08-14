import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateUser from "./pages/CreateUser"
import UpdatesUser from "./pages/UpdatesUser"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create-user" element={<CreateUser/>}/>
      <Route path="/update-user/:id" element={<UpdatesUser/>}/>
     </Routes>
    </>
  )
}

export default App
