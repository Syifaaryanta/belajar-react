import React from "react";
import AuthLayout from "../Layouts/AuthLayout";

function signIn() {
    return (
        <AuthLayout>
            <FormSignIn />
        </AuthLayout>
    );
}

export default signIn;