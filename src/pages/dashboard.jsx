import React from "react";
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
  goals,
  expensesStatistics,
  expensesBreakdowns
} from "../data";

function Dashboard() {
  console.log(transactions);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12  gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals} />
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