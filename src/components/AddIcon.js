import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  Videocam,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import React, { useState } from "react";

const AddIcon = () => {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const UserBox = styled(Box)({
    display: "flex",
    // justifyContent:"center",
    alignItems: "center",
  });

  return (
    <>
      <Tooltip
        title="Add Post"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 20px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          borderRadius={5}
          padding={3}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            color="gray"
            textAlign="center"
          >
            Create new Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: "40", height: "40" }}
              src="/images/image.png"
            />
            <Typography variant="span" fontWeight={500} padding={1}>
              Jane Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-basic"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            label="What's on your mind?"
            variant="standard"
          />
          <Stack mt={2} direction={"row"} mb={3} gap={1}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <Videocam color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddIcon;
