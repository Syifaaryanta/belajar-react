import React from 'react';
import Card from '../Element/CardWrapper';
import Icon from '../Element/Icon';
import CircularProgress from '@mui/material/CircularProgress';

function CardExpenses(props) {
  const { data } = props;

  const iconComponents = {
    housing: <Icon.House />,
    food: <Icon.Food />,
    transportation: <Icon.Transport />,
    entertainment: <Icon.Gamepad />,
    shopping: <Icon.Shopping />,
    others: <Icon.Other />,
  };

  const getIcon = (category) => {
    return iconComponents[category?.toLowerCase()] || <Icon.Other />;
  };

  const getPercentageColor = (trend) => {
    if (!trend) return "text-gray-03";
    return trend === "up" ? "text-red-500" : "text-green-500";
  };

  const formatPercentage = (percentage, trend) => {
    if (!percentage) return { value: "0%", arrow: "" };
    return {
      value: `${percentage}%`,
      arrow: trend === "up" ? "↑" : "↓"
    };
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-96 text-primary">
        <CircularProgress color="inherit" size={50} />
        <div className="mt-4">Loading Data</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((expense, index) => (
        <div key={index}>

          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-gray-200 text-gray-02 rounded-lg">
                {getIcon(expense.category)}
              </div>
              <div>
                <h3 className="text-s font-bold text-gray-03 capitalize mb-1">{expense.category}</h3>
                <p className="text-2xl font-bold text-black-01">${expense.amount}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-1 mb-1">
                <span className="text-s font-bold text-gray-03">{formatPercentage(expense.percentage, expense.trend).value}</span>
                <span className={`text-s font-bold ${getPercentageColor(expense.trend)}`}>
                  {formatPercentage(expense.percentage, expense.trend).arrow}
                </span>
              </div>
              <div className="text-s text-gray-03 whitespace-nowrap">
                Compare to the last month
              </div>
            </div>
          </div>

          {expense.detail && expense.detail.length > 0 && (
            <div className="bg-white rounded-lg p-5 shadow">
              <div>
                {expense.detail.map((item, idx) => (
                  <div key={idx}>
                    <div className={`flex justify-between items-center py-3 ${idx < expense.detail.length - 1 ? 'border-b border-gray-200' : ''}`}>
                      <span className="text-s font-bold text-gray-02">{item.item}</span>
                      <div className="text-right">
                        <div className="text-s font-bold text-gray-01">${item.amount}</div>
                        {item.date && (
                          <div className="text-s text-gray-03">{item.date}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CardExpenses;
