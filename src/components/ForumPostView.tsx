import { Dispatch, FC } from "react";
import { ForumPost } from "../types";
import ForumPostMetadataView from "./ForumPostMetadataView";

type Props = {
  forumPost: ForumPost;
  setForumPost: Dispatch<ForumPost>;
};

const ForumPostView: FC<Props> = ({ forumPost }) => {
  return (
    <>
      <h1>{forumPost.title}</h1>
      <ForumPostMetadataView forumPost={forumPost} />
      <p>{forumPost.body}</p>
    </>
  );
};

export default ForumPostView;
