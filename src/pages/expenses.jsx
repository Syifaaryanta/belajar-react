import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Element/AppSnackbar";
import CardWrapper from "../components/Fragment/CardExpenses";
import CircularProgress from '@mui/material/CircularProgress';

function ExpensesPage() {
  const [expensesData, setExpensesData] = useState([]);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expenseService();
      setExpensesData(data);
    } catch (err) {
      setSnackbar({ open: true,
        message: err.msg || "Gagal mengambil data expenses",
        severity: "error" 
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="mb-8">
          <h1 className="text-2xl text-gray-01">Expenses Comparison</h1>
        </div>

        <CardWrapper data={expensesData} />

        <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
      </MainLayout>
    </>
  );
}

export default ExpensesPage;
