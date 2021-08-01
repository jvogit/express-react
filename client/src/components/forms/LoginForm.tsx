import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, Form, Formik } from "formik";
import * as React from 'react';

const LoginForm: React.FC<{}> = () => {

  return (
    <Formik
      initialValues={{
        usernameorEmail: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        console.log("submitted");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="usernameOrEmail">
            {({ field, form }: any) => (
              <FormControl isRequired>
                <FormLabel htmlFor="usernameOrEmail">Username or Email</FormLabel>
                <Input {...field} id="usernameOrEmail" placeholder="usernameOrEmail" />
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: any) => (
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input {...field} type="password" id="password" placeholder="password" />
              </FormControl>
            )}
          </Field>
          <Button
            mt={6}
            isLoading={isSubmitting}
            type="submit"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;