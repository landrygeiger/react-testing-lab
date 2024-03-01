import { Dispatch, FC } from "react";
import { ForumPost } from "../types";
import MetadataView from "./MetadataView";
import LikeButton from "./LikeButton";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";

type Props = {
  forumPost: ForumPost;
  setForumPost: Dispatch<ForumPost>;
};

const ForumPostView: FC<Props> = ({ forumPost, setForumPost }) => {
  return (
    <>
      <h1>{forumPost.title}</h1>
      <MetadataView metadata={forumPost} />
      <p>{forumPost.body}</p>
      <LikeButton forumPost={forumPost} setForumPost={setForumPost} />
      <CommentInput forumPost={forumPost} setForumPost={setForumPost} />
      <h2>Comments</h2>
      <CommentList comments={forumPost.comments} />
    </>
  );
};

export default ForumPostView;
