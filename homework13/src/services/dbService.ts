import { AppDataSource } from "../ormconfig";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export const dbService = {
    getAllUsers: async () => {
        return await userRepository.find();
    },

    getUserById: async (id: number) => {
        return await userRepository.findOneBy({ id });
    },

    createUser: async (firstName: string, lastName: string, email: string, password: string) => {
        const newUser = userRepository.create({ firstName, lastName, email, password });
        return await userRepository.save(newUser);
    },

    updateUser: async (id: number, firstName: string, lastName: string, email: string, password: string) => {
        await userRepository.update(id, { firstName, lastName, email, password });
        return await userRepository.findOneBy({ id });
    },

    deleteUser: async (id: number) => {
        const result = await userRepository.delete(id);
        return result.affected !== 0;
    },
};

