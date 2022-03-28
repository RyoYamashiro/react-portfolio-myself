import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
function Contact(){
  return(
    <>
      <Title title="Contact" subtitle="入力いただいた内容でリョウヤマのメールアドレスへ通知が行きます。「ryoyama.work01@gmail.com」のアドレスで返信いたしますので受信可能にご設定ください。（Twitterでのご連絡も歓迎しております。）" />
      <ContactForm />
    </>
  );
}
export default Contact;
