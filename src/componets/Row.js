import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Link from "@mui/material/Link";

import { fDate, fTime } from "../utils/formatDate";
import { fArtist } from "../utils/formatArtist";
function Row(props) {
  const { row } = props;
  const [rowOpen, setRowOpen] = useState(false);
  return (
    <>
      <TableRow key={row._id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setRowOpen(!rowOpen)}
          >
            {rowOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{fDate(row.date)}</TableCell>
        <TableCell>{fArtist(row.artist)}</TableCell>
        <TableCell>{row.venue}</TableCell>
        <TableCell>
          <Link href={row.url} target="_blank">
            {row.source}
          </Link>
        </TableCell>
        <TableCell>{fDate(row.scrapeDate)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={rowOpen} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ARTIST</TableCell>
                    <TableCell>STAGE</TableCell>

                    <TableCell>TIME</TableCell>
                    <TableCell>SPONSER</TableCell>
                    <TableCell>REVIEW</TableCell>
                  </TableRow>
                </TableHead>
                {row.artist.map((artist) => {
                  return (
                    <TableBody>
                      <TableRow>
                        <TableCell>{artist}</TableCell>
                        <TableCell>{row.stage}</TableCell>
                        <TableCell>{fTime(row.time)}</TableCell>
                        <TableCell>{row.sponser}</TableCell>
                        <TableCell>{row.review}</TableCell>
                      </TableRow>
                    </TableBody>
                  );
                })}
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;
