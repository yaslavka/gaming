import React from 'react'
import { useDispatch} from 'react-redux'
import * as actions from "../../../../actions/startrek.actions";
import logos from "../../../../assets/icon/arrrow-icon2.webp";

function BuyModal({setOp, op}){
  const dispatch = useDispatch()
  const handleButtonClick = async () =>{
    dispatch(actions.startrekBuy())
  }
  return(
    op &&
    <div className="absolute left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full " style={{textAlignLast: "center"}}>
      <div className="relative w-full h-full max-w-md md:h-auto" style={{width: '100%'}}>
        <div className="relative rounded-lg shadow dark:bg-gray-700" style={{backgroundColor: '#2b0687'}}>
          <button type="button" onClick={e => {e.preventDefault();setOp(false)}}
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Закрыть</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-center text-gray-900 dark:text-white">
              Покупка места
            </h3>
            <h3 className="text-center">Подтвердите покупку</h3>
            <button onClick={handleButtonClick} className="link-blue HashLink group primary-btn opacity-100 transition-all">
              Да
              <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </button>
            <button onClick={e => {e.preventDefault();setOp(false)}} className="link-blue HashLink group primary-btn opacity-100 transition-all">
              Нет
              <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BuyModal
