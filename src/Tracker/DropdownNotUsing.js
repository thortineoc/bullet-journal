import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
function Dropdown({num}) {
    const classes = useStyles();
    const [month, setMonth] = useState();
    const handleMonthSetting = () => {
        if(month === (1 || 3 || 5 || 7 || 8 || 10 || 12)) {
            console.log("31");
            num = 31;
            return 31;
        } else if(month === 2) {
            console.log("29");
            num = 29;
        } else {
            console.log("30");
            num = 30
        }
    }
    return (
        <>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={month}
                onChange={e => setMonth(e.target.value)}
                >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
                </Select>
            </FormControl>
            <Button onClick={handleMonthSetting}>Confirm</Button>
        </>
    )
}

export default Dropdown;

