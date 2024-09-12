import { Mail, Notifications, Pets, TroubleshootRounded } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
// import borderRadius from "@mui/system"
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "8px 20px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "baseline",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display:"flex "
  }
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection:"column",
  alignItems: "baseline",
  gap: "8px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
}));

const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <AppBar position="sticky">
      {" "}
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          i-Media
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={1} color="error">
            <Notifications />
          </Badge>
          <Badge>
            <Avatar
              sx={{ width: "40", height: "40" }}
              src="/images/image.png"
              onClick={(e)=>setOpen(true)}
            />
          </Badge>
        </Icons>
        <UserBox onClick={(e)=>setOpen(true)}>
          <Avatar sx={{ width: "40", height: "40" }} src="/images/image.png" 
          />
          <Typography variant="span">Jane</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e)=>setOpen(false)}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
