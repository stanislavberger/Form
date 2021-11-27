import React from 'react'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Navigation() {
    return (
        
        <div>
            <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/1">Realtime Changer</Nav.Link>
                <Nav.Link as={Link} to="/2">Click Changer</Nav.Link>
            </Nav>
        </div>
    )
}

export default Navigation
