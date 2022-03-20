import React, {useReducer, useState} from 'react';
import {Grid, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import {init, sendForm, send} from 'emailjs-com';
import {useForm} from 'react-hook-form';
import ClassNames from 'classnames';

import {contactReducer, initialState} from '../reducers/contactReducer';

const REQURED_VAL_MESSAGE = "入力必須となっております。";
const EMAIL_VAL_MESSAGE = "Emailアドレスの形式で入力ください。";
const MAXLENGTH_VAL_MESSAGE = "文字以内で入力ください";
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
    if((user_id != undefined) && (service_id != undefined) && (template_id != undefined)){
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
    <div className="contact-form-wrapper">
      <p className={classNameSendMessage}>{state.sendMessage}</p>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="名前(入力必須)" variant="outlined" fullWidth {...register("name", {required: REQURED_VAL_MESSAGE, maxLength: {value: 40, message: "40" + MAXLENGTH_VAL_MESSAGE}})}  />

              <p className="error-message">{errors.name && errors.name.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="メールアドレス(入力必須)" variant="outlined" fullWidth {...register("mail", {required: REQURED_VAL_MESSAGE, pattern: {value: /^\S+@\S+$/i, message: EMAIL_VAL_MESSAGE}, maxLength: {value: 80, message: "80" + MAXLENGTH_VAL_MESSAGE}})}  />

              <p className="error-message">{errors.mail && errors.mail.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="件名(入力必須)" variant="outlined" fullWidth {...register("title", {required: REQURED_VAL_MESSAGE, maxLength: {value: 40, message: "40" + MAXLENGTH_VAL_MESSAGE}})} />
              <p className="error-message">{errors.title && errors.title.message}</p>
            </div>


            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="内容(入力必須)" variant="outlined" fullWidth multiline rows={7} {...register("message", {required: REQURED_VAL_MESSAGE, maxLength: {value: 500, message: "500" + MAXLENGTH_VAL_MESSAGE}})}  />
              <p className="error-message">{errors.message && errors.message.message}</p>
            </div>
            <Button className={classes.main_button} variant="contained" size="large" type="submit">メール送信</Button>

          </form>
    </div>
  )

}

export default ContactForm;
