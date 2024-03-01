import { FC } from "react";
import CommentView from "./CommentView";
import { Comment } from "../types";

type Props = {
  comments: Comment[];
};

const CommentList: FC<Props> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.body}>
          <CommentView comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
