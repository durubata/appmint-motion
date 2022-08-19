import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoMdSend } from 'react-icons/io';
import { useFormStore, useViewStore } from 'views-store';
import { SCRegistrationHeader, SCRegistrationBackButton, SCRegistrationForm, SCRegistrationFormBG, ScRegistrationHeaderTitle, SCRegistrationContainer } from './styles/registrationStyle';

const Registration = () => {
  const { setScreenItem } = useViewStore(state => state);
  const { formItems, setFormItems } = useFormStore(state => state);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (formItems) {
      setName(formItems.name);
      setEmail(formItems.email);
      setPhone(formItems.phone);
    }
  }, [formItems]);

  return (
    <SCRegistrationContainer>
      <SCRegistrationHeader>
        <SCRegistrationBackButton>
          <IoIosArrowBack onClick={() => setScreenItem('Welcome')} />
        </SCRegistrationBackButton>
        <ScRegistrationHeaderTitle>
          <span>Please fill out the form below to start chatting with the next available agent.</span>
        </ScRegistrationHeaderTitle>
      </SCRegistrationHeader>

      <SCRegistrationFormBG>
        <SCRegistrationForm>
          <form
            onSubmit={e => {
              e.preventDefault();
              setFormItems({ email, name, phone });
              setScreenItem('Chat');
            }}
          >
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12}>
                <TextField required id="name" label="Name" fullWidth value={name} onChange={e => setName(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="email" label="Email" type="email" fullWidth value={email} onChange={e => setEmail(e.target.value)} />
              </Grid>
              <Grid item xs={12}>
                <TextField required id="phone" label="Phone" type="tel" fullWidth value={phone} onChange={e => setPhone(e.target.value)} />
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
                <Button type="submit" variant="contained" style={{ width: '330px', fontWeight: 'bold', backgroundColor: '#03a84e', padding: '10px 0px' }} color="success" startIcon={<IoMdSend />} fullWidth>
                  Start Chat
                </Button>
              </Grid>
            </Grid>
          </form>
        </SCRegistrationForm>
      </SCRegistrationFormBG>
    </SCRegistrationContainer>
  );
};

export default Registration;
