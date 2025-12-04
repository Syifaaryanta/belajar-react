import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragment/FormSignIn";

function SignInPage() {
  return (
    <AuthLayout>
      <FormSignIn />
    </AuthLayout>
  );
}

export default SignInPage;
