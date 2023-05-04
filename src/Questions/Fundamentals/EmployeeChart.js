import * as React from "react";
import data from "./EmployeeChartData.json";

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

export default function EmployeeChart(props) {
  return (
    <div>
      <b>
        Employee Chart
      </b>
      <Card data={data} />
    </div>
  );
};