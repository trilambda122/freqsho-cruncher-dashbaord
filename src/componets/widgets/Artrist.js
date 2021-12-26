import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { getArtistCount } from "../../utils/api";
function Artist() {
  const [totalArtist, setTotalArtist] = useState();
  useEffect(async () => {
    getArtistCount().then((response) => {
      setTotalArtist(response.data.length);
    });
  }, []);
  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader title={totalArtist} subheader="Artist" align="center" />
          <CardContent align="center" justify-content="flex-end">
            <MusicNoteIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Artist;
