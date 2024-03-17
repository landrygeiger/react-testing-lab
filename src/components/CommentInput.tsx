import { ChangeEvent, Dispatch, FC, FormEventHandler, useState } from "react";
import { ForumPost } from "../types";

type Props = {
  forumPost: ForumPost;
  setForumPost: Dispatch<ForumPost>;
};

const CommentInput: FC<Props> = ({ forumPost, setForumPost }) => {
  const [commentBody, setCommentBody] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    // TODO: Use setForumPost() to update the original forumPost with
    // the new comment

    // const newForumPost: ForumPost = {};
    // setForumPost(newForumPost);

    setForumPost({
      ...forumPost,
      comments: [
        ...forumPost.comments,
        {
          author: { firstName: "Lab", lastName: "Student" },
          postedAt: new Date(),
          body: commentBody,
        },
      ],
    });

    setCommentBody("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentBody(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "1rem" }}>
      <input type="text" aria-label= "Comment Input" value={commentBody} onChange={handleChange} required />
      <button type="submit" disabled={commentBody.length === 0}>
        Comment
      </button>
    </form>
  );
};

export default CommentInput;
