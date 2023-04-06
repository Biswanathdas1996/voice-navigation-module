import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PageTitle from "../components/PageTitle";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function ProfilePage() {
  const classes = useStyles();

  return (
    <Box sx={{ marginX: 10 }}>
      <PageTitle title="Profile" sub="View all related content" />
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Avatar className={classes.avatar} />
              <Typography variant="h6" align="center" gutterBottom>
                User Name
              </Typography>
              <a href="/profile/settings">
                <Button variant="contained" color="primary" fullWidth>
                  Edit Profile
                </Button>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Typography variant="h6" gutterBottom>
                About Me
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                ante felis. Nullam at enim nec sapien malesuada sagittis. Duis
                euismod tristique leo, vitae hendrerit nibh viverra at.
              </Typography>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: user@example.com
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: 123-456-7890
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default ProfilePage;
