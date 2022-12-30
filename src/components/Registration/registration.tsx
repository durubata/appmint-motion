import { Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoMdSend } from 'react-icons/io';
import { SCRegistrationHeader, SCRegistrationBackButton, SCRegistrationForm, SCRegistrationFormBG, ScRegistrationHeaderTitle, SCRegistrationContainer } from './styles/registrationStyle';
import { appConfig } from 'config';
import { useChatStore } from 'chat-store';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const { setFormItems, setStateItem } = useChatStore(state => ({ setStateItem: state.setStateItem, setFormItems: state.setFormItems }));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState();

  const navigate = useNavigate()

  const startChat = async (e) => {
    e.preventDefault();
    setError(null)
    setFormItems({ email, name, phone });

    const authURL = `${appConfig.appengine.host}/user/guest/auth`
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        orgid: appConfig.siteId,
      },
      body: JSON.stringify({ email, name, phone })
    };
    const authResponse: any = await fetch(authURL, settings);
    if ([200, 201, 202].includes(authResponse.status)) {
      const response = await authResponse.json();
      setStateItem({ token: response.token, user: response.guest })
      navigate('/chat');
    } else {
      console.log(authResponse)
      setError(authResponse.statusText)
    }
  }

  return (
    <SCRegistrationContainer>
      <SCRegistrationHeader>
        <SCRegistrationBackButton>
          <IoIosArrowBack onClick={() => navigate('/')} />
        </SCRegistrationBackButton>
        <ScRegistrationHeaderTitle>
          <span>Please fill out the form below to start chatting with the next available agent.</span>
        </ScRegistrationHeaderTitle>
      </SCRegistrationHeader>

      <SCRegistrationFormBG>
        <SCRegistrationForm>
          <form onSubmit={startChat}   >
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
                {error && <div style={{ color: 'red' }}>{error}</div>}
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
