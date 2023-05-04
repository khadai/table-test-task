import React from 'react';
import {Cell, Column, Row, TableBody, TableHeader, TableView} from "@adobe/react-spectrum";
import students from '../data/students.json';

export default function StudentsTable() {
    return (
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
                {students.students.map((item)=>(
                    <Row key={item.id}>
                        <Cell>{item.student_name}</Cell>
                        <Cell>{item.course_name}</Cell>
                        <Cell>{item.lesson_name}</Cell>
                        <Cell>{item.progress}</Cell>
                    </Row>
                ))}
            </TableBody>
        </TableView>

    );
};

