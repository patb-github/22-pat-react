import { Outlet, Link } from "react-router-dom";
import App from "../App";
import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

function Layout() {
    const [sectorName, setSectorName] = useState("React - Assessment");
    const [isHome, setIsHome] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
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
                        setIsAdmin={setIsAdmin}/>}
        <Outlet />
    </div>
  )
}

export default Layout;