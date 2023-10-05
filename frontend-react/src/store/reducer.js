import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productList: [],
    dashboardStats:undefined,
    totalRevenue:undefined,
    topSales:undefined,
    categorySales:undefined,
    productStocks:undefined,
    storeRevenue:undefined
} ;

export const appStoreSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setDashboardStats:(state, action) => {
            state.dashboardStats = action.payload.dashboardStats;
        },
        setTotalRevenue:(state, action) => {
            state.totalRevenue = action.payload.totalRevenue;
        },
        setTopSales:(state, action) => {
            state.topSales = action.payload.topSales;
        },
        setCategorySales:(state, action)=>{
            state.categorySales = action.payload.categorySales;
        },
        setProductStock:(state, action)=>{
            state.productStocks = action.payload.productStocks;
        },
        setStoreRevenue:(state, action)=>{
            state.storeRevenue = action.payload.storeRevenue;
        }
    },
});

// Selectors
export const getDashboardStats = (state) => state.dashboardStats;
export const getTotalRevenue = (state) => state.totalRevenue;
export const getTopSales = (state) => state.topSales;
export const getCategorySales = (state) => state.categorySales;
export const getProductStocks = (state) => state.productStocks;
export const getStoreRevenue = (state) => state.storeRevenue;

// Reducers and actions
export const { setProductList,setDashboardStats,setTotalRevenue,setTopSales,setCategorySales,setProductStock,setStoreRevenue } = appStoreSlice.actions;

export default appStoreSlice.reducer;