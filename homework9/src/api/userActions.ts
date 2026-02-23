import axiosInstance from "./axiosInstance";

export const loginRequest = async (credentials: any) => {
    // const response = await axiosInstance.post("/auth/login", credentials);
    // return response.data;

    // Response for testing
    await new Promise(resolve => setTimeout(resolve, 1000));
        if (credentials.email === 'test@test.com' && credentials.password === 'qwerty') {
        return {
        token: 'fake-jwt-token',
        user: { id: 1, name: 'Roman', email: credentials.email }
        };
    } else {
        throw { response: { data: { message: 'Wrong credentials' } } };
    }
};

export const registerRequest = async (userData: any) => {
    const response = await axiosInstance.post("/auth/register", userData);
    return response.data;
};

