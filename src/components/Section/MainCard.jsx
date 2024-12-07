import React from "react";
import Card from "../common/Card";

const cardList = [
  {
    title: "Get Lost",
    subTitle: "in your music.",
  },
  {
    title: "mellow",
    subTitle: "beats",
  },
];

const MainCard = () => {
  return (
    <div>
      <div className="mt-8 flex items-center justify-between">
        {cardList.map((item, index) => {
          return <Card item={item} index={index} key={item.title + index} />;
        })}
      </div>
    </div>
  );
};

export default MainCard;
