import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DatabaseWidget from "./widgets/Database";
import ArtistWidget from "./widgets/Artrist";
import VenueWidget from "./widgets/Venue";
import ShowsNextSevenDaysWidget from "./widgets/ShowsNextSevenDays";
import Navbar from "./Navbar";
const useStyles = makeStyles({
  boardItem: {
    paddingTop: "20px",
    paddingRight: "50px",
    paddingLeft: "50px",
  },
  alignItemsAndJustifyContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
});

function Dashboard() {
  const classes = useStyles();
  //   MAIN RETURN //

  return (
    <>
      <Navbar />
      <Grid container spacing={2} className={classes.boardItem}>
        <DatabaseWidget />
        <ArtistWidget />
        <VenueWidget />
        <ShowsNextSevenDaysWidget />
      </Grid>
    </>
  );
}

export default Dashboard;
