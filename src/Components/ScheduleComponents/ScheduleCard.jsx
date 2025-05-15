import React from 'react'
import './ScheduleStyle.css'
 
const ScheduleCard = ({ event }) => {
  return (
    <div class="schedule-card">
        <label class="schedule-card-title">{event.eventName}</label>
        <div class="information-section">
            <div class="venue-information">
                <div class="time">{event.time}</div>
                <div class="location">{event.venue}</div>
            </div>
            <button class="know-more-button">Know More</button>
        </div>
    </div>
  )
}

export default ScheduleCard
