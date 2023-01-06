import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { BASE_URL, configToken } from "../../utils/api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";

const theme = createTheme();




const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        {...field}
        {...props}
        margin="dense"
        size="small"
        fullWidth
        helperText={meta.touched && meta.error ? meta.error : null}
        error={meta.touched && Boolean(meta.error)}
      />
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phoneNumber:Yup.string()
    .required("This field is required!"),
  
});

function Biodata() {
  const { token, isLoggedIn } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      //   console.log("Im logged in!");
      setIsLoading(true);
      axios
        .get(`${BASE_URL}users/updateprofile`, configToken(token))
        .then((res) => {
          //   console.log(res.data);
          setIsLoading(false);
          setUserData(res.data);
        })
        .catch((err) => console.log(err.message));
    }
  }, [token, isLoggedIn]);

  console.log(userData);

  const handleSubmit = (values) => {
    const profile = { ...userData.profile };
    const postObj = {
      values,
      profile,
    };
    console.log(postObj);
    setIsLoading(true);
    axios
      .post(`${BASE_URL}users/profile`, postObj, configToken(token))
      .then((res) => {
        console.log(res.data);
        navigate("/");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };

  let displayData;
  if (isLoading) {
    displayData = (
      <Grid container spacing={1} justifyContent="center" sx={{ marginTop: 5 }}>
        <CircularProgress color="secondary" size={40} />
      </Grid>
    );
  } else if (
    !isLoading &&
    userData &&
    Object.keys(userData).length === 0 &&
    Object.getPrototypeOf(userData) === Object.prototype
  ) {
    displayData = <h1>Data empty!</h1>;
  } else {
    displayData = (
      <Box sx={{ mt: 3 }}>
        <Formik
          initialValues={{
            firstName: userData.user.firstName,
            lastName: userData.user.lastName,
            email: userData.user.email,
            phoneNumber: userData.user.phoneNumber,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          <Form>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  First Name
                </Typography>
                <MyTextInput name="firstName" type="text" disabled={true} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle1" gutterBottom>
                  Last Name
                </Typography>
                <MyTextInput name="lastName" type="text" disabled={true} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Email Address
                </Typography>
                <MyTextInput
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@formik.com"
                  disabled={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Phone Number
                </Typography>
                <MyTextInput name="phoneNumber" type="number" />
              </Grid>
             
              
             
            
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" type="submit" sx={{ width: "100%" }}>
                SUBMIT
              </Button>
            </Grid>
          </Form>
        </Formik>
      </Box>
    );
  }

  if (!isLoggedIn) {
    return (
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          You are not Logged In!
        </Typography>
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        component={Paper}
        maxWidth="xs"
        sx={{ backgroundColor: "white", py: 1, my: 10, borderRadius: 5 }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" gutterBottom>
            Personal Biodata
          </Typography>
          {displayData}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Biodata;