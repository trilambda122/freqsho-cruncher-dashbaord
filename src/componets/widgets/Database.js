import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import StorageIcon from "@mui/icons-material/Storage";

function Database() {
  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader
            title="1378"
            subheader="Shows in the Database"
            align="center"
          />
          <CardContent align="center">
            <StorageIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Database;
