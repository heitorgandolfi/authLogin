import { NavLink } from "react-router-dom";

import {
  Button,
  FormFieldWrapper,
  LoginForm,
  PageContainer,
  PageContent,
} from "./styles";

export const SignInPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <h3>Login to your account</h3>
        <LoginForm>
          <FormFieldWrapper>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </FormFieldWrapper>

          <FormFieldWrapper>
            <div>
              <label htmlFor="password">Password</label>
              <NavLink to="#">Forgot?</NavLink>
            </div>
            <input type="password" id="password" />
          </FormFieldWrapper>

          <Button type="submit">Login</Button>
        </LoginForm>

        <p>
          Don't have an account? <NavLink to="#">Sign up</NavLink>
        </p>
      </PageContent>
    </PageContainer>
  );
};
