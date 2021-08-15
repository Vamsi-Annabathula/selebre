import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './style'
import { fetchAllComments } from '../../../actions/comment';

const useStyles = makeStyles(styles);

export default function DisplayComments() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllComments(3));
    });

    const comments = useSelector(state => state.comment?.comments);
    console.log(comments);
    var key = 1;
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Happy Birthday Wishes 🥳
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Here are the birthday Wishes for you from your Team mates
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    {comments == null ? <h3>If You Receive Any Comments They Will Display Here</h3>: ''}
                    <Grid container spacing={4}>
                        {comments?.map((comment) => (
                            <Grid item key = {key++} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            By: {comment.commentorName}
                                        </Typography>
                                        <Typography>
                                            {comment.comments}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}