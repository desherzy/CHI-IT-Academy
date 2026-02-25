import { Request, Response } from 'express';
import { dbService } from '../services/dbService';

export const getAllUsers = (req: Request, res: Response) => {
    const users = dbService.getAllUsers();
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = dbService.getUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

// ???
export const getAuthor = (req: Request, res: Response) => {
    res.json({ author: 'Medvid Roman' });
};

export const createUser = (req: Request, res: Response) => {
    const { firstName, lastName, email, password } = req.body;

    //there might be hashing password in future

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newUser = dbService.createUser(firstName, lastName, email, password);
    res.status(201).json(newUser);
};

export const updateUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { firstName, lastName, email, password } = req.body;

    const updatedUser = dbService.updateUser(id, firstName, lastName, email, password);
    if (updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export const deleteUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const success = dbService.deleteUser(id);
    if (success) {
        res.json({ message: 'User deleted successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

