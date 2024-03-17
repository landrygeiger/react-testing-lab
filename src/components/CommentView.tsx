import { FC } from "react";
import { Comment } from "../types";
import MetadataView from "./MetadataView";

type Props = {
  comment: Comment;
};

const CommentView: FC<Props> = ({ comment }) => {
  return (
    <>
      <MetadataView metadata={comment} />
      <p aria-label="User Comment">{comment.body}</p>
    </>
  );
};

export default CommentView;
