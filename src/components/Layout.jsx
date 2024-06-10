import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import App from "../App";

function Layout() {
    const [sectorName, setSectorName] = useState("React - Assessment");
    const [isHome, setIsHome] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [people, setPeople] = useState([]);
    const [id, setId] = useState(0);

    return (
        <div>
            <nav>
                <ul>
                    <li onClick={() => {
                                setSectorName("React - Assessment");
                                setIsHome(true);
                                setIsUser(false);
                                setIsAdmin(false);
                            }}>
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/owner"
                            onClick={() => setIsHome(false)}>
                            Owner
                        </Link>
                    </li>
                </ul>
            </nav>
            {isHome && <App sectorName={sectorName} 
                            setSectorName={setSectorName}
                            isUser={isUser}
                            setIsUser={setIsUser}
                            isAdmin={isAdmin}
                            setIsAdmin={setIsAdmin}
                            people={people}
                            setPeople={setPeople}
                            id={id}
                            setId={setId}/>}
            <Outlet />
        </div>
    )
}

export default Layout;