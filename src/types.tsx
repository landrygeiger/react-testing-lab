export type ForumPost = {
  title: string;
  body: string;
  author: {
    firstName: string;
    lastName: string;
  };
  postedAt: Date;
  likes: number;
  comments: Comment[];
};

export type Comment = {
  author: {
    firstName: string;
    lastName: string;
  };
  body: string;
  postedAt: Date;
};
