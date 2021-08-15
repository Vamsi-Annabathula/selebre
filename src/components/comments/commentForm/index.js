import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CommentIcon from '@material-ui/icons/Comment';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './style'
import { ADMINID } from '../../../utils';
import { postComment } from '../../../actions/comment';

const useStyles = makeStyles(styles);

export default function CommentForm() {
  const classes = useStyles();
  const [commentValue, setCommentValue] = useState("");
  const isPostSuccessful = useSelector(state => state.comment?.isCommentPosted);
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(postComment(ADMINID, commentValue));
  }
  const handleOnChange = (e) => {
    setCommentValue(e.target.value);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CommentIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Wish
        </Typography>
        <form method="post" className={classes.form} onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                value={commentValue}
                onChange={handleOnChange}
                autoComplete="comment"
                name="comment"
                variant="outlined"
                required
                fullWidth
                id="comment"
                label="Comment"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
        {isPostSuccessful ? <p>Comment posted successfully</p> : ""}
      </div>
    </Container>
  );
}