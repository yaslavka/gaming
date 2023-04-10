import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import personImgDef from '../../../../assets/icon/avatar.png'
import personImgDe from '../../../../assets/icon/Av.png'
import SimpleBar from "simplebar-react";

function TeamMember({ member }){
  const history = useHistory()
  const {
    id,
    username,
    email,
    // eslint-disable-next-line react/prop-types
    phone,
    // eslint-disable-next-line react/prop-types
    telegram,
    // eslint-disable-next-line react/prop-types
    vkontakte,
    // eslint-disable-next-line react/prop-types
    instagram,
    avatar,
    // eslint-disable-next-line react/prop-types
    first_name,
    matrix,
    auto,
    // eslint-disable-next-line react/prop-types
    last_name,
    is_verified,
    superStar
  } = member
  return(
    <div className="mapings text-white text-center align-cener bg-no-repeat bg-scroll bg-center bg-cover md:pt-14 md:pb-12 md:px-12 sm:py-14 sm:px-6 py-14 px-10 h-460">
      <div className=" text-center align-center">
        {avatar ?
          <>
            <img src={personImgDe} className="h-37 w-36" alt={avatar} style={{width: '70%', height: '70%', marginTop: '-28%', marginRight: '50%'}}/>
            <img src={`${process.env.REACT_APP_BASE_URL}/user/${avatar}`} className="h-37 w-36 team" alt={avatar} style={{width: '45%', height: 120, borderRadius: 300}}/>
          </>
          :<>
            <img src={personImgDe} className="h-37 w-36" alt={avatar} style={{width: '70%', height: '70%', marginTop: '-30%', marginRight: '50%'}}/>
            <img src={personImgDef} className="h-37 w-36 teams" alt={avatar} style={{width: '50%', height: '50%'}}/>
          </>
        }
      </div>
      <div className="block">
        <h3 className="text-white font-exo text-xl md:text-2xl font-bold uppercase">
          <div style={{verticalAlign: 'inherit'}}>
            <div style={{verticalAlign: 'inherit'}}>
              {`${first_name} ${last_name}`}
            </div>
          </div>
        </h3>
        <p>
          Активирован ?: {is_verified ===  1 ? <span className="checkmark"></span>:<span className="notPayed"> </span>}
          <br/>
          Email: {email? <span>{email}</span>:<span className="notPayed"> </span>}
          <br/>
          Телефон: {phone? <span>{phone}</span>:<span className="notPayed"> </span>}
        </p>
      </div>
    </div>
  )
}
TeamMember.propTypes = {
  member: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    avatar: PropTypes.string,
    is_verified: PropTypes.string
  }),
}
export default TeamMember
