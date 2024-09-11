import { Pets } from '@mui/icons-material'
import { AppBar,Toolbar, styled, Typography, Box } from '@mui/material'
import borderRadius from "@mui/system"
import React from 'react'

const StyledTooolbar= styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between",
});

const Search=styled("div")(({theme})=>({
  backgroundColor:"white",
  padding:"8px 20px",
  borderRadius:theme.shape.borderRadius,
  width:"40%",
}))
const Icons=styled(Box)(({theme})=>({
  backgroundColor:"white",
}))

const Navbar = () => {
  return (
    <AppBar position='sticky'> <StyledTooolbar>
      <Typography variant='h5'sx={{display:{ xs:"none", sm:"block"}}}>
       Lamadev
      </Typography>
      <Pets sx={{display:{ xs:"block", sm:"none"}}}/>
      <Search>Search</Search>
      <Icons>icons</Icons>
      </StyledTooolbar>
    </AppBar>
  )
}

export default Navbar