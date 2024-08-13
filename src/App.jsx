import Homepage from "../src/Crud/Homepage"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from "../src/Crud/CreateUser"
import Users from "../src/Crud/Users"
import EditUser from "../src/Crud/EditUser"
const App = ()=>{
    return(
        <div>
           <BrowserRouter>
           <Homepage/>
           <Routes>
            <Route element={<CreateUser/>} path="/"/>
            <Route element={<Users/>} path="/users"/>
            <Route element={<EditUser/>} path="/edit/:index"/>
            <Route/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}

export default App