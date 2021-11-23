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
                                <Link className="nav-link active" aria-current="page" href="/selection">Selection Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/bubble">Bubble Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="inserion">Insertion Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/merge">Merge Sort</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/quick">Quick Sort</Link>
                            </li>
                          
                        </ul>
        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
