import React from "react";
import Navigation from "../Navigation/index";
import Footer from "../Footer/index";
import OTRequestListTable from "./OTRequestListTable";
const OTRequestList = () => {
  return (
    <>
      <Navigation />
      <OTRequestListTable />
      <Footer />
    </>
  );
};

export default OTRequestList;
