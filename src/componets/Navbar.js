import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
function Navbar() {
  return (
    <AppBar style={{ background: "#479787" }} position="static">
      <Toolbar>
        <Box
          component="img"
          sx={{
            maxHeight: { xs: 25 },
            mr: 2,
          }}
          alt="The house from the offer."
          src="./images/freqsho-logo.png"
        />
        <Link href="/" underline="none">
          <Typography color="secondary" style={{ margin: "10px" }}>
            DASHBOARD
          </Typography>
        </Link>
        <Link href="/table" underline="none">
          <Typography color="secondary" style={{ margin: "10px" }}>
            EVENTS
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
