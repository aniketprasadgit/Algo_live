import * as React from "react";
import Box from "@mui/material/Box";
import './stratSingle.css'

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  HelperText,
} from "@windmill/react-ui";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { getAllInstruments } from "../../action/accountsAction";

import Select from "@mui/material/Select";

import MenuItem from "@mui/material/MenuItem";

import Grid from "@mui/material/Grid";
export default function StratSingle({ values, setValues }) {
  const {
    name,
    entryTime,
    exitTime,
    direction,
    timeFrame,
    orderType,
    quantity,
    stopLoss,
    target,
    instrument1,
    period1,
    multiplier1,
    candleParam1,
    instrument2,
    period2,
    multiplier2,
    candleParam2,
    indicator1,
    indicator2,
    condition,
    targetunit,
    stopLossunit,
    active,
    loading,
    error,
    message,
  } = values;

  const [instrument1List, setInstrument1List] = React.useState([]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    getAllInstruments()
      .then((res) => {
        setInstrument1List(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ width: "100%", background: "black",height:'100vh'}} className="mainBox">
      <div>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Label className="mt-2">
              <span className="required">Strategy Name</span>
              <Input
                className="mt-2"
                placeholder="John Doe"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Label>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Entry Time*</span>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}  className="selectMenu">
                  <TimePicker
                    renderInput={(params) => <TextField {...params} />}
                    value={entryTime}
                    onChange={(newValue) => {
                      setValues({ ...values, entryTime: newValue });
                    }}
                    minTime={new Date(0, 0, 0, 9, 15)}
                    maxTime={new Date(0, 0, 0, 15, 30)}
                  />
                </Stack>
              </LocalizationProvider>
            </Label>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Exit Time*</span>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}  className="selectMenu">
                  <TimePicker
                    renderInput={(params) => <TextField {...params} />}
                    value={exitTime}
                    onChange={(newValue) => {
                      setValues({ ...values, exitTime: newValue });
                    }}
                    minTime={new Date(0, 0, 0, 9, 15)}
                    maxTime={new Date(0, 0, 0, 15, 30)}
                  />
                </Stack>
              </LocalizationProvider>
            </Label>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Direction</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Direction"
                value={direction}
                name="direction"
                onChange={handleChange}
                label="Direction"
              >
                <MenuItem value="BUY">BUY</MenuItem>
                <MenuItem value="SELL">SELL</MenuItem>
                <MenuItem value="BOTH">BOTH</MenuItem>
              </Select>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Timeframe</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Timeframe"
                value={timeFrame}
                name="timeFrame"
                onChange={handleChange}
                label="Direction"
              >
                <MenuItem value="1">1 min</MenuItem>
                <MenuItem value="5">5 min</MenuItem>
                <MenuItem value="15">15 min</MenuItem>
                <MenuItem value="30">30 min</MenuItem>
                <MenuItem value="60">60 min</MenuItem>
              </Select>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Instrument(for analysis)</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={instrument1}
                placeholder="Select Instrument1"
                name="instrument1"
                onChange={handleChange}
                label="Direction"
              >
                <MenuItem value="NIFTYMARFUT">NIFTYMARFUT</MenuItem>
                <MenuItem value="BANKNIFTYMARFUT">BANKNIFTYMARFUT</MenuItem>
                <MenuItem value="RELIANCE">RELIANCE</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Symbol to Trade</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={instrument2}
                placeholder="Select Instrument2"
                name="instrument2"
                onChange={handleChange}
                label="Instrument2"
              >
                <MenuItem value="NIFTYMARFUT">NIFTYMARFUT</MenuItem>
                <MenuItem value="BANKNIFTYMARFUT">BANKNIFTYMARFUT</MenuItem>
                <MenuItem value="RELIANCE">RELIANCE</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Indicator 1</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator1"
                value={indicator1}
                name="indicator1"
                onChange={handleChange}
                label="Indicator1"
              >
                <MenuItem value="supertrend">supertrend</MenuItem>
                <MenuItem value="rsi">rsi</MenuItem>
                <MenuItem value="sma">sma</MenuItem>
              </Select>
            </div>
          </Grid>

          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Period 1</span>
              <Input
                className="mt-2 selectMenu"
                placeholder="14"
                name="period1"
                value={period1}
                onChange={handleChange}
              />
            </Label>
          </Grid>

          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Multiplier 1</span>
              <Input
                className="mt-2 selectMenu"
                placeholder="0"
                name="multiplier1"
                value={multiplier1}
                onChange={handleChange}
              />
            </Label>
          </Grid>

          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Candle param 1</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={candleParam1}
                name="candleParam1"
                onChange={handleChange}
                label="candleParam1"
              >
                <MenuItem value="close">close</MenuItem>
                <MenuItem value="high">high</MenuItem>
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="open">open</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Indicator 2</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={indicator2}
                name="indicator2"
                onChange={handleChange}
                label="Indicator2"
              >
                <MenuItem value="candle">candle</MenuItem>
                <MenuItem value="supertrend">supertrend</MenuItem>
                <MenuItem value="rsi">rsi</MenuItem>
                <MenuItem value="sma">sma</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Period 2</span>
              <Input 
                className="mt-2 selectMenu"
                placeholder="14"
                name="period2"
                value={period2}
                onChange={handleChange}
              />
            </Label>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2 ">
              <span className="required">Multiplier 2</span>
              <Input
                className="mt-2 selectMenu"
                placeholder="0"
                name="multiplier2"
                value={multiplier2}
                onChange={handleChange}
              />
            </Label>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Candle param 2</span>
              </Label>

              <Select className="selectMenu"

                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={candleParam2}
                name="candleParam2"
                onChange={handleChange}
                label="candleParam2"
              >
                <MenuItem value="close">close</MenuItem>
                <MenuItem value="high">high</MenuItem>
                <MenuItem value="low">low</MenuItem>
                <MenuItem value="open">open</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Condition</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={condition}
                name="condition"
                onChange={handleChange}
                label="condition"
              >
                <MenuItem value="crossabove">cross above</MenuItem>
                <MenuItem value="crossbelow">cross below</MenuItem>
                <MenuItem value="crossover">cross over</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Order Type</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={orderType}
                name="orderType"
                onChange={handleChange}
                label="orderType"
              >
                <MenuItem value="MIS">MIS</MenuItem>
                <MenuItem value="NRML">NRML</MenuItem>
                <MenuItem value="CNC">CNC</MenuItem>
              </Select>
            </div>
          </Grid>

          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Target</span>
              <Input 
                className="mt-2 selectMenu"
                placeholder="0"
                name="target"
                value={target}
                onChange={handleChange}
              />
            </Label>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Target unit</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={targetunit}
                name="targetunit"
                onChange={handleChange}
                label="targetunit"
              >
                <MenuItem value="%">%</MenuItem>
                <MenuItem value="Rs">points</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Stoploss</span>
              <Input 
                className="mt-2 selectMenu"
                placeholder="0"
                name="stopLoss"
                value={stopLoss}
                onChange={handleChange}
              />
            </Label>
          </Grid>
          <Grid item xs={3}>
            <div className="form-group">
              <Label className="mt-2">
                <span className="required">Stoploss unit</span>
              </Label>

              <Select
                className="selectMenu"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                placeholder="Select Indicator2"
                value={stopLossunit}
                name="stopLossunit"
                onChange={handleChange}
                label="stopLossunit"
              >
                <MenuItem value="%">%</MenuItem>
                <MenuItem value="Rs">points</MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Label className="mt-2">
              <span className="required">Quantity</span>
              <Input
                className="mt-2 selectMenu"
                placeholder="1"
                name="quantity"
                value={quantity}
                onChange={handleChange}
              />
            </Label>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
