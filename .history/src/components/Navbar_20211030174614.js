/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import {
    Link,
    useLocation
  } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#">Let's Visualize</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Selection Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Bubble Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">insertion Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Merge Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Quick Sort</Link>
                            </li>
                          
                        </ul>
        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
