import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragment/FormSignUp";
import { registerService } from "../services/authService";
import AppSnackbar from "../components/Element/AppSnackbar";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      await registerService(name, email, password);
      setSnackbar({ open: true, message: "Registrasi berhasil! Silakan login.", severity: "success" });
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setSnackbar({ open: true, message: err.msg || "Registrasi gagal", severity: "error" });
    }
  };

  return (
    <AuthLayout>
      <FormSignUp onSubmit={handleRegister} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignUpPage;
