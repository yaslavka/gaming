import React, { useEffect, useState, useCallback } from 'react'
import { resizeFreeInformationImage } from '../../../../utils'
import { useSelector, useDispatch } from 'react-redux'
import * as htmlToImage from 'html-to-image'
import { saveAs } from 'file-saver'
import { Button } from 'reactstrap'
import Raven from 'raven-js'
import * as actions from '../../../../actions/app.actions'
import avatar from '../../../../assets/icon/avatar.png'
import avata from '../../../../assets/icon/Av.png'
import cl from '../StarTrek.module.css';
import inImage from '../../../../assets/icon/insta.svg'
import tgImage from '../../../../assets/icon/vk.svg'
import vkImage from '../../../../assets/icon/vk.svg'

function Summary(){
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.app.user)
  const statistics = useSelector((state) => state.startrek.statistics)
  const isLoadingPublish = useSelector((state) => state.app.loadings.publish)
  const [freeInfoAvatar, setFreeInfoAvatar] = useState(null)

  const downloadSummary = useCallback(async () => {
    dispatch(actions.publishSummaryToTelegram())
    try {
      const imgData = await htmlToImage.toBlob(document.getElementById('startrek-summary'), {
        style: { backgroundColor: '#130132' },
        cacheBust: true,
        pixelRatio: 1,
      })

      if (imgData && statistics?.totalSum && userInfo?.avatar) {
        // Send to Telegram
        dispatch(actions.publishSummaryToTelegramUpload(imgData))
      } else if (imgData && userInfo) {
        const filename = userInfo.last_name.trim()
          ? `startrek-summary-${userInfo.first_name.trim()}`
          : 'startrek-summary'

        saveAs(imgData, `${filename}.jpeg`)
      }
    } catch (error) {
      Raven.captureException(error)
    }
  }, [dispatch, userInfo, statistics])
  return(
    userInfo &&
      statistics && (
        <div className={cl.summaryBlock}>
          <div className={cl.summaryCard} id="startrek-summary">
            <div className={cl.summaryLeft}>
              <figure className={cl.summaryFigure}>
                {userInfo?.avatar
                  ?<>
                    <img src={`${process.env.REACT_APP_BASE_URL}/user/${userInfo?.avatar}`} alt={''}
                         className="summaryFigures"
                         style={{width: 140, height: 140, borderRadius: 65, marginLeft: 38, marginTop: 43}}/>
                    <img src={avata} alt={''} className={"summaryFiures"}/>
                  </>:
                  <>
                    <img src={avata} alt={''} className={"summaryFiures"}/>
                    <img src={avatar} alt={''}
                         className="summaryFigures"
                         style={{width: 170, height: 180, borderRadius: 70, marginLeft: 27, marginTop: 10}}/>

                  </>
                }
              </figure>
            </div>
            <div className={cl.summaryRight}>
              <div className={cl.summaryInitials}>
                <div>{userInfo.first_name}</div>
                <div>{userInfo.last_name}</div>
              </div>
              <ul className={cl.summaryInfoList}>
                <li className={cl.summaryInfoItem}>
                  {userInfo.instagram ? (
                    <a
                      href={`https://www.instagram.com/${userInfo.instagram}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {userInfo.instagram}{'             '}
                      <img
                        className="free-information__social--image"
                        src={inImage}
                        alt={userInfo.instagram}
                      />
                    </a>
                  ) : (
                    `Информация отсутствует`
                  )}
                </li>
                <li  className={cl.summaryInfoItem}>
                  {userInfo.telegram ? (
                    <a href={`https://t.me/${userInfo.telegram}`} rel="noreferrer" target="_blank">
                      {userInfo.telegram}{'             '}
                      <img
                        className="free-information__social--image"
                        src={tgImage}
                        alt={userInfo.telegram}
                      />
                    </a>
                  ) : (
                    `Информация отсутствует`
                  )}
                </li>
                <li  className={cl.summaryInfoItem}>
                  {userInfo.vkontakte ? (
                    <a href={`https://vk.com/${userInfo.vkontakte}`} rel="noreferrer" target="_blank">
                      {userInfo.vkontakte}{'             '}
                      <img
                        className="free-information__social--image"
                        src={vkImage}
                        alt={userInfo.vkontakte}
                      />
                    </a>
                  ) : (
                    `Информация отсутствует`
                  )}
                </li>
              </ul>
              <div className={cl.summaryCheck}>
                <h3>Общий чек млечного пути</h3>
                <strong>
                  {statistics.myInventoryIncome || 0} ₽
                </strong>
              </div>
            </div>
          </div>
        </div>
    )
  )
}
export default Summary
