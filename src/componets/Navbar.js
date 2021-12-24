import React from "react";
import { AppBar, Toolbar} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Navbar() {
  return (
    <AppBar style={{ background: "#479787" }} position="static">
      <Toolbar>
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
