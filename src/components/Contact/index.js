import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './ComponentsElements';

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Calvin</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Send me a message and lets get in Contact!</FormH1>
              <FormLabel htmlFor='for'>Name</FormLabel>
              <FormInput type='Name' required />
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Response</FormLabel>
              <FormInput type='Response' required />
              <FormButton type='submit'>Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;