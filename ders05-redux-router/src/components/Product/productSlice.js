import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../stores/api";

const name = "products";

const initialState = {
    datas: [],
    errors: null,
    loading: true
}

export const fetchProducts = createAsyncThunk(
    name + "/fetch",
    async (_, { rejectWithValue }) => await api.urunleriDetayliGetir()
        .then(({ data }) => data.data)
        .catch(errors => rejectWithValue(errors))
);

export const productsSlice = createSlice({
    name,
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.datas = payload;
        });
        builder.addCase(fetchProducts.rejected, (state, actions) => {
            state.loading = false;
            state.errors = actions;
            state.datas = [];
        })
    }
})

export default productsSlice.reducer;
