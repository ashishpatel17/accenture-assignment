import { setDashboardStats, setTotalRevenue, setTopSales, setProductStock, setCategorySales , setStoreRevenue } from '../store/reducer';
import {  useDispatch } from 'react-redux';
import axios from 'axios';



class dashboardService {
    baseUrl;
    utils;
    dispatch = useDispatch();
    constructor() {
        this.baseUrl = "/api/dashboard/";
    }

    async getDashboardStats() {
        try {
            const response = await axios.get(this.baseUrl + "stats/dashboardStats");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setDashboardStats({ dashboardStats: response.data.data }));
            } else {
                this.dispatch(setDashboardStats({ dashboardStats: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setDashboardStats({ dashboardStats: { error: "unable to fetch data" } }));
        }
    }

    async getTotalRevenue() {
        try {
            const response = await axios.get(this.baseUrl + "stats/revenue");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setTotalRevenue({ totalRevenue: response.data.data }));
            } else {
                this.dispatch(setTotalRevenue({ totalRevenue: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setTotalRevenue({ totalRevenue: { error: "unable to fetch data" } }));
        }
    }

    async getTopSales() {
        try {
            const response = await axios.get(this.baseUrl + "stats/topSales");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setTopSales({ topSales: response.data.data }));
            } else {
                this.dispatch(setTopSales({ topSales: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setTopSales({ topSales: { error: "unable to fetch data" } }));
        }
    }

    async getSalesByCategory() {
        try {
            const response = await axios.get(this.baseUrl + "stats/categorySales");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setCategorySales({ categorySales: response.data.data }));
            } else {
                this.dispatch(setCategorySales({ categorySales: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setCategorySales({ categorySales: { error: "unable to fetch data" } }));
        }
    }

    async getProductStocks() {
        try {
            const response = await axios.get(this.baseUrl + "stats/productStocks");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setProductStock({ productStocks: response.data.data }));
            } else {
                this.dispatch(setProductStock({ productStocks: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setProductStock({ productStocks: { error: "unable to fetch data" } }));
        }
    }

    async getStoreRevenue() {
        try {
            const response = await axios.get(this.baseUrl + "stats/storeRevenue");
            if (response.status === 200 || response.status === 201) {
                this.dispatch(setStoreRevenue({ storeRevenue: response.data.data }));
            } else {
                this.dispatch(setStoreRevenue({ storeRevenue: { error: "unable to fetch data" } }));
            }
        } catch (e) {
            this.dispatch(setStoreRevenue({ storeRevenue: { error: "unable to fetch data" } }));
        }
    }

}

export default dashboardService;