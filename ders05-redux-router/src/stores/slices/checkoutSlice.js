import { createSlice } from '@reduxjs/toolkit';

const name = "checkout";
const initialState = {
    datas: []
};

export const counterSlice = createSlice({
    name,
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            //Eğer cart içerisinde ürün zaten varsa sayısı bir artsın, yoksa ürün cart'a eklensin.
            // { data, count: 1 }
            !state.datas.find(data => data.data.id === payload.id, 0)
                ? state.datas.push({ data: payload, count: 1 })
                : state.datas.map(data => data.data.id === payload.id ? data.count++ : data);

        },
        removeProduct: (state, { payload }) => {
            // state.datas = state.datas.filter(data => data.id !== payload.id);
            const product = state.datas.find(data => data.data.id === payload.id);
            product.count > 1
                ? state.datas.map(data => data.data.id === payload.id ? data.count-- : data)
                : state.datas = state.datas.filter(data => data.id !== payload.id);
        }
    },

});

export const { addProduct, removeProduct } = counterSlice.actions;

export default counterSlice.reducer;
