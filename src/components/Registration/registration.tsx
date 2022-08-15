import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import { IoIosArrowBack, IoMdSend } from 'react-icons/io';
import { useViewStore } from 'views-store';
import { SCRegistrationHeader, SCRegistrationBackButton, SCRegistrationForm, SCRegistrationFormBG, ScRegistrationHeaderTitle } from './styles/registrationStyle';

const Registration = () => {
  const { setStateItem } = useViewStore(state => state);
  return (
    <div>
      <SCRegistrationHeader>
        <SCRegistrationBackButton>
          <IoIosArrowBack onClick={() => setStateItem('Welcome')} />
        </SCRegistrationBackButton>
        <ScRegistrationHeaderTitle>
          <span>Please fill out the form below to start chatting with the next available agent.</span>
        </ScRegistrationHeaderTitle>
      </SCRegistrationHeader>

      <SCRegistrationFormBG>
        <SCRegistrationForm>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <TextField required id="name" label="Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField required id="email" label="Email" type="email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField required id="phone" label="Phone" type="tel" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <FormControl>
                <FormLabel id="help">* How can we help you?</FormLabel>
                <RadioGroup aria-labelledby="help" defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Free Chat Widget" />
                  <FormControlLabel value="male" control={<Radio />} label="Remove 'We're by bata.com'" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item style={{ paddingBottom: '20px' }}>
              <Button variant="contained" style={{ width: '330px', fontWeight: 'bold', backgroundColor: '#03a84e', padding: '10px 0px' }} color="success" startIcon={<IoMdSend />} fullWidth>
                Start Chat
              </Button>
            </Grid>
          </Grid>
        </SCRegistrationForm>
      </SCRegistrationFormBG>
    </div>
  );
};

export default Registration;
