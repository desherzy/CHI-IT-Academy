import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginRequest } from '../../api/userActions';

interface UserState {
  isAuthenticated: boolean;
  user: any | null;
};

const initialState: UserState = {
    isAuthenticated: !!localStorage.getItem('token'),
    user: null,
};

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: any, { rejectWithValue }: any) => {
        try {
            const data = await loginRequest(credentials);
            localStorage.setItem('token', data.token);
            return data.user;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message || 'Login failed');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state: any, action: PayloadAction<any>) {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state: any) {
            state.isAuthenticated = false;
            state.user = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder: any) => {
        builder.addCase(loginUser.fulfilled, (state: any, action: any) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        }).
        addCase(loginUser.rejected, (state: any) => {
            state.isAuthenticated = false;
        });
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

