import React from 'react'
import { useParams } from 'react-router-dom';
import './ScheduleStyle.css'
import ScheduleCard from './ScheduleCard';

const Schedule = () => {
  const { dayId } = useParams();
  const events = [
  { 
    day: 0,
    eventName: "Opening Ceremony",
    venue: "Bhatnagar Auditorium",
    time: "6:30PM"
  },
  {
    day: 0,
    eventName: "Stargazing Session",
    venue: "Tata Steel Sports Complex",
    time: "8:00PM"
  },
  {
    day: 1,
    eventName: "Case Study",
    venue: "Maitrayee Auditorium",
    time: "9:00AM"
  },
  {
    day: 1,
    eventName: "Lift Off",
    venue: "MG Ground",
    time: "10:00AM"
  },
  {
    day: 1,
    eventName: "Eggstravaganza",
    venue: "Gymkhana",
    time: "10:00AM"
  },
  {
    day: 1,
    eventName: "Hoverpod",
    venue: "Vikramshila Arena",
    time: "11:00AM"
  },
  {
    day: 1,
    eventName: "Pitch The Cosmos",
    venue: "KCSTC",
    time: "1:00PM"
  },
  {
    day: 1,
    eventName: "IUCAA Workshop",
    venue: "Vikramshila V4",
    time: "1:00PM"
  },
  {
    day: 2,
    eventName: "Paper Presentation",
    venue: "KCSTC",
    time: "9:00AM"
  },
  {
    day: 2,
    eventName: "Astrobyte",
    venue: "Maitrayee Auditorium",
    time: "9:00AM"
  },
  {
    day: 2,
    eventName: "Ashish Mahabal",
    venue: "Bhatnagar Auditorium",
    time: "9:30AM"
  },
  {
    day: 2,
    eventName: "Lift Off",
    venue: "MG Ground",
    time: "10:00AM"
  },
  {
    day: 2,
    eventName: "Mazerunner",
    venue: "Vikramshila Arena",
    time: "11:00AM"
  },
  {
    day: 2,
    eventName: "Closing Ceremony",
    venue: "Vikramshila V2",
    time: "5:00PM"
  }
];

const eventsFiltered = events.filter(event => event.day === parseInt(dayId));

  return (
    <div className='background'>
      <label className="schedule-page-title">Schedule Page: Day {dayId}</label>
      <div className="schedule-cards-container">
        {
          eventsFiltered.map(Event => (
            <ScheduleCard event={Event} />
          ))
        }
      </div>
    </div>
  )
}

export default Schedule;
