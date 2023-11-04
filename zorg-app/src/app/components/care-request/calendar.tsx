import React, { useState } from "react";
import { CareRequest } from '@zorg-match/graphql-codegen-react';
import { formatHourMinutes } from '../util/date-formatters';

const Calendar = ({
  careRequests,
  select,
}: {
  careRequests: CareRequest[];
  select: Function;
}) => {
  const currentDate = new Date();

  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  function getWeeksArray() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    const weeksArray = [];
    let currentWeek = [];
    const dayOfWeek = firstDayOfMonth.getDay();

    const previousMonthLastDay = new Date(currentYear, currentMonth, 0);
    const daysInPreviousMonth = previousMonthLastDay.getDate();
    for (
      let day = daysInPreviousMonth - dayOfWeek + 1;
      day <= daysInPreviousMonth;
      day++
    ) {
      currentWeek.push(day);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        weeksArray.push([...currentWeek]);
        currentWeek = [];
      }
    }

    const nextMonthFirstDay = new Date(currentYear, currentMonth + 1, 1);
    const nextMonthDayOfWeek = nextMonthFirstDay.getDay();
    for (let day = 1; day <= 7 - nextMonthDayOfWeek; day++) {
      currentWeek.push(day);
    }

    weeksArray.push([...currentWeek]);
    return weeksArray;
  }

  const weeksArray = getWeeksArray();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonthName = months[currentMonth];

  function nextMonth() {
    if(currentMonth + 1 > 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear+1);
    } else {
      setCurrentMonth(currentMonth+1)
    }
  }

  function previousMonth() {
    if (currentMonth - 1 < 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear-1)
    } else {
      setCurrentMonth(currentMonth-1)
    }

  }

  return (
    <div>
      {currentYear} {currentMonthName}
      <button
        className="mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => previousMonth()}>Previous</button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => nextMonth()}>Next</button>
      <div className="flex flex-col">
        {weeksArray.map((week, index) => {
          return (
            <div key={index} className="flex flex-row">
              {week.map((day, dayIndex) => (
                <div
                  key={'' + dayIndex + '' + index}
                  className="w-full min-h-[150px] p-2 border"
                >
                  <div className="font-semibold">{day}</div>
                  <ul>
                    {careRequests
                      .filter((request) => {
                        const requestDate = new Date(request.start);
                        return (
                          requestDate.getMonth() === currentMonth &&
                          requestDate.getDate() === day &&
                          requestDate.getFullYear() === currentYear
                        );
                      })
                      .map((request) => (
                        <li
                          className="mb-1 max-w-full bg-blue-500 hover:bg-blue-700 text-white px-1 rounded"
                          onClick={() => select(request)}
                          key={'calreq-' + request.id}
                        >
                          <div className="flex flex-row">
                            <div className="truncate max-w-[70px]">
                              {request.clientName}
                            </div>
                            <div className="flex-grow"></div>
                            <div className="truncate">
                              {formatHourMinutes(request.start)}
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
