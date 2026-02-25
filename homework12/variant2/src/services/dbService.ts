// imitating a simple database for user management
// in future there will be serving of real database like MongoDB, MySQL, etc.
let users: any[] = [
    { id: 1, firstName: 'Luffy', lastName: 'Monkey D.', email: 'luffy@gmail.com', password: 'password123' },
    { id: 2, firstName: 'Zack', lastName: 'Effron', email: 'zack@gmail.com', password: 'securepass456' }
];

export const dbService = {
    getAllUsers: () => {
        return users;
    },

    getUserById: (id: number) => {
        return users.find(user => user.id === id);
    },

    createUser: (firstName: string, lastName: string, email: string, password: string) => {
        const newUser = {
            id: users.length + 1,
            firstName,
            lastName,
            email,
            password
        };
        users.push(newUser);
        return newUser;
    },

    updateUser: (id: number, firstName: string, lastName: string, email: string, password: string) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users[userIndex] = { id, firstName, lastName, email, password };
            return users[userIndex];
        }
        return null;
    },

    deleteUser: (id: number) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            return true;
        }
        return false;
    },
};

