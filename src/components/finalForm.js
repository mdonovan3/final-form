import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Container from '@mui/material/Container';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

const showResults = v => {
  window.alert(JSON.stringify(v, undefined, 2));
};

const options = [
  { label: 'Beaulieu Vineyards GDL Cabernet', id: 1, story: 'asdfaf' },
  { label: "Cambria Julia's Vineyard Pinot Noir", id: 2, story: 'hgjfgjhgf' },
  { label: '"Desiderio" Avignonesi', id: 3, story: 'poiupoipoi' },
  { label: 'Erath Pinot Gris', id: 4, story: ',mnmyttrr' },
  { label: 'Foris Fly Over Red', id: 5, story: 'wqetynmn' }
];

const required = value => (value ? undefined : 'Required');

export default function FinalForm(props) {
  const theme = useTheme();
  const [selectedProduct, setSelectedProduct] = useState({
    label: 'Nothing',
    id: 0,
    story: 'nope'
  });
  return (
    <Container maxWidth="xl">
      <h1>Final Form</h1>
      <Autocomplete
        autoFocus
        sx={{ m: 2 }}
        options={options}
        onChange={(e, v) => {
          console.log(e);
          console.log(v);
          setSelectedProduct(options[e.target.dataset.optionIndex]);
        }}
        renderInput={params => (
          <TextField {...params} label="Product Instance" autoFocus />
        )}
      />
      <Form onSubmit={showResults}>
        {({ handleSubmit, values, submitting }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup row>
              <Field name="productName" validate={required}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <FormControl sx={{ p: 2 }}>
                      <InputLabel htmlFor="my-input">ProductName</InputLabel>
                      <Input
                        {...input}
                        id="lastName"
                        aria-describedby="my-helper-text"
                        value={
                          typeof selectedProduct !== undefined
                            ? selectedProduct.story
                            : ''
                        }
                        onChange={e => {
                          let sp = selectedProduct;
                          sp.story = e.target.value;
                          console.log(e.target.value);
                          setSelectedProduct(sp);
                        }}
                      />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                  </div>
                )}
              </Field>
              <Field name="productInstanceName" validate={required}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <FormControl sx={{ p: 2 }}>
                      <InputLabel htmlFor="my-input">Last Name</InputLabel>
                      <Input
                        {...input}
                        id="lastName"
                        aria-describedby="my-helper-text"
                      />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                  </div>
                )}
              </Field>
              {/* <Field
                name="email"
                placeholder="Email"
                validate={required}
                whatever="whatever"
              >
                {({ input, meta, placeholder }) => (
                  <div>
                    <FormLabel>Email</FormLabel>
                    <Input {...input} placeholder={placeholder} />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field> */}
              <Field name="category" validate={required}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <FormControl sx={{ p: 2, minWidth: 150 }}>
                      <InputLabel htmlFor="my-input">Category</InputLabel>
                      <Select
                        {...input}
                        id="category"
                        aria-describedby="my-helper-text"
                      >
                        <MenuItem value={1}>Cat 1</MenuItem>
                        <MenuItem value={2}>Cat 2</MenuItem>
                        <MenuItem value={3}>Cat 3</MenuItem>
                      </Select>
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                  </div>
                )}
              </Field>
              <Field name="rating" validate={required}>
                {({ input, meta, placeholder }) => (
                  <div>
                    <FormControl sx={{ p: 2, minWidth: 150 }}>
                      <Typography id="input-slider" gutterBottom>
                        Rating
                      </Typography>
                      <Slider
                        {...input}
                        id="rating"
                        defaultValue={50}
                        aria-describedby="my-helper-text"
                        step={5}
                      />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                  </div>
                )}
              </Field>
            </FormGroup>
            {/* <Field
              name="productSelect"
              placeholder="Select Product"
              whatever="whatever"
            >
              {({ input, meta, placeholder, handleSubmit }) => (
                <div>
                  <Autocomplete
                    {...input}
                    style={{ marginTop: '10px', width: '100%' }}
                    disablePortal
                    name="productSelect"
                    id="combo-box-demo"
                    options={options}
                    onChange={(event, value) => input.onChange(event, value)}
                    sx={{ width: 300 }}
                    renderInput={params => (
                      <TextField {...params} label="Product" />
                    )}
                    defaultValue={{ label: 'Select Product', value: 0 }}
                  />
                </div>
              )}
            </Field> */}
            <Button
              variant="contained"
              type="submit"
              disabled={submitting}
              color="primary"
            >
              Submit
            </Button>
            <pre>{JSON.stringify(values, undefined, 2)}</pre>
          </form>
        )}
      </Form>
    </Container>
  );
}
