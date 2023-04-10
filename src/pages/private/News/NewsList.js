import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import isEmpty from 'lodash-es/isEmpty'
import * as actions from '../../../actions/news.actions'
import ReactPaginate from 'react-paginate'
import ima from '../../../assets/others/tam-text-shape2.webp'
import logos from "../../../assets/icon/arrrow-icon2.webp";
import styles from './News.module.css'

function NewsList() {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.news.list)
  const { limit } = useSelector((state) => state.news.query)
  const { total, page } = useSelector((state) => state.news.meta)
  const isLoading = useSelector((state) => state.news.isLoading)

  const handleOnChangePage = useCallback(
    (page) => {
      dispatch(actions.setNewsListPage(page))
    },
    [dispatch],
  )
  return(
    <>
      {!isEmpty(list)?(
        <>
          {list.map(({ id, image, ruTitle,ruText, ruText1, ruText2, ruText5}) =>(
            <div className="flex md:flex-row flex-col bg-secondary-100 p-8 md:p-68 rounded-50" style={{marginBottom: 25}} key={id}>
              <div className="md:w-2/5">
                <div className="border-4 border-gray-400 rounded-3xl d-flex max-w-full md:max-w-sm overflow-hidden">
                  <img src={`${process.env.REACT_APP_BASE_URL}/user/${image}`} alt={''}/>
                </div>
                <div className="flex flex-col justify-center items-center relative mt-8 max-w-full md:max-w-sm z-10 py-7">
                  <h3 className="text-white font-bold text-lg md:text-2xl uppercase">
                    <Link  to={`/news/${id}`} className="nuxt-link-exact-active nuxt-link-active">
                      {ruTitle}
                    </Link>
                  </h3>
                  <div className="absolute top-0 left-0 w-full z-n1">
                    <img src={ima} className="absolute w-full h-120" alt={''}/>
                  </div>
                </div>
                <ul className="flex justify-center text-white mt-8 max-w-full md:max-w-sm">
                  <li className="mr-2">
                    <Link to={'https://vk.com/kosmos_tr'} className="w-12 h-12 rounded-full border-2 border-yellow flex justify-center items-center hover:border-yellow hover:bg-yellow transition-all">
                      <i className="icofont-vk"></i>
                    </Link>
                  </li>
                  <li className="mr-2 ml-2">
                    <Link to={'https://www.youtube.com/channel/UC_uER-pkXylg1Ji_ueNbpJg'} className="w-12 h-12 rounded-full border-2 border-bright flex justify-center items-center hover:border-bright hover:bg-bright transition-all">
                      <i className="icofont-youtube"></i>
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link to={'https://t.me/kosmosmatrix'} className="w-12 h-12 rounded-full border-2 border-punch flex justify-center items-center hover:border-punch hover:bg-punch transition-all">
                      <i className="icofont-telegram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:w-3/5 md:pl-10 mt-16 md:mt-0">
                <div className="about_title lg:mb-6 mb-4">
                  <h5 className="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16">
                    {ruText}
                  </h5>
                  <h2 className="text-white font-exo font-bold uppercase xl:text-title lg:text-5xl md:text-4xl sm:text-3xl text-2xl xl:leading-70 lg:leading-12 leading-10 max-w-sm md:max-w-xl lg:max-w-2xl">
                    {ruText1}
                  </h2>
                </div>
                <div className="about_desc mb-10">
                  <p className="lg:text-xl lg:leading-8">
                    {ruText2}
                  </p>
                  <p className="lg:text-xl lg:leading-8">
                    {ruText5}
                  </p>
                </div>
                <div className="about_btn">
                  <Link to={`/news/${id}`} className="HashLink group primary-btn opacity-100 transition-all">
                    Подробнее
                    <img src={logos} alt={logos} className="ml-3 w-5 h-5 group-hover:ml-4 transition-all"/>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      ):(
        <div className="flex md:flex-row flex-col bg-secondary-100 p-8 md:p-68 rounded-50">
          <div className="about_title lg:mb-6 mb-4">
            <h5 className="text-primary text-xl uppercase font-bold pl-24 lg:mb-6 mb-4 relative before:absolute before:content-[''] before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-1 before:bg-primary before:w-16">
              К сожалению в данный момент новости отсутствуют
            </h5>
          </div>
        </div>
      )}
      {!isEmpty(list) && !isLoading && (
        <ReactPaginate
          forcePage={page}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(total / limit)}
          /* eslint-disable-next-line react/prop-types */
          onPageChange={(props) => handleOnChangePage(props.selected)}
          containerClassName={styles.pagination}
          previousLabel={
            <div role={"button"} className="HashLink group primary-btn opacity-100 transition-all">
            Назад
          </div>}
          nextLabel={
            <div role={"button"} className="HashLink group primary-btn opacity-100 transition-all">
            Далие
          </div>}
        />
      )}
    </>
  )
}
export default NewsList
