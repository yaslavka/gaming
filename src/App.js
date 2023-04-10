import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from './actions/app.actions'
import PrivateRoutes from "./route/private.routes";
import PublicRoutes from "./route/PublicRoutes";
import './styles.css'

function App({ history }) {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(actions.userInfo())
    }
  }, [isAuthenticated, dispatch])

  if (!isAuthenticated) {
    return <PublicRoutes history={history} />
  }

  return <PrivateRoutes history={history} />
}

App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default App
