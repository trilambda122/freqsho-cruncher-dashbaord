import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { getVenueCount } from "../../utils/api";
function Venue() {
  const [venueCount, setVenueCount] = useState();
  useEffect(async () => {
    getVenueCount().then((response) => {
      setVenueCount(response.data.venueCount);
    });
  }, []);

  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader title={venueCount} subheader="Venues" align="center" />
          <CardContent align="center">
            <AccountBalanceIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default Venue;
