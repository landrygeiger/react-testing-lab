import { Dispatch, FC, useState } from "react";
import { ForumPost } from "../types";

type Props = {
  forumPost: ForumPost;
  setForumPost: Dispatch<ForumPost>;
};

const LikeButton: FC<Props> = ({ forumPost, setForumPost }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setForumPost({ ...forumPost, likes: forumPost.likes + (isLiked ? -1 : 1) });
    setIsLiked(!isLiked);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <p>{forumPost.likes} Likes</p>
      <button onClick={handleClick}>{isLiked ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default LikeButton;
