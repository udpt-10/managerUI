import React from 'react';
import "./index.scss";
import SupportRequestListTable from "./SupportRequestListTable";
import Footer from "../Footer";
import Navigation from '../Navigation';
const SupportRequestList = () =>{
    return (<>
        <Navigation/>
        <SupportRequestListTable/>
        <Footer/>
    </>);
};
export default SupportRequestList;
