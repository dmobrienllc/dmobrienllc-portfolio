import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
    return (
        <div>
            <Container fluid="md" className="p-0" >
                <Row>
                    <Col>
                        <div>
                            <h1>About Me</h1>
                            <p>Passionate, committed web devleloper, traveler, citizen.</p>

                            <p>I love to travel, climb, read (yes, actual books), play guitar,<br />
                                hang out with my son, and I love to develop amazing web sites<br />
                                for clients who want to stand out from the crowd (in a good way!).<br />
                            </p>

                            <p>Looking to take your web presence to the next level? Please dont<br />
                                hesitate to get in touch with me today; I look forward to our meeting!
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/summit.jpeg'} alt="One of my happy places!" title="One of my happy places!" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}