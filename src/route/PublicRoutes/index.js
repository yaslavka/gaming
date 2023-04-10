import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import omit from 'lodash-es/omit'
import { publicRouteConfig } from '../../routes'
import r from '../../constants/routes.constants'
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
//import video from '../../assets/video/1.mp4'
function PublicRoutes({ history }) {
  return(
    <BrowserRouter history={history}>
      <Router>
        <div className="bg-cover bg-gray-800 apphome">
          {/*<video*/}
          {/*  loop="loop"*/}
          {/*  muted="muted"*/}
          {/*  autoPlay="autoplay"*/}
          {/*  preload="auto"*/}
          {/*  className="fullscreen-bg__video"*/}
          {/*>*/}
          {/*  <source src={video} type="video/mp4" />*/}
          {/*</video>*/}
          <Switch>
            {publicRouteConfig.map((route) => (
              <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
            ))}

            <Redirect to={r.root} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  )
}
PublicRoutes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default PublicRoutes
