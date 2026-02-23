import axiosInstance from "./axiosInstance";

export const getAllExhibits = async () => {
    const response = await axiosInstance.get("/exhibits");
    return response.data;
};

export const getExhibitById = async (id: number) => {
    const response = await axiosInstance.get(`/exhibits/${id}`);
    return response.data;
};

export const getMyExhibits = async () => {
    const response = await axiosInstance.get("/exhibits/my");
    return response.data;
};

export const createExhibit = async (formData: FormData) => {
    const response = await axiosInstance.post('/exhibits', formData);
    return response.data;
};

export const deleteExhibit = async (id: number) => {
    const response = await axiosInstance.delete(`/exhibits/${id}`);
    return response.data;
};

