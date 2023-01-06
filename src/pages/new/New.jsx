import "./new.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/features/auth/authSlice";
import { addToast } from "../../redux/features/toast/toastSlice";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { BASE_URL, configToken } from "../../utils/api";
import { useEffect } from "react";
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
  transformerName: Yup.string().required("This field is required!"),
  Rating: Yup.string().required("This field is required!"),
  Details: Yup.string().required("This field is required!"),
  transformerOwner: Yup.string().required("This field is required!"),
});


const AddTransformer= () => {
  const [transformerName, settransformerName] = useState([]);
  const [Rating, setRating] = useState("");
  const [Details, setDetails] = useState("");
  const [transformerOwner, settransformerOwner] = useState("");
  const [transformerId, settransformerId] = useState("");

  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, token } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setLoading(true));
      axios
        .get(`${BASE_URL}transformer_data/add`, configToken(token))
        .then((response) => {
          // console.log(response.data);
          settransformerName(response.data.transformerName);
          setRating(response.data.Rating);
          setDetails(response.data.Details);
          settransformerOwner(response.data.transformerOwner);
          settransformerId(response.data.transformerId);
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err.message);
          dispatch(setLoading(false));
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, token]);


  const handleSubmit = (values, resetForm) => {
    console.log(values);
    dispatch(setLoading(true));
    axios
      .post(`${BASE_URL}transformer_data/add`, values, configToken(token))
      .then((res) => {
        console.log(res.data);
        dispatch(setLoading(false));
        resetForm();
        dispatch(
          addToast({ type: "success", message: "Successfully added transformer!" })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoading(false));
        dispatch(
          addToast({ type: "error", message: "Could not add transformer." })
        );
      });
  };
  if (!isLoggedIn ){
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
          You are not Authorized!
        </Typography>
      </Box>
    );
      }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
       
    
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
          <Typography component="h1" variant="h5">
            Add Transformer
          </Typography>
            <Box sx={{ mt: 3 }}>
              <Formik
                initialValues={{
                  transformerName: "",
                  Rating: "",
                  Details: "",
                  transformerId: transformerId,
                  transformerOwner: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
              >
                <Form>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Tranformer Name
                      </Typography>
                      <MyTextInput
                        label="Transformer Name"
                        id="transformerName"
                        name="transformerName"
                        type="text" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Rating
                      </Typography>
                      <MyTextInput
                        label="Rating"
                        id="Rating"
                        name="Rating"
                        type="text" />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="subtitle1" gutterBottom>
                        Details
                      </Typography>
                      <MyTextInput
                        label="Details"
                        id="Details"
                        name="Details"
                        type="text" />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="subtitle1" gutterBottom>
                        Tranformer Owner
                      </Typography>
                      <MyTextInput
                        label="Transformer Owner"
                        id="transformerOwner"
                        name="transformerOwner"
                        type="email" />
                    </Grid>

                    
                   
                    
                    
                   
                   
                   
                  </Grid>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isLoading ? true : false}
                    sx={{ mt: 3, mb: 2 }}
                  >
                    {isLoading ? (
                      <CircularProgress color="primary" size={25} />
                    ) : (
                      "Add Transfomer"
                    )}
                  </Button>

               
                </Form>
              </Formik>
            </Box>
          
        </Box>
      </Container>
      </div>
      </div>
    
  );
                    };

export default AddTransformer;


 