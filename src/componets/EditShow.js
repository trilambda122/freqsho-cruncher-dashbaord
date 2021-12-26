import React from "react";
import Navbar from "./Navbar";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";

function EditShow(props) {
  const { data, handleEditClick } = props;

  const handleClick = (e) => {
    console.log("TESTING");
  };
  return (
    <div>
      {console.log("CLICK: ", props)}
      <IconButton aria-label="edit row" size="small" onClick={handleEditClick}>
        <SaveIcon color="primary" fontSize="small" />
      </IconButton>
      <p>STUFF {data._id}</p>
    </div>
  );
}

export default EditShow;
