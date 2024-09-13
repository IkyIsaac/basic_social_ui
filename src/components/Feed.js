
import {
  Box,
} from "@mui/material";
import React from "react";
import Post from "./Post";
import AddIcon from "./AddIcon";

const Feed = () => {
  return (
    <Box flex={4} p={2} bgcolor={"background.default"}>
      <Post />
      <Post />
      <Post />
      <Post />
      <AddIcon/>
    </Box>
  );
};

export default Feed;
