export type ForumPost = {
  title: string;
  body: string;
  author: {
    firstName: string;
    lastName: string;
  };
  postedAt: Date;
  likes: number;
  comments: {
    author: {
      firstName: string;
      lastName: string;
    };
    body: string;
    likes: number;
  }[];
};
