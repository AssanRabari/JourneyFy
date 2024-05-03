import React from "react";
import "./ListPage.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data?.map((item) => (
            <Card />
          ))}
        </div>
      </div>
      <div className="mapContainer">Map</div>
    </div>
  );
};

export default ListPage;
