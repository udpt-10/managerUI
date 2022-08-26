import Footer from "../Footer";
import Navigation from "../Navigation";
import LeaveTable from "./LeaveTable";
import React, {useState, useEffect} from "react";
import { getAllLeaveRequest } from "../APIs";
const LeaveList = () => {

    const [data, setData] = useState();

    useEffect(() => {
        if(data){
            return;
        }
        getAllLeaveRequest().then((res) => setData(res));
    })

    if(!data){
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
        <LeaveTable data={data}/>
        <Footer/>
    </>);
};

export default LeaveList;