import { FC } from "react";
import { ForumPost } from "../types";

type Props = {
  forumPost: ForumPost;
};

const ForumPostMetadataView: FC<Props> = ({ forumPost }) => {
  const authorFullName = `${forumPost.author.firstName} ${forumPost.author.lastName}`;
  return (
    <h3>
      {authorFullName}, {forumPost.postedAt.toDateString()}
    </h3>
  );
};

export default ForumPostMetadataView;
