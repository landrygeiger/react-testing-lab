import { useState } from "react";
import ForumPostView from "./components/ForumPostView";
import { ForumPost } from "./types";

const myForumPost: ForumPost = {
  title: "My Forum Post",
  body: "This is a test post. Here is some content for the post. This post is about stuff and things.",
  author: {
    firstName: "Landry",
    lastName: "Geiger",
  },
  postedAt: new Date(),
  likes: 42,
  comments: [
    {
      body: "What a neat post!",
      author: {
        firstName: "Zach",
        lastName: "Wallenburg",
      },
      postedAt: new Date(),
    },
    {
      body: "Yeah that post was really cool.",
      author: {
        firstName: "John",
        lastName: "Post",
      },
      postedAt: new Date(),
    },
  ],
};
function App() {
  const [forumPost, setForumPost] = useState(myForumPost);
  return <ForumPostView forumPost={forumPost} setForumPost={setForumPost} />;
}

export default App;
