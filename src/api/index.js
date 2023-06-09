import axios from 'axios'
import Raven from 'raven-js'
import { getAccessToken, createFormDataObj } from '../utils'
import * as actions from '../actions/auth.actions'
import { store } from '../index'
import feathers from "feathers-client";
import rest from "feathers-rest/client";
import auth from "feathers-authentication-client";

export const baseInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const  promo = axios.create({
  baseURL: 'https://hub-projects.online/'
})

export const tinkoff = axios.create({
  baseURL: 'https://securepay.tinkoff.ru',
})
promo.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Raven.captureException(error)
    return Promise.reject(error)
  },
)


promo.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    Raven.captureException(error)
    if (error?.response?.status === 401) {
      const timer = localStorage.getItem('w')
      localStorage.clear()
      localStorage.setItem('w', timer)

      store.dispatch(actions.signOut())
    } else if (error?.response) {
      // Global path to error message
      throw new Error(error?.response?.data?.message)
    } else {
      throw new Error(error?.message)
    }
  },
)

baseInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Raven.captureException(error)
    return Promise.reject(error)
  },
)


baseInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    Raven.captureException(error)
    if (error?.response?.status === 401) {
      const timer = localStorage.getItem('w')
      localStorage.clear()
      localStorage.setItem('w', timer)

      store.dispatch(actions.signOut())
    } else if (error?.response) {
      // Global path to error message
      throw new Error(error?.response?.data?.message)
    } else {
      throw new Error(error?.message)
    }
  },
)
const host = process.env.REACT_APP_BASE_URL

export const app = feathers()
  .configure(rest(host).fetch(fetch))
  .configure(feathers.hooks())
  .configure(auth({ storage: window.localStorage}));

