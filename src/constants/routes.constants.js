const r = Object.freeze({
  // Public routes
  root: '/',
  authors: '/authors',
  platforms: '/platforms',
  platformsKepler: '/platforms/Kepler',
  platformsGliese: '/platforms/Gliese',
  platformsAida: '/platforms/Aida',
  platformsRockets: '/platforms/Rockets',
  platformsIon: '/platforms/Ion',
  platformsRoyals: '/platforms/Royals',
  platformsX2: '/platforms/X2',
  platformsMilkyWay: '/platforms/MilkyWay',
  platformsContact: '/contact',
  signIn: '/sign-in',
  signUp: '/sign-up',
  resetPassword: '/reset-password',
  // Private routes
  leader: '/leader',
  dashboard: '/dashboard',
  finances: '/finances',
  team: '/team',
  settings: '/settings',
  bot: '/bot',
  materials: '/my_materials',
  news: '/news',
  newsItem: '/news/:id',
  casino: '/games',
  //Kepler
  kepler: '/Kepler',
  personalKepler: '/personal-Kepler/:type',
  personalTableQueueKepler: '/personal-Kepler/:type/queue',
  tableQueueKepler: '/Kepler/:type/queue',
  tableKepler: '/Keplers/:id',
  //Gliese
  gliese: '/Gliese',
  personalTableGliese: '/personal-Gliese/:type',
  personalTableQueueGliese: '/personal-Gliese/:type/queue',
  tableQueueGliese: '/Glieses/:type/queue',
  tableGliese: '/Glieses/:id',
  //Aida
  aida: '/aida',
  tableaida: '/aidas/:id',
  personalTableaida: '/personal-aida/:type',
  personalTableQueueaida: '/personal-aida/:type/queue',
  tableQueueaida: '/aida/:type/queue',
  //Rockets
  rockets: '/rockets',
  personalTableRockets: '/personal-rockets/:type',
  personalTableQueueRockets: '/personal-rockets/:type/queue',
  tableQueueRockets: '/rockets/:type/queue',
  tableRockets: '/rocket/:id',
  //Ion
  ion: '/ion',
  personalTableion: '/personal-ion/:type',
  personalTableQueueion: '/personal-ion/:type/queue',
  tableQueueion: '/ion/:type/queue',
  tableion: '/ions/:id',
  //Royals
  royal: '/royal',
  personalTableroyal: '/personal-royal/:type',
  personalTableQueueroyal: '/personal-royal/:type/queue',
  tableQueueroyal: '/royal/:type/queue',
  tableroyal: '/royals/:id',
  //X2
  x2: '/x2',
  personalTablex2: '/personal-x2/:type',
  personalTableQueuex2: '/personal-x2/:type/queue',
  tableQueuex2: '/x2/:type/queue',
  tablex2: '/x-2/:id',
  //MilkyWay
  milkyway: '/milky-way',
  milkywayPlanets: '/milky-way/planets',
  milkywayStatistic: '/milky-way/statistic',
  //casino
  nukeWorld:'/games/nuke_world',
  raccoonTales:'/games/raccoon_tales',
  forestDreams:'/games/forest_dreams',
  animalQuest:'/games/animal_quest',
  magicWheel:'/games/magic_wheel',
  christmasParty:'/games/christmas_party',
  eTRaces:'/games/ETRaces',
  hamster:'/games/hamster',
  treeoflight:'/games/tree_of_light',
  roulette:'/games/roulette',
})
export default r
