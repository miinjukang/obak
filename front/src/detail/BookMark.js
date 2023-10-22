import { useState } from "react";
import BookMarkStyles from "./Detail.module.css";

const BookMarkButton = () => {
  const [mark, setMark] = useState(false);
  const onClick = () => setMark((currentMark) => !currentMark);
  return (
    <button
      className={
        mark
          ? `${BookMarkStyles.bookMark_bg} ${BookMarkStyles.book_mark}`
          : `${BookMarkStyles.bookMark_bg} ${BookMarkStyles.non_mark}`
      }
      onClick={onClick}
    />
  );
};

export default BookMarkButton;
