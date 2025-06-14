import React, {useReducer} from 'react';
import {TextField, Button} from '@mui/material';
import {makeStyles} from '@material-ui/core/styles';

import {init, send} from 'emailjs-com';
import {useForm} from 'react-hook-form';
import ClassNames from 'classnames';

import {contactReducer, initialState} from '../reducers/contactReducer';

import styled from 'styled-components';
import {media, space_l, space_s, font_size_l, brown, pink} from '../utils/styledComponents';



const REQURED_VAL_MESSAGE = "This field is required to submit the form.";
const EMAIL_VAL_MESSAGE = "Please make sure to enter your email address in the correct format.";
const MAXLENGTH_VAL_MESSAGE = "characters max.";
const useStyles = makeStyles ({
  main_button: {
    background: '#ff8af2',
    color: '#fff',
    float: 'right',
    transition: '.3s',
    margin: 0,
    '&:hover':{
      background: '#f283e5',
      transition: '.3s',
      transform: 'translateY(-5px)',
    }
  }
});

const ContactFormContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  .contact-form{
    padding-top: ${space_s};
    width: 100%;
    overflow: hidden;
  }
  .textfield-wrapper{
  margin-bottom: ${space_l};
  }
  .error-message{
  color: red;
  height: 1em;
  ${media.handheld`
    font-size: 14px;
  `}
  }
`;
const SendMessage = styled.p`
  position: fixed;
  transition: 0.5s;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: ${brown};
  text-align: center;
  font-size: ${font_size_l};
  color: #fff;
  z-index: 3;
  transform: translateY(-100%);
  ${media.handheld`
    font-size: 14px;
  `}
  &.active{
    transform: translateY(0%);
  }
  &.success{
    background: ${pink};
  }
`;


const ContactForm = () => {

  const [state, dispatch] = useReducer(contactReducer, initialState);

  const {register, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  });

  const classes = useStyles();

  const classNameSendMessage = ClassNames({
    'send-message': true,
    'active': state.sendStatus !== 0,
    'success': state.sendStatus === 2
  });

  const sendEmail = (name, mail, title, message) => {

    const user_id = process.env.REACT_APP_USER_ID;
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    if((user_id !== undefined) && (service_id !== undefined) && (template_id !== undefined)){
      dispatch({type: 'sending'})
      init(user_id);
      const template_param = {
        to_name: name,
        email: mail,
        title: title,
        message: message
      };
      console.log(template_param);
      send(service_id, template_id, template_param).then(() => {

        console.log(template_param);
        console.log('seccess to send email');
        dispatch({type: 'done'});

      }).then(() => {
        const removeSendMessage = () => dispatch({type: 'finish'});
        setTimeout(removeSendMessage, 3000);
      })
     }
  }



  const onSubmit = (event) => {
    console.log('push submit');
    sendEmail(event.name, event.mail, event.title, event.message);
  }
  return (
    <ContactFormContainer>
      <SendMessage className={classNameSendMessage}>{state.sendMessage}</SendMessage>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="Name (required)" variant="outlined" fullWidth {...register("name", {required: REQURED_VAL_MESSAGE, maxLength: {value: 40, message: "40" + MAXLENGTH_VAL_MESSAGE}})}  />

              <p className="error-message">{errors.name && errors.name.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="Email Address (required)" variant="outlined" fullWidth {...register("mail", {required: REQURED_VAL_MESSAGE, pattern: {value: /^\S+@\S+$/i, message: EMAIL_VAL_MESSAGE}, maxLength: {value: 80, message: "80" + MAXLENGTH_VAL_MESSAGE}})}  />

              <p className="error-message">{errors.mail && errors.mail.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="Subject (required)" variant="outlined" fullWidth {...register("title", {required: REQURED_VAL_MESSAGE, maxLength: {value: 40, message: "40" + MAXLENGTH_VAL_MESSAGE}})} />
              <p className="error-message">{errors.title && errors.title.message}</p>
            </div>


            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="Message (required)" variant="outlined" fullWidth multiline rows={7} {...register("message", {required: REQURED_VAL_MESSAGE, maxLength: {value: 500, message: "500" + MAXLENGTH_VAL_MESSAGE}})}  />
              <p className="error-message">{errors.message && errors.message.message}</p>
            </div>
            <Button className={classes.main_button} variant="contained" size="large" type="submit">メール送信</Button>

          </form>
    </ContactFormContainer>
  )

}

export default ContactForm;
