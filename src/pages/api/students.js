import students from '../../data/students.json';

export default function handler(req, res) {
    res.status(200).json(students);
}
