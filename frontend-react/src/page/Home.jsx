import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalFlexBox from "../component/HorizontalFlexBox";
import BarChart from "../component/charts/BarChart";
import DonutChart from "../component/charts/DonutChart";
import TwoColList from "../component/TwoColList";
import Table from "../component/Table";
import dashboardService from "../service/dashboardService";
import {
  getDashboardStats,
  getTotalRevenue,
  getTopSales,
  getCategorySales,
  getProductStocks,
  getStoreRevenue,
  getStores,
  getProductList,
} from "../store/reducer";
import utilsFunctions from "../utils/utils";
import ErrorBoundary from "../component/ErrorBoundry";
import { setProductList } from "../store/reducer";

const Home = () => {
  const [store, setStore] = useState(1);
  const [year, setYear] = useState(2021);
  const [totalRev, setTotalRev] = useState(0);
  const dispatch = useDispatch();

  let apiService = new dashboardService();
  let utils = new utilsFunctions();
  let setDashboardStats = useSelector(getDashboardStats);
  let totalRevenue = useSelector(getTotalRevenue);
  let topSales = useSelector(getTopSales);
  let salesByCategory = useSelector(getCategorySales);
  let productStocks = useSelector(getProductStocks);
  let storeRevenue = useSelector(getStoreRevenue);
  let stores = useSelector(getStores);
  let productList = useSelector(getProductList);

  useEffect(() => {
    apiService.getDashboardStats();
    apiService.getTopSales();
    apiService.getSalesByCategory();
    apiService.getProductStocks();
    apiService.getStoreRevenue();
    apiService.getStores();
    dispatch(setProductList({productList:["appple","orange"]}));
  }, []);

  useEffect(() => {
    apiService.getTotalRevenue(store, 2021);
    console.log(productList);
  }, [store, year,productList]);

  let getTotal = useMemo(() => {
    let total = 0;
    let data = utils.convertToBarChartData(totalRevenue, true);

    data.map((key, val) => {
      total = total + key.data;
    });
    return total;
  }, [totalRevenue]);

  const onStoreChange = (e) => {
    setStore(e.target.value);
  };

  const onYearChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="w-full page-container">
      <div className="flex items-center h-12">
        <div className="w-1/2">
          <p className="mt-5 ml-5">Dashboard </p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end mt-5 mb-5 mr-5">
            <div className="m-1 select-box">
              <p>store</p>
              <select onChange={onStoreChange} className="w-full">
                {stores.map((val, i) => {
                  return (
                    <option
                      key={`STORE-${val["store_id"]}`}
                      value={`${val["store_id"]}`}
                    >
                      {val["name"]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="m-1 select-box">
              <p>Year</p>
              <select onChange={onYearChange} className="w-full">
                <option option value="2021">
                  2021
                </option>
                <option option value="2022">
                  2022
                </option>
                <option option value="2023">
                  2023
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalFlexBox boxData={setDashboardStats}></HorizontalFlexBox>
      </div>

      <div className="flex flex-wrap">
        <div
          id="chart-revenue"
          className="flex-grow w-full p-4 m-2 h-82 lg:w-2/5 sm:w-2/5 box-color"
        >
          <p className="mb-4">Total Revenue ({getTotal})</p>
          <BarChart
            height="260"
            value={utils.convertToBarChartData(totalRevenue, true)}
          ></BarChart>
        </div>
        <div className="flex-grow w-full p-4 m-2 h-82 lg:w-2/5 sm:w-2/5 box-color">
          <p className="mb-4 ">Top Popular Sales Item</p>
          <div className="salesTable">
            <ErrorBoundary>
              <Table tableData={topSales}></Table>
            </ErrorBoundary>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="flex-grow w-2/5 p-4 m-2 h-75 lg:w-1/4 sm:w-2/5 box-color">
          <p className="mb-5">Sales By Category</p>
          <div className="h-60">
            {(() => {
              if (salesByCategory != undefined && salesByCategory != null) {
                return (
                  <DonutChart
                    labelKey="category"
                    dataKey="sales"
                    data
                    chartData={salesByCategory}
                  ></DonutChart>
                );
              }
            })()}
          </div>
        </div>
        <div className="flex-grow w-2/5 p-4 m-2 h-75 lg:w-1/4 sm:w-2/5 box-color">
          <TwoColList
            col1Key="item"
            col2Key="status"
            data={utils.twoColListDataFormat(productStocks)}
            title="In Demand Product Stock"
            col1="Item Category"
            col2="Stock Status"
          ></TwoColList>
        </div>
        <div className="flex-grow w-2/5 p-4 m-2 h-75 lg:w-1/4 sm:w-2/5 box-color">
          <p className="mb-5">Store Revenue</p>
          <BarChart
            barType="horizontal"
            height="290"
            color="random"
            labelTrim="true"
            value={utils.convertToBarChartData(storeRevenue, false)}
          ></BarChart>
        </div>
      </div>
    </div>
  );
};

export default Home;
