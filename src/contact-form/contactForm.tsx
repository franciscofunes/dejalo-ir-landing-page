import { ReactNode } from "react";

type IContactFormProps = {
  name: string;
  email: string;
  message: string;
  button: ReactNode;
};

const ContactForm = (props: IContactFormProps) => (
  <form name="contact" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
    <p>
      <input type="text" name="firstname" id="firstname" />
      <label htmlFor="yourname">{props.name}</label> <br />
      <input type="text" name="name" id="yourname" />
    </p>
    <p>
      <label htmlFor="youremail">{props.email}</label> <br />
      <input type="email" name="email" id="youremail" />
    </p>
    <p>
      <label htmlFor="yourmessage">{props.message}</label> <br />
      <textarea name="message" id="yourmessage"></textarea>
    </p>
    <p>
      {props.button}
    </p>
  </form>
);

export { ContactForm };
