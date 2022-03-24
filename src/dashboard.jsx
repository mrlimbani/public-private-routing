import React from 'react'

import Navbar from './Navbar'
import Shop from './Shop';

function dashboard() {
    return (
        <div>
            dashboard
            <Navbar />
            <div className="container">
                <Shop />
            </div>
        </div>
    )
}

export default dashboard