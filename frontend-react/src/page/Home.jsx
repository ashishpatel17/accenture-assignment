import React, { useEffect } from "react";
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
} from "../store/reducer";
import utilsFunctions from "../utils/utils";
import { setDashboardStats,setStoreRevenue } from "../store/reducer";

const Home = () => {
  let apiService = new dashboardService();
  let utils = new utilsFunctions();
  let setDashboardStats = useSelector(getDashboardStats);
  let totalRevenue = useSelector(getTotalRevenue);
  let topSales = useSelector(getTopSales);
  let salesByCategory = useSelector(getCategorySales);
  let productStocks = useSelector(getProductStocks);
  let storeRevenue = useSelector(getStoreRevenue);
  let dispatch = useDispatch();

  useEffect(() => {
    apiService.getDashboardStats();
    apiService.getTotalRevenue();
    apiService.getTopSales();
    apiService.getSalesByCategory();
    apiService.getProductStocks();
    apiService.getStoreRevenue();
    
  // setTimeout(()=>{
  //   console.log("dispatch");
  //   dispatch(setStoreRevenue({storeRevenue:[]}));
  // },5000);
  
  }, []);


  return (
    <div className="w-full page-container">
      <div className="flex items-center h-12">
        <div className="w-1/2">
          <p className="mt-5 ml-5">Dashboard</p>
        </div>
        <div className="w-1/2">
          <div className="flex justify-end mt-5 mr-5"></div>
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
          <p className="mb-4">Total Revenue</p>
          <BarChart
            height="260"
            value={utils.convertToBarChartData(totalRevenue, true)}
          ></BarChart>
        </div>
        <div className="flex-grow w-full p-4 m-2 h-82 lg:w-2/5 sm:w-2/5 box-color">
          <p className="mb-4 ">Top Popular Sales Item</p>
          <div className="salesTable">
            <Table tableData={topSales}></Table>
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
