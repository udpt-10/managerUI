import { useEffect, useState } from "react";
import { getEmployeeList } from "../APIs";
import Footer from "../Footer";
import Navigation from "../Navigation";
import EmployeeListTable from "./EmployeeListTable";

const EmployeeList = () => {

  const [data, setData] = useState();
  useEffect(() => {
    if(data){
      return;
    }
    getEmployeeList().then((res) => setData(res.data));
  });

  if(!data){
    return;
  }
  if (data) {
    for(let i = 0; i < data.length; i++) {  
        data[i].id = i + 1;
        if(data[i].sex === true){
          data[i].sex = "Male";
        }
        if(data[i].sex === false){
          data[i].sex = "Female";
        }
    }
  }

  return (
    <>
      <Navigation />
      <EmployeeListTable data={data}/>
      <Footer />
    </>
  );
};

export default EmployeeList;
