import "./widget.scss";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { BASE_URL, configToken } from "../../utils/api";
import { addToast } from "../../redux/features/toast/toastSlice";
import { userColumns, userRows } from "../../datatablesource";
const Widget = ({ type }) => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn,token} = useSelector((state) => state.auth);

   useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      axios
        .get(`${BASE_URL}transformer_data/all`, configToken(token))
        .then((response) => {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          dispatch(
            addToast({
              type: "error",
              message: "Could not load transformers!",
            })
          );
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, token]);
  
  let data;

  switch (type) {
    case "transformer":
      data = {
        title: "Transformers",
        isAvailable: true,
        link: "See all transformers",
      };
      break;
   
    case "users":
      data = {
        title: "Users",
        isAvailable:true,
        link: "See details",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
         <span className="title">{data.title}</span>
        <span className="counter">
          {data.isAvailable} {Data.length}
        </span>
        <span className="link">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
