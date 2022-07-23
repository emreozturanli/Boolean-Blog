import React,{useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {BlogContext} from '../context/BlogContext';

export default function NewPost() {
 const {newPostOpen,setNewPostOpen,title,content,image,setTitle,setImage,setContent,writeToDatabase} = useContext(BlogContext)

  const handleClose = () => {
    setNewPostOpen(false);
  };

  return (
    <div>
      <Dialog open={newPostOpen} onClose={handleClose}>
        <DialogTitle>Add New Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />
          <TextField
            autoFocus
            margin="normal"
            id="image"
            label="ImageUrl"
            type="text"
            fullWidth
            variant="standard"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            placeholder="If you don't type an URL random image will be placed."
          />
          <TextField
            autoFocus
            margin="normal"
            id="content"
            label="Content"
            type="text"
            fullWidth
            variant="standard"
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={writeToDatabase}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}