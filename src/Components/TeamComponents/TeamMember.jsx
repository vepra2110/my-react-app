import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";

const TeamMember = ({ member }) => {
  return (
    <div>
      <div className="member-card">
          <div className="profile-photo">
            <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLW2-no7s5KDo1Dr5f_rnmmr02cokVDAfUsg&s' 
                alt={member.name} 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }}
            />
          </div>
          <div className="name">{ member.name }</div>
          <div className="designation">{ member.team }</div>
          <div className="socials">
              <div className="social-container facebook">
                <FaSquareFacebook />
              </div>
              <div className="social-container mail">
                <IoIosMail />
              </div>
              <div className="social-container linkedin">
                <IoLogoLinkedin />
              </div>
          </div>
      </div>
    </div>
  )
}

export default TeamMember
