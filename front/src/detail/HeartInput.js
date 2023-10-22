import { useState } from "react";
import HeartInputStyles from "./Detail.module.css";

const HeartInputButton = () => {
  const data = [1, 2, 3, 4, 5];
  const [like, setLike] = useState(0);
  console.log("test");
  const inputHeart = (e) => {
    setLike((prev) => {
      return e.target.value;
    });
  };

  return (
    <>
      {data.map((val, idx) => {
        <div key={idx}>console.log({idx});</div>;
      })}
    </>
  );
};
export default HeartInputButton;
