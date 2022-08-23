import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CheckingListURL, EmployeeListURL, OTRequestListURL, leaveRequestlistURL, supportRequestListURL} from "../constans";
import CheckingList from "../Checking";
import EmployeeList from "../EmployeeList";
import OTRequestList from "../OTRequestList";
import SupportRequestList from "../SupportRequestList";
import LeaveList from "../Leave";
const AppComponent = () => {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route index element={<EmployeeList/>}></Route>
                <Route path={EmployeeListURL} element={<EmployeeList/>}></Route>
                <Route path={CheckingListURL} element={<CheckingList/>}></Route>
                <Route path={OTRequestListURL} element={<OTRequestList/>}></Route>
                <Route path={supportRequestListURL} element={<SupportRequestList/>}></Route>
                <Route path={leaveRequestlistURL} element={<LeaveList/>}></Route>
                <Route path="*" element={<EmployeeList/>}></Route>
            </Routes>
        </BrowserRouter>
    </>);
};

export default AppComponent;
