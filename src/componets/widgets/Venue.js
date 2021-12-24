import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Venue() {
  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader title="567" subheader="Venues" align="center" />
          <CardContent align="center">
            <AccountBalanceIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Venue;
