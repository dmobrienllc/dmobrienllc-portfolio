import { React, useState, useEffect } from 'react';
import Navigation from './Navigation';
//import Header from './Header';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import Header from './Header';
import Footer from './Footer';

import { Container, Row, Col } from 'react-bootstrap';

export default function PortfolioContainer() {
    const defaultPage = 'About';
    const [currentPage, setCurrentPage] = useState(defaultPage);

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />
                break;
            case 'Portfolio':
                return <Portfolio />
                break;
            case 'Blog':
                return <Blog />
                break;
            case 'Contact':
                return <Contact />
                break;
            case 'Resume':
                return <Resume />
                break;
            default:
                return <Home />
                break;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Container fluid="md" className="p-0">
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
                </Row>
                <Row>
                    <Col>{renderPage()}</Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}