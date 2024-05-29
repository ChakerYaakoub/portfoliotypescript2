import { useRef } from "react";
import { UserData } from "../../../models/UserData";
import emailjs from 'emailjs-com';

export interface ContactUsProps { 
  data: UserData;
}

export const useContactUs = (props: ContactUsProps) => {
  const form = useRef<HTMLFormElement>(null);
  const { data } = props;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(form.current as HTMLFormElement);
    const fromName = formData.get('from_name') as string;
    const fromEmail = formData.get('from_email') as string;
    const fromTel = formData.get('from_tel') as string;
    const message = formData.get('message') as string;

  console.log('fromName:', data.userInfo[0].name);

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID!, process.env.REACT_APP_EMAILJS_TEMPLATE_ID!, {
      from_name: fromName,
      to_name: data.userInfo[0].name,
      to_email: data.contactUs[0].email,
      from_email: fromEmail,
      from_tel: fromTel,
      message: message,
    }, process.env.REACT_APP_EMAILJS_USER_ID!)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Error sending email');
      });
  };

  return { ...props, sendEmail, form };
};
