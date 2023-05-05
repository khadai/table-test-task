import React, {useState} from 'react';
import {Cell, Column, Row, TableBody, TableHeader, TableView, useAsyncList, useCollator} from "@adobe/react-spectrum";
import students from '../data/students.json';
import {Pagination} from "@/components/index";
import styles from '../styles/styles.module.css';


export default function StudentsTable() {
    let collator = useCollator({numeric: true});

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(10);

    let list = useAsyncList({
        async load() {
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
        <div className={styles.container}>
            <TableView
                aria-label="Table with students information"
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
                    items={list.items.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)}
                    loadingState={list.loadingState}
                >
                    {(item) => (
                        <Row key={item.id}>
                            {(columnKey) => <Cell>{item[columnKey]}</Cell>}
                        </Row>
                    )}
                </TableBody>
            </TableView>
            <Pagination
                className={styles.pagination}
                rowsPerPage={rowsPerPage}
                totalPosts={list.items.length}
                paginate={(pageNumber) => setCurrentPage(pageNumber)}
                currentPage={currentPage}
            />
        </div>
    );
};

