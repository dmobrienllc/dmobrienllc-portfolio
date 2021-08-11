import React from 'react';
import NavListItem from './NavListItem';

export default function Navigation({currentPage, handlePageChange}) {

    return (
        <ul className="nav nav-tabs">
            <NavListItem pageName="Home" pageUrl="#home" isCurrentPage={currentPage === 'Home' ? true: false} handlePageChange={handlePageChange} />
            <NavListItem pageName="Portfolio" pageUrl="#portfolio" isCurrentPage={currentPage === 'Portfolio' ? true: false} handlePageChange={handlePageChange} />
            <NavListItem pageName="Blog" pageUrl="#blog" isCurrentPage={currentPage === 'Blog' ? true: false} handlePageChange={handlePageChange} />
            <NavListItem pageName="Contact" pageUrl="#contact" isCurrentPage={currentPage === 'Contact' ? true: false} handlePageChange={handlePageChange} />
            <NavListItem pageName="Resume" pageUrl="#resume" isCurrentPage={currentPage === 'Resume' ? true: false} handlePageChange={handlePageChange} />
        </ul>
    )
}