import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardActionArea,
} from "@material-ui/core";

import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { getNextweekCount } from "../../utils/api";
function ShowsNextSevenDays() {
  const [nextweekTotal, setNextweekTotal] = useState();
  useEffect(async () => {
    getNextweekCount().then((response) => {
      setNextweekTotal(response.data);
    });
  }, []);
  return (
    <Grid item xs={12} sm={3}>
      <Card style={{ minHeight: "200px", backgroundColor: "#e8eded" }}>
        <CardActionArea>
          <CardHeader
            title={nextweekTotal}
            subheader="Shows in the next 7 days"
            align="center"
          />
          <CardContent align="center">
            <TheaterComedyIcon color="primary" fontSize="large" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ShowsNextSevenDays;
