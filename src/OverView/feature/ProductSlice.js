import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getProducts from './getProducts';
import getStyle from './getStyle';

const initialState = {
    info: null,
    style: null,
    selectedStyle:null,
};

export const dataAsync = createAsyncThunk(
    'product/fetchData',
    async () => {
        const response = await getProducts();
        return response.data;
    }
);

export const styleAsync = createAsyncThunk(
    'style/fetchdata',
    async () => {
        const res = await getStyle();
        return res.data;
    }
);

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        gProduct: (state, action) => {
            state.info = action.payload;
        },
        gtStyle: (state, action) => {
            state.style = action.payload;
        },
        currentStyle:(state,action)=>{
            state.selectedStyle=action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(styleAsync.fulfilled, (state, action) => {
                state.style = action.payload;
            })
            .addCase(dataAsync.fulfilled, (state, action) => {
                state.info = action.payload;
            })

    },
});

export const { gProduct, gtStyle ,currentStyle} = ProductSlice.actions;

export const selectProduct = (state) => state.product.info;
export const selectStyle = (state) => state.product.style;
export const thisstyle = (state)=>state.product.selectedStyle;


export default ProductSlice.reducer;
