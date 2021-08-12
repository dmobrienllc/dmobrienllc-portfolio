import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto bg-secondary p-4">
            <div className="container text-center mb-5">
                <h3>
                    @dmobrienllc Web Development
                </h3>
                <ul>
                    <li><a href="mailto:dmobrienllc@gmail.com" target="_blank">Gmail</a></li>
                    <li><a href="https://www.linkedin.com/in/dmobrienllc" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/dmobrienllc" target="_blank">GitHub</a></li>
                    <li><a href="https://stackoverflow.com/users/15960204/dmobrien8485" target="_blank">StackOverflow</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;


{/* <Container fluid="md" className="p-0">
<Row>
    <Col>
        <h3>
            @dmobrienllc Web Development
        </h3>
    </Col>
    <Col>
        <li><a href="mailto:dmobrienllc@gmail.com" target="_blank">Gmail</a></li>
    </Col>
    <Col>
        <li><a href="https://www.linkedin.com/in/dmobrienllc" target="_blank">LinkedIn</a></li>
    </Col>
    <Col>
        <li><a href="https://github.com/dmobrienllc" target="_blank">GitHub</a></li>
    </Col>
    <Col>
        <li><a href="https://stackoverflow.com/users/15960204/dmobrien8485" target="_blank">StackOverflow</a></li>
    </Col>
</Row>
</Container> */}