export const api = {
  getLandingInfo() {
    return baseInstance.post('/landing-info');
  },
  // Auth
  promocode(userData) {
    return promo.get(`fkztHGw4.php?data=${userData}`);
  },
  Stavki(){
    return baseInstance.get('/stavki')
  },

  tradePairsName(name) {
    return baseInstance.get(`/v2/?trading-pairs=${name}`)
  },
  tradeMarket() {
    return baseInstance.get('/chat')
  },
  tradeCreateOrderBuy() {
    return baseInstance.get('/v2/trading-pairs ')
  },
  tradeCreateOrderSell() {
    return baseInstance.get('/v2/trading-pairs ')
  },
  tradeOrderSell() {
    return baseInstance.get('/v2/trading-pairs ')
  },
  tradeOrderBuy() {
    return baseInstance.get('/v2/trading-pairs ')
  },
  createBTC() {
    return baseInstance.post('/v2/createBTC')
  },
  createWithdrawBTC(data) {
    return baseInstance.post('/v2/createWithdraw_btc', data)
  },
  investBox(data){
    return baseInstance.post(`/v2/invest_box`, data)
  },
  invest_Box(data){
    return baseInstance.post(`/v1/invest_box`, data)
  },
  signIn(credentials) {
    return baseInstance.post(
      '/user/login',
      createFormDataObj({ ...credentials, grant_type: 'password' }),
    )
  },
  signUp(userInfo) {
    return baseInstance.post('/user/registration', userInfo)
  },
  resetPassword(email) {
    return baseInstance.post('/registration/restore-password', { email })
  },
  // User
  getUserInfo() {
    return baseInstance.get('/user')
  },
  updateAvatar(avatar) {
    console.log(JSON.stringify(avatar))
    return baseInstance.post('/user/avatar', createFormDataObj({ avatar }))
  },
  searchUserByLogin({ user_name, matrix_type }) {
    return baseInstance.get(`/user/find?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginG({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findG?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginA({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findA?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginR({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findR?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginI({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findI?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginRo({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findRo?user_name=${user_name}&matrix_type=${matrix_type}`)
  },
  searchUserByLoginX({ user_name, matrix_type }) {
    return baseInstance.get(`/user/findX?user_name=${user_name}&matrix_type=${matrix_type}`)
  },

  getMatrixMiniTypes() {
    return baseInstance.get('/matrix/mini/type')
  },
  getMatrixMiniCloneStatTypes() {
    return baseInstance.get('matrix/mini/clone-stat')
  },
  getMatrixMiniStructureByType(type) {
    return baseInstance.get(`matrix/mini/structure?matrix_type=${type}`)
  },
  getMatrixssStructureByType(type) {
    return baseInstance.get(`matrix/ss/structure?matrix_type=${type}`)
  },
  getMatrixMiniStructureById(id) {
    return baseInstance.get(`matrix/mini/structure?matrix_id=${id}`)
  },
  getMatrixssStructureById(id) {
    return baseInstance.get(`matrix/ss/structure?matrix_id=${id}`)
  },
  buyMatrixMini(matrix_id) {
    return baseInstance.post('matrix/mini/buy', { matrix_id })
  },
  getMatrixMiniListForInstall(matrix_type) {
    return baseInstance.get(`matrix/mini/for-install?matrix_type=${matrix_type}`)
  },
  getMatrixssListForInstall(matrix_type) {
    return baseInstance.get(`matrix/super/for-install?matrix_type=${matrix_type}`)
  },
  installMatrixMini(matrixInfo) {
    return baseInstance.post('matrix/mini/install', matrixInfo)
  },
  installMatrixss(matrixInfo) {
    return baseInstance.post('matrix/super/install', matrixInfo)
  },
  getMatrixMiniClonesCout(matrix_type) {
    return baseInstance.get(`matrix/mini/clone?matrix_type=${matrix_type}`)
  },
  getMatrixssClonesCout(matrix_type) {
    return baseInstance.get(`matrix/mini/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixMiniClones(matrixClonesInfo) {
    return baseInstance.post('matrix/mini/install-clone', matrixClonesInfo)
  },
  arrangeMatrixssClones(matrixClonesInfo) {
    return baseInstance.post('matrix/mini/install-clone', matrixClonesInfo)
  },
  getNeighboringMatricesMini(matrixType) {
    return baseInstance.get(`matrix/mini/dash-info?matrix_type=${matrixType}`)
  },
  setMiniClone(matrixInfo) {
    return baseInstance.post('matrix/mini/target-install-clone', matrixInfo)
  },
  // Matricesx
  getMatrixUnoTypes() {
    return baseInstance.get('/matrix/uno/type')
  },
  getMatrixUnoCloneStatTypes() {
    return baseInstance.get('matrix/uno/clone-stat')
  },
  getMatrixUnoStructureByType(type) {
    return baseInstance.get(`matrix/uno/structure?matrix_type=${type}`)
  },
  getMatrixUnoStructureById(id) {
    return baseInstance.get(`matrix/uno/structure?matrix_id=${id}`)
  },
  buyMatrixUno(matrix_id) {
    return baseInstance.post('matrix/uno/buy', { matrix_id })
  },
  getMatrixUnoListForInstall(matrix_type) {
    return baseInstance.get(`matrix/uno/for-install?matrix_type=${matrix_type}`)
  },
  installMatrixUno(matrixInfo) {
    return baseInstance.post('matrix/uno/install', matrixInfo)
  },
  getMatrixUnoClonesCout(matrix_type) {
    return baseInstance.get(`matrix/uno/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixUnoClones(matrixClonesInfo) {
    return baseInstance.post('matrix/uno/install-clone', matrixClonesInfo)
  },
  getNeighboringMatricesUno(matrixType) {
    return baseInstance.get(`matrix/uno/dash-info?matrix_type=${matrixType}`)
  },
  setUnoClone(matrixInfo) {
    return baseInstance.post('matrix/uno/target-install-clone', matrixInfo)
  },
  // Matrices
  getMatrixTypes() {
    return baseInstance.get('/matrix/type')
  },
  getMatrixCloneStatTypes() {
    return baseInstance.get('matrix/clone-stat')
  },
  getMatrixStructureByType(type) {
    return baseInstance.get(`matrix/structure?matrix_type=${type}`)
  },
  getMatrixStructureById(id) {
    return baseInstance.get(`matrix/structure?matrix_id=${id}`)
  },
  buyMatrix(matrix_id) {
    return baseInstance.post('matrix/buy', { matrix_id })
  },
  getMatrixListForInstall(matrix_type) {
    return baseInstance.get(`matrix/for-install?matrix_type=${matrix_type}`)
  },
  installMatrix(matrixInfo) {
    return baseInstance.post('matrix/install', matrixInfo)
  },
  getMatrixClonesCout(matrix_type) {
    return baseInstance.get(`matrix/clone?matrix_type=${matrix_type}`)
  },
  arrangeMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/install-clone', matrixClonesInfo)
  },
  getNeighboringMatrices(matrixType) {
    return baseInstance.get(`matrix/dash-info?matrix_type=${matrixType}`)
  },
  setClone(matrixInfo) {
    return baseInstance.post('matrix/target-install-clone', matrixInfo)
  },
  // Auto matrices
  getAutoMatrixTypes() {
    return baseInstance.get('matrix/auto/type')
  },
  getAutoMatrixStructureByType(type) {
    return baseInstance.get(`matrix/auto/structure?matrix_type=${type}`)
  },
  getAutoMatrixStructureById(id) {
    return baseInstance.get(`matrix/auto/structure?matrix_id=${id}`)
  },
  buyAutoMatrix(matrix_id) {
    return baseInstance.post('matrix/auto/buy', { matrix_id })
  },
  getAutoMatrixListForInstall(matrix_type) {
    return baseInstance.get(`matrix/auto/for-install?matrix_type=${matrix_type}`)
  },
  installAutoMatrix(matrixInfo) {
    return baseInstance.post('matrix/auto/install', matrixInfo)
  },
  getAutoMatrixClonesCout(matrix_type) {
    return baseInstance.get(`matrix/auto/clone?matrix_type=${matrix_type}`)
  },
  arrangeAutoMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/auto/install-clone', matrixClonesInfo)
  },
  getNeighboringAutoMatrices(matrixType) {
    return baseInstance.get(`matrix/auto/dash-info?matrix_type=${matrixType}`)
  },
  setAutoClone(matrixInfo) {
    return baseInstance.post('matrix/auto/target-install-clone', matrixInfo)
  },
  getUpperAutoStructureById(matrixId) {
    return baseInstance.get(`matrix/auto/structure-upper?matrix_id=${matrixId}`)
  },
  getUpperssStructureById(matrixId) {
    return baseInstance.get(`matrix/auto/structure-upper?matrix_id=${matrixId}`)
  },
  // Wallet
  getTransactionsHistory({ limit, offset }) {
    return baseInstance.get(`wallet/transactions?limit=${limit}&offset=${offset}`)
  },
  createWithdraw(withdrawInfo) {
    return baseInstance.post('wallet/create-withdraw', withdrawInfo)
  },
  submitCreatePayeerWithdraw(withdrawInfo) {
    return baseInstance.post('wallet/create-payeer-withdraw', withdrawInfo)
  },
  createPay(payInfo) {
    return baseInstance.post('wallet/create-pay', payInfo)
  },
  createPayeerPay(payInfo) {
    return baseInstance.post( 'wallet/create-payeer-pay',payInfo)
  },
  getUpperStructureById(matrixId) {
    return baseInstance.get(`matrix/structure-upper?matrix_id=${matrixId}`)
  },
  getUpperMiniStructureById(matrixId) {
    return baseInstance.get(`matrix/mini/structure-upper?matrix_id=${matrixId}`)
  },
  getUppeUnorStructureById(matrixId) {
    return baseInstance.get(`matrix/uno/structure-upper?matrix_id=${matrixId}`)
  },
  // School
  getComments() {
    return baseInstance.get('school/comments')
  },
  createRequestToSchool(data) {
    return baseInstance.post('school/create', data)
  },
  createComment(text) {
    return baseInstance.post('school/create-comment', { text })
  },
  // News
  getNewsList({ limit, offset }) {
    return baseInstance.get(`news/get?offset=${offset}&limit=${limit}`)
  },
  getNewsById(id) {
    return baseInstance.get(`news/get-one?news_id=${id}`)
  },

  /* SUPER STARS */
  ssMatrixTypes() {
    return baseInstance.get('matrix/super/type')
  },
  ssMatrixCloneStatTypes() {
    return baseInstance.get('matrix/super/clone-stat')
  },
  ssBuyMatrix(matrix_id) {
    return baseInstance.post('matrix/super/buy', { matrix_id })
  },
  ssMatrixStructureByType(type) {
    return baseInstance.get(`matrix/super/structure?matrix_type=${type}`)
  },
  ssMatrixStructureById(id) {
    return baseInstance.get(`matrix/super/structure?matrix_id=${id}`)
  },
  ssMatrixClones(matrix_type) {
    return baseInstance.get(`matrix/super/clone?matrix_type=${matrix_type}`)
  },
  ssInstallMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/super/install-clone', matrixClonesInfo)
  },
  ssBuyMatrixClones(matrixClonesInfo) {
    return baseInstance.post('matrix/super/buy-comet', matrixClonesInfo)
  },
  ssStructureUpper(matrixId) {
    return baseInstance.get(`matrix/uno/structure-upper?matrix_id=${matrixId}`)
  },
