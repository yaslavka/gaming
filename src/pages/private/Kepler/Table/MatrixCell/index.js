import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import dayjs from 'dayjs'
import avatarFallback from '../../../../../assets/icon/avatar.png'
import avatarFallbac from '../../../../../assets/icon/Av.png'
import styles from './MatrixCell.module.scss'

const branchingLines = (place) => {
  if (place === 0) {
    return (
      <svg
        className={styles.branchingLines}
        width="183"
        height="24"
        viewBox="0 0 183 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

      </svg>
    )
  } else if (place === 1 || place === 2 || place === 3) {
    return (
      <svg
        className={styles.branchingLines}
        width="92"
        height="20"
        viewBox="0 0 92 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

      </svg>
    )
  }
}
export default function MatrixCell({ place, info, isActive, onDoubleClick }) {
  const history = useHistory()
  const [isMobile, setIsMobile] = useState(null)

  const matrixCellHandler = () => {
    if (isActive) {
      // eslint-disable-next-line react/prop-types
      if (info && info.id) {
        // eslint-disable-next-line react/prop-types
        history.push(`/Keplers/${info.id}`)
      } else {
        onDoubleClick()
      }
    }
  }

  const getShadowSize = () => {
    //TODO: Convert to useMemo
    if (isMobile) {
      return place === 0 ? '85px' : '85px'
    } else {
      return place === 0 ? '85px' : '85px'
    }
  }

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 1200) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    resizeHandler()
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div
      className={`${styles.MatrixCell} ${place === 0 ? styles.main : styles.small}`}
      onDoubleClick={matrixCellHandler}>
      {/* eslint-disable-next-line react/prop-types */}
      {info && info.count > -1 && (
        // eslint-disable-next-line react/prop-types
        <span className={styles.counter}>{info.count}</span>
      )}
      <div className={styles.photo}>
        {/*<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 62">*/}
        {/*  <circle cx="30.6305" cy="30.9177" r="25.2154" stroke="#8e00ff96" strokeWidth="9.86691" />*/}
        {/*</svg>*/}
        {info && (
          info.photo?
            isMobile? <img src={`${process.env.REACT_APP_BASE_URL}/user/${info.photo}`} alt={''} style={{width: 47, height: 47}}/>:<img src={`${process.env.REACT_APP_BASE_URL}/user/${info.photo}`} alt={''} style={{width: 90, height: 90}}/>
            :isMobile? <img src={avatarFallback} alt={''} style={{width: 60, height: 60}}/>:<img src={avatarFallback} alt={''} style={{width: 95, height: 95}}/>
        )}
        {/*<img*/}
        {/*  src={`${info ? info.photo ? `${process.env.REACT_APP_BASE_URL}/user/${info.photo}` : avatarFallback : avatarFallback}`}*/}
        {/*  alt=""*/}
        {/*/>*/}
        {place === 0 ? isMobile? <img src={avatarFallbac} style={{width:70, height:70, borderRadius:0}}/>:<img src={avatarFallbac} style={{width:130, height:130, borderRadius:0}}/>: isMobile?<img src={avatarFallbac} style={{width:80, height:80, borderRadius:0}}/>: <img src={avatarFallbac} style={{width:130, height:130, borderRadius:0}}/>}
        <div
          className={styles.shadow}
          style={{
            // eslint-disable-next-line react/prop-types
            boxShadow: `0px 0px 24px ${getShadowSize()} ${
              // eslint-disable-next-line react/prop-types
              info ? info.color : 'transparent'
            }`,
          }}
        />
      </div>
      {branchingLines(place)}
      {info && (
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={({ placement, scheduleUpdate, arrowProps, outOfBoundaries, show, ...props }) => (
            <div
              {...props}
              style={{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: '#4b0fb2',
                border: '1px solid #8083E6',
                padding: '20px 5px 6px',
                lineHeight: '11px',
                marginTop: -16,
                fontSize: 11,
                color: '#fff',
                zIndex: 2,
                // eslint-disable-next-line react/prop-types
                ...props.style,
              }}
            >
              {/* eslint-disable-next-line react/prop-types */}
              {dayjs(info.date).format('DD.MM.YY HH:mm')}
            </div>
          )}
          rootClose
        >
          {/* eslint-disable-next-line react/prop-types */}
          <span className={styles.userName}>{info.userName}</span>
        </OverlayTrigger>
      )}
    </div>
  )
}
