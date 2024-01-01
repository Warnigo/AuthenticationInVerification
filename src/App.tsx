import {useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./authentication/login.tsx";
import Register from "./authentication/register.tsx";
import {NotFound} from "./components/notFount/notFount.tsx";
import Verification from "./authentication/verification.tsx";

const App = () => {
    const [user] = useState("");
    console.log(user);

    const routerAuth = [
        { id: 1, element: <Login />, path: "/" },
        { id: 2, element: <Register />, path: "/register" },
        { id: 3, element: <Verification />, path: "/verification" },
        { id: 10, element: <NotFound />, path: "*" }
    ];

    return (
        <BrowserRouter>
            <Routes>
                {user ? null : routerAuth.map((data) => (
                    <Route path={data.path} element={data.element} key={data.id} />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
