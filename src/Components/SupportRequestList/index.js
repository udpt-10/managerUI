import React, { useEffect, useState } from 'react';
import "./index.scss";
import SupportRequestListTable from "./SupportRequestListTable";
import Footer from "../Footer";
import Navigation from '../Navigation';
import { getAllSupportRequest } from '../APIs';
const SupportRequestList = () =>{

    const [data, setData] = useState();
    useEffect(() =>{
        if(data){
            return;
        }
        getAllSupportRequest().then((res) => setData(res.data));
    }, [data])

    if(!data) {
        return;

    }

    if (data) {
        for(let i = 0; i < data.length; i++) {  
            data[i].id = i + 1;
            data[i].date = new Date(data[i].date);
        }
      }
    return (<>
        <Navigation/>
        <SupportRequestListTable data={data}/>
        <Footer/>
    </>);
};
export default SupportRequestList;
