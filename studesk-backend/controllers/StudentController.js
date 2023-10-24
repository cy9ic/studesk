import Student from '../models/student.js';
import User from '../models/user.js';

// Get all students
export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new student
export const createStudent = async (req, res) => {
    const student = new Student(req.body);
    try {
        const newStudent = await student.save();

        res.json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a specific student by ID
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a student by ID
export const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a student by ID
export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findOne({email : req.body.email});
        const user = User.findOne({email:req.body.email});
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }else if(!user){
            return res.status(404).json({ message: 'User not found' });
        }
      await  Student.deleteOne({email:req.body.email});
    await        User.deleteOne({email:req.body.email});

        res.status(201).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};