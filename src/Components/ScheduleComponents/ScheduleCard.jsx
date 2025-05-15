import React from 'react'
import { IoTime, IoLocation } from "react-icons/io5";
import './ScheduleStyle.css'
 
const ScheduleCard = ({ event }) => {
  return (
    <div class="schedule-card">
        <label class="schedule-card-title">{event.eventName}</label>
        <div class="information-section">
            <div class="venue-information">
                <div class="time detail"><IoTime />{event.time}</div>
                <div class="location detail"><IoLocation />{event.venue}</div>
            </div>
            <button class="know-more-button">Know More</button>
        </div>
    </div>
  )
}

export default ScheduleCard
