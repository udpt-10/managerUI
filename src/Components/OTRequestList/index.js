import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/index";
import Footer from "../Footer/index";
import OTRequestListTable from "./OTRequestListTable";
import { getAllOTRequest } from "../APIs";
const OTRequestList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    if (data) {
      return;
    }
    getAllOTRequest().then((res) => setData(res.data));
  }, [data]);

  if (!data) {
    return;
  }
  
  if (data) {
    for(let i = 0; i < data.length; i++) {  
        data[i].id = i + 1;
        data[i].date = new Date(data[i].date);
    }
  }

  return (
    <>
      <Navigation />
      <OTRequestListTable data={data}/>
      <Footer />
    </>
  );
};

export default OTRequestList;
