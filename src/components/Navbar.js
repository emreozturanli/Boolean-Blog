import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AuthContext } from '../context/AuthContext';
import { BlogContext } from '../context/BlogContext';
import toast from 'react-hot-toast';


// MATERIAL UI STARTS HERE
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
// MATERIAL UI ENDS HERE

export default function PrimarySearchAppBar() {
  // PAGE STATES FUNCTIONALITIES HERE
  const navigate = useNavigate()
    const { logout,user } = React.useContext(AuthContext)
    const { setNewPostOpen,posts } = React.useContext(BlogContext)
    const [search, setSearch] = React.useState('')
  
  const handleSearch = (e) => {
  e.preventDefault()
  if(search === ''){
    toast.error('Please type something')
  }else{
       const searchedPosts = posts.filter((e)=> e.title.toLowerCase().includes(search.toLowerCase()));
    navigate('/search', {state: searchedPosts})
  }
 
  }

  const loginClick = () => {
    setAnchorEl(null);
    navigate('/login')
  };
  const registerClick = () => {
    setAnchorEl(null);
    navigate('/register')
  };
  const logoutClick = () => {
    setAnchorEl(null);
    logout(navigate)
  };

  // MATERIAL UI STARTS HERE
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu sx={{ display: { lg: 'none' } }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {user ?
        <div>
          <MenuItem sx={{ cursor: 'auto', "&:hover": { background: 'transparent' } }}>
            {user.displayName}
          </MenuItem>
          <MenuItem onClick={() => { navigate('/');setAnchorEl(null) }}>Home</MenuItem>
          <MenuItem onClick={() => {navigate('/about');setAnchorEl(null)}}>About</MenuItem>
          <MenuItem onClick={() => {navigate('/myposts');setAnchorEl(null)}}>My Posts</MenuItem>
          <MenuItem onClick={()=>{setNewPostOpen(true);setAnchorEl(null)}}>New Post</MenuItem>
          <MenuItem onClick={logoutClick}>Logout</MenuItem>
        </div>
        :
        <div>
          <MenuItem onClick={() => {navigate('/');setAnchorEl(null)}}>Home</MenuItem>
          <MenuItem onClick={() => {navigate('/about');setAnchorEl(null)}}>About</MenuItem>
          <MenuItem onClick={loginClick}>Login</MenuItem>
          <MenuItem onClick={registerClick}>Register</MenuItem>
        </div>
      }
    </Menu>
  );


  return (
   
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="fixed" sx={{backgroundColor:'#1b7e21'}} >
        <Toolbar>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
            onClick={()=> navigate('/')}
          >
            Boolean Blog
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <form onSubmit={handleSearch}>
              <StyledInputBase
                placeholder="Search for a post..."
                inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              />
            </form>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {user ?
            <>
              <Typography
                variant="body1"
                noWrap
                component="p"
                sx={{ display: { xs: 'none', lg: 'block' }, margin: '0 .6rem' }}

              >
                {user.displayName}
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/') }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/about') }}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/myposts') }}
              >
                My Posts
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={()=>setNewPostOpen(true)}
              >
                New Post
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={logoutClick}
              >
                Logout
              </Typography>
            </>
            :
            <>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/') }}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/about') }}
              >
                About
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/login') }}
              >
                Login
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="h6"
                sx={{ display: { xs: 'none', lg: 'block', cursor: 'pointer' }, margin: '0 .6rem' }}
                onClick={() => { navigate('/register') }}
              >
                Register
              </Typography>
            </>
          }

          <Box sx={{ display: 'flex' }}>
            <IconButton
              sx={{ display: { lg: 'none' } }}
              size="large"
              aria-label="show more"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
   
  );
}
