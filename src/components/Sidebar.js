import React from 'react';

function Sidebar() {
    return (
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">UI Elements</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Charts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tabs & Panels</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Responsive Tables</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Forms</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Multi-Level Dropdown</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Empty Page</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;
