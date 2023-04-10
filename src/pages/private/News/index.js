import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Redirect, Route } from 'react-router-dom'
import * as actions from '../../../actions/news.actions'
import routes from '../../../constants/routes.constants'
import { Spinner } from 'react-bootstrap'
import NewsList from "./NewsList";
import NavBar from "../../../components/layout/Navbar";
import Footer from "../../public/Footer";
import NewsItemPage from "./NewsItemPage";
const NewsPage = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.news.isLoading)

  useEffect(() => {
    dispatch(actions.newsList())
  }, [dispatch])
  return(
    <Spinner isLoading={isLoading}>
      <NewsList />
    </Spinner>
  )
}

function News(){
  return(
    <>
      <NavBar/>
      <div className="breadcrumbs flex items-center relative bg-no-repeat bg-scroll bg-center bg-cover lg:mb-32 md:mb-20 mb-15 h-365 md:h-460 lg:h-500">
        <div className="container">
          <div className="relative 2xl:pt-20 lg:pt-16 pt-12 md:mb-12 z-10 flex flex-col justify-center items-center text-center">
            <h1
              className="text-white font-metal uppercase font-normal lg:text-5.5xl md:text-7xl text-5xl tracking-wide mb-6 text-shadow">News</h1>
            <ul className="flex">
              <li><a href="/"
                     className="text-white uppercase text-base sm:text-lg font-bold mr-2 transition-all hover:text-primary nuxt-link-active">Главная</a>
              </li>
              <li><span className="text-white uppercase text-base sm:text-lg font-bold mr-2">//</span></li>
              <li><span className="text-primary uppercase text-base sm:text-lg font-bold">Новости</span></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <Switch>
          <Route exact path={routes.news} component={NewsPage}/>
          <Route exact path={routes.newsItem} component={NewsItemPage} />
          <Redirect to={routes.news} />
        </Switch>
      </div>
      <Footer/>
    </>
  )
}
export default News
