import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragment/CardBalance";
import CardGoal from "../components/Fragment/CardGoal";
import CardUpcomingBill from "../components/Fragment/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragment/CardRecentTransactions";
import CardStatistics from "../components/Fragment/CardStatistics";
import CardExpenseBreakdown from "../components/Fragment/CardExpenseBreakdown";
import {
  transactions,
  bills,
  balances,
  expensesStatistics,
  expensesBreakdowns
} from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  const [goalsData, setGoalsData] = useState(null);
  const { logout } = useContext(AuthContext);

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoalsData(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  console.log(goalsData);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12  gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            {goalsData && <CardGoal data={goalsData} />}
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistics data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Dashboard;