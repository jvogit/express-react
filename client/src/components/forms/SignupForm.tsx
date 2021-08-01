import * as React from 'react';
import { Formik, Form, Field } from "formik";
import { Button, FormControl, FormLabel, Input, FormErrorMessage, Checkbox } from '@chakra-ui/react';
import * as Yup from 'yup';

const SignupForm: React.FC<{}> = () => {

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters long')
      .max(20, 'Username must be at most 20 characters long')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password")], 'Passwords do not match')
      .required('Required'),
    termsAndConditions: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions')
  });

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
        termsAndConditions: false
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log("submitted");
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="username">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.username && form.touched.username} isRequired>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input {...field} id="username" placeholder="username" />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="email">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input {...field} id="email" placeholder="email" />
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="password">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.password && form.touched.password} isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input {...field} type="password" id="password" placeholder="password" />
                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field name="passwordConfirm">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.passwordConfirm && form.touched.passwordConfirm} isRequired>
                <FormLabel htmlFor="passwordConfirm">Confirm Password</FormLabel>
                <Input {...field} type="password" id="passwordConfirm" placeholder="passwordConfirm" />
                <FormErrorMessage>{form.errors.passwordConfirm}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field type="checkbox" name="termsAndConditions">
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.termsAndConditions && form.touched.termsAndConditions} isRequired>
                <FormLabel htmlFor="termsAndConditions">Terms and Conditions</FormLabel>
                <Checkbox {...field} id="termsAndConditions">I agree to the Terms and Conditions</Checkbox>
                <FormErrorMessage>{form.errors.termsAndConditions}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={6}
            isLoading={isSubmitting}
            type="submit"
          >
            Create Account
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;