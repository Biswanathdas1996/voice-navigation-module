import React, { useState } from "react";
import {
  FormControlLabel,
  Switch,
  TextField,
  Button,
  makeStyles,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import Card from "@mui/material/Card";
import PageTitle from "../components/PageTitle";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
  },
  saveButton: {
    marginTop: theme.spacing(2),
  },
}));

const SettingsPage = () => {
  const classes = useStyles();

  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSaveSettings = () => {
    // save settings logic
  };

  return (
    <Box sx={{ marginX: 10 }}>
      <PageTitle title="Settings" sub="View all related content" />

      <Card maxWidth="sm" sx={{ padding: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              value={name}
              onChange={handleNameChange}
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleDarkModeChange}
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Notifications"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              className={classes.formControl}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Status Visibility"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveSettings}
              className={classes.saveButton}
            >
              Save Settings
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default SettingsPage;
