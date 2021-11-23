/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {
    Link,
    useLocation
  } from "react-router-dom";


const Navbar = () => {

    let location = useLocation();
  React.useEffect(() => {
  }, [location]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Let's Visualize</Link>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/selection"? "active": " "}`} aria-current="page" to="/selection">Selection Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/bubble"? "active": " "}`} aria-current="page" to="/bubble">Bubble Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/insertion"? "active": " "}`} aria-current="page" to="/insertion">Insertion Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/"? "active": " "}`} aria-current="page" to="/">Merge Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/quick"? "active": " "}`} aria-current="page" to="/quick">Quick Sort</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/heap"? "active": " "}`} aria-current="page" to="/heap">Heap Sort</Link>
                            </li>
                          
                        </ul>
        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
