import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
//import './productForm.css';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AppBar } from "@mui/material";

const options = [
  { label: "Beaulieu Vineyards GDL Cabernet", id: 1 },
  { label: "Cambria Julia's Vineyard Pinot Noir", id: 2 },
  { label: '"Desiderio" Avignonesi', id: 3 },
  { label: "Erath Pinot Gris", id: 4 },
  { label: "Foris Fly Over Red", id: 5 },
];

export default function ProductForm() {
  return (
    <Container maxWidth="xl">
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>

        <TabPanel>
          <Grid container spacing={10} alignItems="stretch">
            <Grid item xs={6}>
              <Autocomplete
                style={{ marginTop: "10px", width: "100%" }}
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Product" />
                )}
                defaultValue={{ label: "Select Product", value: 0 }}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                style={{ marginTop: "10px", width: "100%" }}
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Product Instance" />
                )}
                defaultValue={{ label: "Select Product Instance", value: 0 }}
              />
            </Grid>

            <Grid item xs={4}>
              <Input />
            </Grid>
            <Grid item xs={4}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Label"
              />
            </Grid>
            <Grid item xs={4}>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{ width: "100px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
            </Grid>
            <Grid item xs={6}>
              <TextareaAutosize
                maxRows={20}
                minRows={20}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua."
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel>TEXT</TabPanel>
      </Tabs>
      <Button variant="contained"> Save</Button>
    </Container>
  );
}
