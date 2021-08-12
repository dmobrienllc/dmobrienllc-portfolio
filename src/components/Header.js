//https://medium.com/how-to-react/use-react-router-link-with-bootstrap-315a8b88e129
import React from 'react';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <header>
                <h1>David O'Brien</h1>
                <p>
                    Offering professional web development services to discerning clients.
                </p>
            </header>
        </Container>
    )
}

export default Header;
