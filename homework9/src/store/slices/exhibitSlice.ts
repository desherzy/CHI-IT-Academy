import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createExhibit, getAllExhibits, getMyExhibits } from '../../api/exhibitAction';

export const fetchExhibits = createAsyncThunk(
  'exhibits/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllExhibits();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch');
    }
  }
);

export const fetchMyExhibits = createAsyncThunk(
  'exhibits/fetchMy',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getMyExhibits(); 
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch');
    }
  }
);

export const createNewExhibit = createAsyncThunk(
  'exhibits/create',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const data = await createExhibit(formData); 
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create post');
    }
  }
);

interface ExhibitState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ExhibitState = {
  items: [],
  loading: false,
  error: null,
};

const exhibitSlice = createSlice({
  name: 'exhibits',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExhibits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExhibits.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExhibits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default exhibitSlice.reducer;

