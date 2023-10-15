import { useState } from "react";
import HeartStyles from "./Detail.module.css";

const HeartButton = () => {
  const [like, setLike] = useState(false);
  const onClick = () => setLike((currentLike) => !currentLike);
  return (
    <button
      className={
        like
          ? `${HeartStyles.heart_btn_bg} ${HeartStyles.full_heart}`
          : `${HeartStyles.heart_btn_bg} ${HeartStyles.empty_heart}`
      }
      onClick={onClick}
    />
  );
};

export default HeartButton;
