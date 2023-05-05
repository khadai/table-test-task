import React from 'react';

export default function Pagination({className, rowsPerPage, totalPosts, paginate, currentPage}) {
    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / rowsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={`${className} spectrum-Pagination spectrum-Pagination--listing`}>
            <a
                href="#"
                className="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--primary spectrum-Pagination-prevButton"
            >
                <span
                    className="spectrum-Button-label"
                    onClick={() => paginate(currentPage - 1)}
                >
                    Prev
                </span>
            </a>
            {pageNumbers.map(number => (
                <a key={number}
                   href="#"
                   onClick={() => paginate(number)}
                   className={`spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet  ${currentPage === number ? 'is-selected' : ''}`}
                >
                    <span className="spectrum-ActionButton-label">{number}</span>
                </a>
            ))}
            <a
                href="#"
                className="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--primary spectrum-Pagination-nextButton"
            >
                <span
                    className="spectrum-Button-label" onClick={() => paginate(currentPage + 1)}
                >
                    Next
                </span>
            </a>
        </nav>
    );
};

