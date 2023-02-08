import React from 'react';
import { useRef, useState } from 'react';
import {
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Typography,
} from '@mui/material';

import './style.css';

export default function App() {
  const inputRef = useRef('null');

  const [updated, setUpdated] = useState('');

  const handleClick = () => {
    setUpdated(inputRef.current.value);
  };

  function SaladCost(props) {
    return (
      '$' + (Math.round(Math.floor(props.weight) * 0.45 * 4) / 4).toFixed(2)
    );
  }

  return (
    <div>
      <Typography
        className="typography-class-header"
        variant="p"
        component="h1"
      >
        Zoot Salad Cost Calculator
      </Typography>

      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <OutlinedInput
          className="zoot-blue-outline"
          inputRef={inputRef}
          type="text"
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">oz</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            'aria-label': 'salad weight',
          }}
        />

        <FormHelperText id="outlined-weight-helper-text">
          Salad Weight
        </FormHelperText>

        <Button className="zoot-blue" variant="contained" onClick={handleClick}>
          Calculate
        </Button>

        <Typography className="typography-class" variant="p" component="p">
          Salad Price: <SaladCost weight={updated}></SaladCost>
        </Typography>
      </FormControl>
    </div>
  );
}
