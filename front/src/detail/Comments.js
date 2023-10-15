import commentsStyles from "./Detail.module.css";

import { useState, useEffect } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const onChange = (event) => setComment(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (comment === "") {
      return;
    }
    setComment(""); // state 변경 방법 1
    setComments((currentArray) => [comment, ...currentArray]); // state 변경 방법 2
  };
  useEffect(() => {}, [comments]);
  return (
    <div className={commentsStyles.comment_area}>
      {/* <div className={commentsStyles.talk_icon}></div> */}
      <h5>COMMENT</h5>
      <div className={commentsStyles.comment_text}>
        <form onSubmit={onSubmit}>
          <textarea
            value={comment}
            onChange={onChange}
            type="text"
            placeholder="전시회를 보고 느낀점을 남겨주세요!"
          />
          <button>등록</button>
        </form>
      </div>
      <br />
      <ul className={commentsStyles.comment_list}>
        {comments.map((comment, index) => (
          <li key={index}>
            <p className={commentsStyles.user}>민진</p>
            <hr />
            <div className={commentsStyles.user_comment}>{comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
