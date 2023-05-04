import React, {useState} from 'react';
import {Cell, Column, Row, TableBody, TableHeader, TableView} from "@adobe/react-spectrum";
import students from '../data/students.json';

export default function StudentsTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10
    const totalPages = Math.ceil(students.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const slicedData = students.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber);
    }
    return (
        <div>
            <TableView
                aria-label="Example table with static contents"
            >
                <TableHeader>
                    <Column>Student Name</Column>
                    <Column>Course Name</Column>
                    <Column>Lesson</Column>
                    <Column>Progress</Column>
                </TableHeader>
                <TableBody>
                    <Row>
                        <Cell>Games</Cell>
                        <Cell>File folder</Cell>
                        <Cell>6/7/2020</Cell>
                        <Cell>6/7/2020</Cell>
                    </Row>
                    {students && students.map((item) => (
                        <Row key={item.id}>
                            <Cell>{item.student_name}</Cell>
                            <Cell>{item.course_name}</Cell>
                            <Cell>{item.lesson_name}</Cell>
                            <Cell>{item.progress}</Cell>
                        </Row>
                    ))}
                </TableBody>
            </TableView>
            <nav className="spectrum-Pagination spectrum-Pagination--listing">
                <a href="#"
                   className="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--primary spectrum-Pagination-prevButton"><span
                    className="spectrum-Button-label">Prev</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">1</span></a>
                <a href="#"
                   className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet is-selected"><span
                    className="spectrum-ActionButton-label">2</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">3</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">4</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">5</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">6</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">...</span></a>
                <a href="#" className="spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet"><span
                    className="spectrum-ActionButton-label">24</span></a>
                <a href="#"
                   className="spectrum-Button spectrum-Button--sizeM spectrum-Button--outline spectrum-Button--primary spectrum-Pagination-nextButton"><span
                    className="spectrum-Button-label">Next</span></a>
            </nav>
            {/*</div>*/}
        </div>
    );
};

