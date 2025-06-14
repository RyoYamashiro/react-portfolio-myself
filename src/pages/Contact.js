import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
function Contact(){
  return(
    <>
      <Title title="Contact" subtitle='Messages submitted through the form will be sent to my email address.Please ensure that "ryoyama.work01@gmail.com" is set to receive emails, as I will reply from this address.' />
      <ContactForm />
    </>
  );
}
export default Contact;
