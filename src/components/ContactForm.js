import React, {useReducer, useState} from 'react';
import {Grid, TextField, Button} from '@material-ui/core';

import {init, sendForm, send} from 'emailjs-com';
import {useForm} from 'react-hook-form';

const REQURED_VAL_MESSAGE = "入力必須となっております。";



const initialState = {
  name: '',
  mail: '',
  title: '',
  message: ''
};
const reducer = (state, action) => {
  switch(action.type){
    case 'name' :
      return {...state, name: action.payload};
    case 'mail' :
      return {...state, mail: action.payload};
    case 'title' :
      return {...state, title: action.payload};
    case 'message' :
      return {...state, message: action.payload};
  }
}


const ContactForm = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [sendState, setSendState] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm();

  const sendEmail = (name, mail, title, message) => {

    const user_id = process.env.REACT_APP_USER_ID;
    const service_id = process.env.REACT_APP_SERVICE_ID;
    const template_id = process.env.REACT_APP_TEMPLATE_ID;
    if((user_id != undefined) && (service_id != undefined) && (template_id != undefined)){
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
        console.log("seccess to send email");

      }).then(() => {
        setSendState(true);
        const removeSendMessage = () => setSendState(false);
        setTimeout(removeSendMessage, 3000);

      })
     }
  }

  const handleChangeText = (e) => {
    dispatch({type: e.target.name , payload: e.target.value});
  }


  const onSubmit = (event) => {
    console.log("push submit");
    sendEmail(event.name, event.mail, event.title, formState.message);
  }
  return (
    <div className="contact-form-wrapper">
      {sendState === true && <p>送ったよ</p>}
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="名前" variant="outlined" fullWidth onChange={handleChangeText} {...register("name", {required: REQURED_VAL_MESSAGE})}  />

              <p className="error-message">{errors.name && errors.name.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="メールアドレス" variant="outlined" fullWidth onChange={handleChangeText} {...register("mail", {required: REQURED_VAL_MESSAGE})}  />

              <p className="error-message">{errors.mail && errors.mail.message}</p>
            </div>

            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="件名" variant="outlined" fullWidth onChange={handleChangeText} {...register("title", {required: REQURED_VAL_MESSAGE})} />
              <p className="error-message">{errors.title && errors.title.message}</p>
            </div>


            <div className="textfield-wrapper">
              <TextField id="outlined-basic" label="内容" variant="outlined" fullWidth {...register("message", {required: REQURED_VAL_MESSAGE})}  />
              <p className="error-message">{errors.message && errors.message.message}</p>
            </div>
            <Button color="primary" variant="contained" size="large" type="submit">メール送信</Button>

          </form>
    </div>
  )

}

export default ContactForm;
