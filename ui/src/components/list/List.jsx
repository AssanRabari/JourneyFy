import React from "react";
import "./List.scss";
import Card from "../card/Card";
import { listData } from "../../lib/dummyData";

const List = ({posts}) => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
