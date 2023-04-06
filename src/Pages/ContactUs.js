import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Snackbar,
  Box,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import PageTitle from "../components/PageTitle";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the code to send the form data to your server or API
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contacts = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "(123) 456-7890",
    },
  ];

  return (
    <Box sx={{ marginX: 10 }}>
      <PageTitle title="Contact Us" sub="View all related content" />

      <Box container spacing={3} justify="center">
        {contacts.map((contact) => (
          <Box item xs={12} sm={6} key={contact.email}>
            <div>
              <Typography variant="h6" component="h2">
                <b> {contact.name}</b>
              </Typography>
              <Typography variant="subtitle1" component="p">
                <b>Email:</b> {contact.email}
              </Typography>
              <Typography variant="subtitle1" component="p">
                <b> Phone:</b>{" "}
                <a href={`tel:${contact.phone}`} id="callMe">
                  {contact.phone}
                </a>
              </Typography>
            </div>
          </Box>
        ))}
      </Box>
      <br />
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          className={classes.textField}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          className={classes.textField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Send
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message sent!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;
