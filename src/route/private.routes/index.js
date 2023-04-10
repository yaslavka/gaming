import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Redirect, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import omit from 'lodash-es/omit'
import r from '../../constants/routes.constants'
import { panelRouteConfig } from '../../routes'
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
function PrivateRoutes({ history }){
  return(
    <BrowserRouter history={history}>
      <Router>
        <div className="bg-cover bg-gray-800 apphome">
          <Switch>
            {panelRouteConfig.map((route) => (
              <RouteWithSubRoutes key={route.id} {...omit(route, 'id')} />
            ))}

            <Redirect to={r.leader} />
          </Switch>
        </div>
      </Router>
    </BrowserRouter>
  )
}
PrivateRoutes.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}
export default PrivateRoutes
