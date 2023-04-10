import * as ActionTypes from '../constants/app.constants'

/* User Info */
export const userInfo = (values) => ({
  type: ActionTypes.USER_INFO_REQUEST,
  payload: values,
})
export const userInfoSuccess = (userInfo) => ({
  type: ActionTypes.USER_INFO_SUCCESS,
  payload: userInfo,

})
export const userInfoError = (error) => ({
  type: ActionTypes.USER_INFO_ERROR,
  payload: error,
})
export const stavkiInfo = (values) => ({
  type: ActionTypes.STAVKI_INFO_REQUEST,
  payload: values,
})
export const stavkiInfoSuccess = (stavkiInfo) => ({
  type: ActionTypes.STAVKI_INFO_SUCCESS,
  payload: stavkiInfo,

})
export const stavkiInfoError = (error) => ({
  type: ActionTypes.STAVKI_INFO_ERROR,
  payload: error,
})

/* Change User Info */
export const changeUserInfo = (values) => ({
  type: ActionTypes.CHANGE_USER_INFO_REQUEST,
  payload: values,
})
export const changeUserInfoSuccess = (userInfo) => ({
  type: ActionTypes.CHANGE_USER_INFO_SUCCESS,
  payload: userInfo,
})
export const changeUserInfoError = (error) => ({
  type: ActionTypes.CHANGE_USER_INFO_ERROR,
  payload: error,
})
/*STAVKI */
export const stavki = (values) =>({type: ActionTypes.STAVKI_LIST_REQUEST, payload: values})
export const stavkiSuccess = (userInfo) =>({type: ActionTypes.STAVKI_LIST_SUCCESS, payload: userInfo})
export const stavkiError = (error) =>({type: ActionTypes.STAVKI_LIST_ERROR, payload: error})
/* Change Password */
export const changePassword = (values, callback) => ({
  type: ActionTypes.CHANGE_PASSWORD_REQUEST,
  payload: values,
  callback,
})
export const changePasswordSuccess = () => ({
  type: ActionTypes.CHANGE_PASSWORD_SUCCESS,
})
export const changePasswordError = (error) => ({
  type: ActionTypes.CHANGE_PASSWORD_ERROR,
  payload: error,
})

/* Change Finance Password */
export const changeFinancePassword = (values, callback) => ({
  type: ActionTypes.CHANGE_FINANCE_PASSWORD_REQUEST,
  payload: values,
  callback,
})
export const changeFinancePasswordSuccess = () => ({
  type: ActionTypes.CHANGE_FINANCE_PASSWORD_SUCCESS,
})
export const changeFinancePasswordError = (error) => ({
  type: ActionTypes.CHANGE_FINANCE_PASSWORD_ERROR,
  payload: error,
})

/* Change Social Network */
export const changeSocial = (values, callback) => ({
  type: ActionTypes.CHANGE_SOCIAL_REQUEST,
  payload: values,
  callback,
})
export const changeSocialSuccess = (userInfo) => ({
  type: ActionTypes.CHANGE_SOCIAL_SUCCESS,
  payload: userInfo,
})
export const changeSocialError = (error) => ({
  type: ActionTypes.CHANGE_SOCIAL_ERROR,
  payload: error,
})

/* Change Description */
export const changeDescription = (values, callback) => ({
  type: ActionTypes.CHANGE_DESCRIPTION_REQUEST,
  payload: values,
  callback,
})
export const changeDescriptionSuccess = (userInfo) => ({
  type: ActionTypes.CHANGE_DESCRIPTION_SUCCESS,
  payload: userInfo,
})
export const changeDescriptionError = (error) => ({
  type: ActionTypes.CHANGE_DESCRIPTION_ERROR,
  payload: error,
})

export const toggleWelcomeModal = (visible) => ({
  type: ActionTypes.TOGGLE_WELCOME_MODAL,
  payload: visible,
})

export const publishSummaryToTelegram = () => ({
  type: ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_REQUEST,
})

export const publishSummaryToTelegramUpload = (blobImage) => ({
  type: ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_UPLOAD,
  payload: blobImage,
})

export const publishSummaryToTelegramSuccess = () => ({
  type: ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_SUCCESS,
})

export const publishSummaryToTelegramError = (error) => ({
  type: ActionTypes.PUBLISH_SUMMARY_TO_TELEGRAM_ERROR,
  payload: error,
})

/* Change Auto Refill Planets */
export const changeAutoRefillPlanets = (values) => ({
  type: ActionTypes.CHANGE_AUTO_REFILL_PLANET_REQUEST,
  payload: values,
})
export const changeAutoRefillPlanetsSuccess = (newValue) => ({
  type: ActionTypes.CHANGE_AUTO_REFILL_PLANET_SUCCESS,
  payload: newValue,
})
export const changeAutoRefillPlanetsError = (error) => ({
  type: ActionTypes.CHANGE_AUTO_REFILL_PLANET_ERROR,
  payload: error,
})

export const Promo = (values, callback) => ({
  type: ActionTypes.CHANGE_PROMO_REQUEST,
  payload: values,
  callback,
});
export const PromoSuccess = response => ({
  type: ActionTypes.CHANGE_PROMO_SUCCESS,
  payload: response,
});

export const PromoError = error => ({
  type: ActionTypes.CHANGE_PROMO_ERROR,
  payload: error,
});

export const PromoUser = (values, callback) => ({
  type: ActionTypes.CHANGE_PROMO_REQUES,
  payload: values,
  callback,
});
export const PromoUserSuccess = response => ({
  type: ActionTypes.CHANGE_PROMO_SUCCES,
  payload: response,
});

export const PromoUserError = error => ({
  type: ActionTypes.CHANGE_PROMO_ERRO,
  payload: error,
});
