import React from 'react'
import './TeamStyle.css'
import TeamMember from './TeamMember'

const Team = () => {
  const teamMembers = [
  { name: 'Person1', team: 'Sponsorship' },
  { name: 'Person2', team: 'Sponsorship' },
  { name: 'Person3', team: 'Tech' },
  { name: 'Person4', team: 'Sponsorship' },
  { name: 'Person5', team: 'Event Management' },
  { name: 'Person6', team: 'Sponsorship' },
  { name: 'Person7', team: 'Sponsorship' },
  { name: 'Person8', team: 'Sponsorship' },
  { name: 'Person9', team: 'Tech' },
  { name: 'Person10', team: 'Event Management' }
]

  return (
    <div class="background">
      <label className="title"><b>Our Team</b></label>
      <div className="members">
        {
          teamMembers.map(member => (
            <TeamMember member={member} />
          ))
        }
      </div>
    </div>
  )
}

export default Team
