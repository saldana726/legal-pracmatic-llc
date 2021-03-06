import React, { useState } from 'react';
import { navigate, FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import emailjs from 'emailjs-com';

// material ui components
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// components

// styles
import './section-contact.styles.scss';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#252d40',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#ffffff',
      '& fieldset': {
        borderColor: '#a8abb3',
      },
      '&:hover fieldset': {
        borderColor: '#252d40',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#252d40',
      },
    },
  },
})(TextField);

const SectionContact = () => {
  const [state, setState] = useState({});
  const intl = useIntl();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm('service_qwtzeqo', 'template_1tbmm5q', event.target, 'user_FdSyEBe7HOJF5AqbK6tmU')
      .then(
        (result) => {
          navigate(event.target.getAttribute('action'));
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        (error) => {
          // eslint-disable-next-line no-alert
          alert(error.text);
        }
      );
  };

  return (
    <div
      className="section-contact"
      style={{
        backgroundImage: `url('https://i.ibb.co/HqKQnn2/contact-banner.png')`,
      }}
    >
      <Container>
        <Grid className="container">
          <Grid item xs={12} md={5}>
            <form onSubmit={handleSubmit} action="/thank-you/" className="contact-form">
              <input type="hidden" name="contact_number" />
              <Grid item xs className="form-row">
                <CssTextField
                  required
                  fullWidth
                  className="margin-bottom"
                  id="outlined-basic"
                  label={intl.formatMessage({ id: 'firstName_input' })}
                  type="text"
                  name="firstName"
                  variant="outlined"
                  onBlur={handleChange}
                />
                <CssTextField
                  required
                  fullWidth
                  className="margin-bottom"
                  id="outlined-basic"
                  label={intl.formatMessage({ id: 'lastName_input' })}
                  type="text"
                  name="lastName"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs className="form-row">
                <CssTextField
                  required
                  fullWidth
                  className="margin-bottom"
                  id="outlined-basic"
                  label={intl.formatMessage({ id: 'email_input' })}
                  type="email"
                  name="email"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Grid item xs className="form-row">
                <CssTextField
                  required
                  fullWidth
                  className="margin-bottom"
                  id="outlined-basic"
                  label={intl.formatMessage({ id: 'phoneNumber_input' })}
                  type="text"
                  name="phoneNumber"
                  variant="outlined"
                  onBlur={handleChange}
                />
              </Grid>
              <Button type="submit" size="large">
              <FormattedMessage id="submit_button" />
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={5}>
            <div className="message">
              <h2><FormattedMessage id="heading_contactPage" /></h2>
              <div>
                <p>
                <FormattedMessage id="message_contactDetails" />
                </p>
                <div className="contact-details">
                  <span className="bold"><FormattedMessage id="email_contactDetails" /></span>
                  <span>contact@legalpracmatic.com</span>
                </div>
                <div className="contact-details">
                  <span className="bold"><FormattedMessage id="phone_contactDetails" /></span>
                  <span>+1 (970) 306 - 6650</span>
                </div>
                <div className="contact-details">
                  <span className="bold">Whatsapp:</span>
                  <span>+57 (318) 753 - 1805</span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SectionContact;
