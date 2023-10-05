import React, { useEffect, useState } from "react";

const TwoColList = ({ title, col1, col2, data, col1Key, col2Key }) => {
  const [colData,setColData] = useState([]);
  useEffect(()=>{
    if(data){
      setColData(data);
    }
  },[data]);
  return (
    <div className='two-col-list'>
      <p className='mb-5'>{title}</p>
      <div className="flex flex-wrap border-b border-white ">
        <div className="flex-grow w-2/3 ">
          {col1}
        </div>
        <div className="flex-grow w-1/3 ">
          <p className="flex justify-end">{col2}</p>
        </div>
      </div>
      <ul className="col-list">
        {
          (colData.map((val,i) => {
            return (
              <li key={i} className="flex flex-wrap pt-2 pb-2 border-b border-gray-500 ">
                <div className="flex-grow w-2/3 text-xs">
                  {val[col1Key]}
                </div>
                <div className="flex-grow w-2/5 lg:w-1/3 sm:w-1/3">
                  <p className={`${val["stock"]?"text-green-500":"text-red-500"}  flex justify-end pr-2 text-xs`}>{val[col2Key]}</p>
                </div>
              </li>
            )
          }))
        }
      </ul>
    </div>
  );
};

export default TwoColList;
