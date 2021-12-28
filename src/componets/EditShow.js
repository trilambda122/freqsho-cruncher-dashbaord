import React, { useState } from "react";
import Navbar from "./Navbar";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function EditShow(props) {
  const { data, handleEditClick, open } = props;

  return (
    <div>
      <Grid container spacing={2} style={{ padding: "50px" }}>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleEditClick}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              ARTIST: {data.artist}
            </Typography>
          </Box>
        </Modal>
      </Grid>

      {/* <IconButton aria-label="edit row" size="small" onClick={handleEditClick}>
        <SaveIcon color="primary" fontSize="small" />
      </IconButton>
      <p>STUFF {data._id}</p> */}
    </div>
  );
}

export default EditShow;
