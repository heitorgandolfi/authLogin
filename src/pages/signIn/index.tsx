import { NavLink } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import googleIcon from "../../assets/google.svg";
import { auth, provider } from "../../firebase/config";
import {
  Button,
  FormFieldWrapper,
  LoginForm,
  PageContainer,
  PageContent,
  ProviderAuthButton,
} from "./styles";
import { LoginUseCase } from "../../useCases/signIn";

export const SignInPage = () => {
  const handleUserLoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      const userEmail = data.user?.email;

      localStorage.setItem("userEmail", JSON.stringify(userEmail));
      LoginUseCase.execute();
    });
  };

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

          <Button disabled={true} type="submit">Login</Button>
        </LoginForm>

        <ProviderAuthButton onClick={handleUserLoginWithGoogle}>
          <img src={googleIcon} alt="Google icon" />
          Sign in with Google
        </ProviderAuthButton>

        <p>
          Don't have an account? <NavLink to="#">Sign up</NavLink>
        </p>
      </PageContent>
    </PageContainer>
  );
};
