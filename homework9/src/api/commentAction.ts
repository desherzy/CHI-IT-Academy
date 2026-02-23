import axiosInstance from "./axiosInstance";

export const createComment = async (exhibitId: number, text: string) => {
    const response = await axiosInstance.post(`/exhibits/${exhibitId}/comments`, { text });
    return response.data;
};

export const deleteComment = async (commentId: number) => {
    const response = await axiosInstance.delete(`/comments/${commentId}`);
    return response.data;
};

export const updateComment = async (commentId: number, text: string) => {
    const response = await axiosInstance.put(`/comments/${commentId}`, { text });
    return response.data;
};

