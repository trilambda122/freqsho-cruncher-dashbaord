import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Artist() {
  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader title="878" subheader="Artist" align="center" />
          <CardContent align="center" justify-content="flex-end">
            <MusicNoteIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Artist;
