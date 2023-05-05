import React, {useState} from 'react';
import {Cell, Column, Row, TableBody, TableHeader, TableView, useAsyncList, useCollator} from "@adobe/react-spectrum";
import students from '../data/students.json';

export default function StudentsTable() {
    let collator = useCollator({numeric: true});

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


    let list = useAsyncList({
        async load({signal}) {
            return {
                items: students
            };
        },
        async sort({items, sortDescriptor}) {
            return {
                items: items.sort((a, b) => {
                    let first = a[sortDescriptor.column];
                    let second = b[sortDescriptor.column];
                    let cmp = collator.compare(first, second);
                    if (sortDescriptor.direction === 'descending') {
                        cmp *= -1;
                    }
                    return cmp;
                })
            };
        }
    });

    return (
        <div>
            <TableView
                aria-label="Example table with static contents"
                sortDescriptor={list.sortDescriptor}
                onSortChange={list.sort}
            >
                <TableHeader>
                    <Column key="student_name" allowsSorting>Student Name</Column>
                    <Column key="course_name">Course Name</Column>
                    <Column key="lesson_name">Lesson</Column>
                    <Column key='progress' align='end'>Progress</Column>
                </TableHeader>
                <TableBody
                    items={list.items}
                    loadingState={list.loadingState}
                >
                    {(item) => (
                        <Row key={item.id}>
                            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
                        </Row>
                    )}
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
        </div>
    );
};

