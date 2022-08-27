import Footer from "../Footer";
import Navigation from "../Navigation";
import LeaveTable from "./LeaveTable";
import React, {useState, useEffect} from "react";
import { getAllLeaveRequest } from "../APIs";
const LeaveList = () => {

    const [data, setData] = useState();
    const [isReload, setReload] = useState(false);
    const reloadCallBack = () => {
        setReload(!isReload);

      };
    useEffect(() => {
        if(data){
            return;
        }
        getAllLeaveRequest().then((res) => setData(res.data));
    }, [isReload])

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
        <LeaveTable data={data} reloadCallBack={reloadCallBack}/>
        <Footer/>
    </>);
};

export default LeaveList;