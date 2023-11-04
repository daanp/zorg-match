import React from "react";
import { CareRequest } from "@zorg-match/graphql-codegen-react";

const Calendar = ({ careRequests }: { careRequests: CareRequest[] }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const weeksArray = [];
  let currentWeek = [];
  const dayOfWeek = firstDayOfMonth.getDay();

  for (let i = 0; i < dayOfWeek; i++) {
    currentWeek.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeksArray.push([...currentWeek]);
      currentWeek = [];
    }
  }

  return (
    <div>
      <div className="flex flex-col">
        {weeksArray.map((week) => {
          return <div className="flex flex-row">{
            week.map((day) => (
              <div key={day} className="w-full min-h-[150px] p-2 border">
                <div className="font-semibold">{day}</div>
                <ul>
                  {careRequests
                    .filter((request) => {
                      const requestDate = new Date(request.start);
                      return (
                        requestDate.getMonth() === currentMonth &&
                        requestDate.getDate() === day
                      );
                    })
                    .map((request) => (
                      <li key={request.id}>{request.clientName}</li>
                    ))}
                </ul>
              </div>
            ))}
          </div>;

        })}
      </div>
    </div>
  );
};

export default Calendar;