//X2
  getMatrixUnosTypes() {
    return baseInstance.get('/matrix/unos/type');
  },
  getMatrixUnosCloneStatTypes() {
    return baseInstance.get('matrix/unos/clone-stat');
  },
  getMatrixUnosStructureByType(type) {
    return baseInstance.get(`matrix/unos/structure?matrix_type=${type}`);
  },
  getMatrixUnosStructureById(id) {
    return baseInstance.get(`matrix/unos/structure?matrix_id=${id}`);
  },
  buyMatrixUnos(matrix_id) {
    return baseInstance.post('matrix/unos/buy', {matrix_id});
  },
  getMatrixUnosClonesCout(matrix_type) {
    return baseInstance.get(`matrix/unos/clone?matrix_type=${matrix_type}`);
  },
  setUnosClone(matrixInfo) {
    return baseInstance.post('matrix/unos/target-install-clone', matrixInfo);
  },
  getUpperUnosStructureById(matrixId) {
    return baseInstance.get(
      `matrix/unos/structure-upper?matrix_id=${matrixId}`,
    );
  },
  //Rockets
  getMatrixRocketsTypes() {
    return baseInstance.get('/matrix/rockets/type');
  },
  getMatrixRocketsCloneStatTypes() {
    return baseInstance.get('matrix/rockets/clone-stat');
  },
  getMatrixRocketsStructureByType(type) {
    return baseInstance.get(`matrix/rockets/structure?matrix_type=${type}`);
  },
  getMatrixRocketsStructureById(id) {
    return baseInstance.get(`matrix/rockets/structure?matrix_id=${id}`);
  },
  buyMatrixRockets(matrix_id) {
    return baseInstance.post('matrix/rockets/buy', {matrix_id});
  },
  getMatrixRocketsClonesCout(matrix_type) {
    return baseInstance.get(`matrix/rockets/clone?matrix_type=${matrix_type}`);
  },
  setRocketsClone(matrixInfo) {
    return baseInstance.post('matrix/rockets/target-install-clone', matrixInfo);
  },
  getUppeRocketsStructureById(matrixId) {
    return baseInstance.get(
      `matrix/rockets/structure-upper?matrix_id=${matrixId}`,
    );
  },

  //Ion
  getMatrixIonTypes() {
    return baseInstance.get('/matrix/ion/type');
  },
  getMatrixIonCloneStatTypes() {
    return baseInstance.get('matrix/ion/clone-stat');
  },
  getMatrixIonStructureByType(type) {
    return baseInstance.get(`matrix/ion/structure?matrix_type=${type}`);
  },
  getMatrixIonStructureById(id) {
    return baseInstance.get(`matrix/ion/structure?matrix_id=${id}`);
  },
  buyMatrixIon(matrix_id) {
    return baseInstance.post('matrix/ion/buy', {matrix_id});
  },
  getMatrixIonClonesCout(matrix_type) {
    return baseInstance.get(`matrix/ion/clone?matrix_type=${matrix_type}`);
  },
  setIonClone(matrixInfo) {
    return baseInstance.post('matrix/ion/target-install-clone', matrixInfo);
  },
  getUppeIonStructureById(matrixId) {
    return baseInstance.get(`matrix/ion/structure-upper?matrix_id=${matrixId}`);
  },

  //Royals
  getMatrixRoyalsTypes() {
    return baseInstance.get('/matrix/royals/type');
  },
  getMatrixRoyalsCloneStatTypes() {
    return baseInstance.get('matrix/royals/clone-stat');
  },
  getMatrixRoyalsStructureByType(type) {
    return baseInstance.get(`matrix/royals/structure?matrix_type=${type}`);
  },
  getMatrixRoyalsStructureById(id) {
    return baseInstance.get(`matrix/royals/structure?matrix_id=${id}`);
  },
  buyMatrixRoyals(matrix_id) {
    return baseInstance.post('matrix/royals/buy', {matrix_id});
  },
  getMatrixRoyalsClonesCout(matrix_type) {
    return baseInstance.get(`matrix/royals/clone?matrix_type=${matrix_type}`);
  },
  setRoyalsClone(matrixInfo) {
    return baseInstance.post('matrix/royals/target-install-clone', matrixInfo);
  },
  getUppeRoyalsStructureById(matrixId) {
    return baseInstance.get(
      `matrix/royals/structure-upper?matrix_id=${matrixId}`,
    );
  },


  addOrderApi(item){
    return baseInstance.post('orders/create', item)
  }
}
