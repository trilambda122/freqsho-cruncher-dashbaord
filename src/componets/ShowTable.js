import React, { useState } from "react";
import Navbar from "./Navbar";
import mockEventData from "../mock/mockEventData";
import { CircularProgress } from "@material-ui/core";
import { Grid, Card, CardContent } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Row from "./Row";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
function ShowTable() {
  // SET STATE
  const [eventData, setEventData] = useState(mockEventData);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // PAGEINATION FUNCIONTS
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // set lenght of data for pageination
  let dataLength;
  if (eventData) {
    dataLength = eventData.reslut.length;
  } else {
    dataLength = 0;
  }

  // MAIN RETURN
  return (
    <>
      <Navbar />
      {eventData ? (
        <>
          <Grid container spacing={2} style={{ padding: "50px" }}>
            <Paper
              elevation={10}
              sx={{
                minWidth: 600,
                maxWidth: 1200,
                margin: "auto",
                padding: "10px",
              }}
            >
              <TableContainer justify="center" align="center">
                <Table size="small" aria-label="simple table">
                  <TableHead
                    style={{ backgroundColor: "#424242", color: "#e8eded" }}
                  >
                    <TableRow>
                      <TableCell
                        align="center"
                        style={{ color: "#e8eded" }}
                      ></TableCell>
                      <TableCell align="center" style={{ color: "#e8eded" }}>
                        DATE
                      </TableCell>
                      <TableCell align="center" style={{ color: "#e8eded" }}>
                        ARTIST
                      </TableCell>
                      <TableCell align="center" style={{ color: "#e8eded" }}>
                        VENUE
                      </TableCell>
                      <TableCell align="center" style={{ color: "#e8eded" }}>
                        SOURCE
                      </TableCell>
                      <TableCell align="center" style={{ color: "#e8eded" }}>
                        SCRAPED
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {eventData.reslut
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((event) => {
                        // return getTableRow(event);
                        return <Row key={event._id} row={event} />;
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* PAGEINATION */}

              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={dataLength}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </Grid>
        </>
      ) : (
        // Progress circle

        <Grid container justify="center" align="center">
          <Grid item xs={6}>
            <Card
              style={{
                minHeight: "100px",
                backgroundColor: "#76a2c5",
                margin: "10px",
              }}
            >
              <CardContent justify="center" align="center">
                <Skeleton variant="rectangular" animation="pulse" />
                <Skeleton animation="wave" />
                <Skeleton animation="pulse" />
                {/* <CircularProgress color="#d95f27" />   */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ShowTable;
