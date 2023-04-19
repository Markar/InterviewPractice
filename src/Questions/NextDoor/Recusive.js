import * as React from "react";
import data from "./data.json";
const Card = (props) => {
  return (
    <>
      {props.data.map((item) => (
        <>
          <div className="card">            
            {item.name}
            {item.children?.length && <Card data={item.children} />}
          </div>
        </>
      ))}
    </>
  );
};

export const EmployeeChart = (props) => {
  return (
    <div>
      <b>
        Employee Chart
      </b>
      <Card data={data} />
    </div>
  );
};