import r from './constants/routes.constants'
import Home from "./pages/public/Home";
import Authors from "./pages/public/authors";
import Platform from "./pages/public/Platforms";
import Kepler from "./pages/public/Platforms/Kepler";
import Gliese from "./pages/public/Platforms/Gliese";
import Aida from "./pages/public/Platforms/Aida";
import Rockets from "./pages/public/Platforms/Rockets";
import Ion from "./pages/public/Platforms/Ion";
import Royals from "./pages/public/Platforms/Royals";
import X2 from "./pages/public/Platforms/X2";
import MilkyWays from "./pages/public/Platforms/MilkyWay";
import Contact from "./pages/public/contact";
import SignUp from "./pages/public/sign-up";
import SignIn from "./pages/public/SignIn";
import ResetPassword from "./pages/public/ResetPassword";
import Leader from "./pages/private/Leader";
import Dashboard from "./pages/private/Dashboard";
import Finances from "./pages/private/Finances";
import Team from "./pages/private/Team";
import KeplerTables from "./pages/private/Kepler";
import KeplerTable from "./pages/private/Kepler/Table";
import GlieseTable from "./pages/private/Gliese/Table";
import GlieseTables from "./pages/private/Gliese";
import AidaTables from "./pages/private/Aida";
import AidaTable from "./pages/private/Aida/Table";
import RocketsTables from "./pages/private/Rockets";
import RocketsTable from "./pages/private/Rockets/Table";
import IonTables from "./pages/private/Ion";
import IonTable from "./pages/private/Ion/Table";
import RoyalsTables from "./pages/private/Royals";
import RoyalsTable from "./pages/private/Royals/Table";
import X2Tables from "./pages/private/X2";
import X2Table from "./pages/private/X2/Table";
import MilkyWay from "./pages/private/MilkyWay";
import MyPlanets from "./pages/private/MilkyWay/MyPlanets";
import Settings from "./pages/private/Settings";
import MyMaterial from "./pages/private/MyMaterial";
import TelegramBot from "./pages/private/MyMaterial/Bot";
import News from "./pages/private/News";
import Casino from "./pages/private/Game";
import NukeWorld from "./pages/private/Casino/nuke_world";
import RaccoonTales from "./pages/private/Casino/Raccoon_Tales";
import ForestDreams from "./pages/private/Casino/Forest_Dreams";

export const publicRouteConfig = [
    {
        id: '0',
        path: r.root,
        component: Home,
        exact: true,
    },
  {
    id: '1',
    path: r.authors,
    component: Authors,
    exact: true,
  },
  {
    id: '2',
    path: r.platforms,
    component: Platform,
    exact: true,
  },
  {
    id: '3',
    path: r.platformsKepler,
    component: Kepler,
    exact: true,
  },
  {
    id: '4',
    path: r.platformsGliese,
    component: Gliese,
    exact: true,
  },
  {
    id: '5',
    path: r.platformsAida,
    component: Aida,
    exact: true,
  },
  {
    id: '6',
    path: r.platformsRockets,
    component: Rockets,
    exact: true,
  },
  {
    id: '7',
    path: r.platformsIon,
    component: Ion,
    exact: true,
  },
  {
    id: '8',
    path: r.platformsRoyals,
    component: Royals,
    exact: true,
  },
  {
    id: '9',
    path: r.platformsX2,
    component: X2,
    exact: true,
  },
  {
    id: '10',
    path: r.platformsMilkyWay,
    component: MilkyWays,
    exact: true,
  },
  {
    id: '11',
    path: r.platformsContact,
    component: Contact,
    exact: true,
  },
  {
    id: '12',
    path: r.signUp,
    component: SignUp,
    exact: true,
  },
  {
    id: '13',
    path: r.signIn,
    component: SignIn,
    exact: true,
  },
  {
    id: '14',
    path: r.resetPassword,
    component: ResetPassword,
    exact: true,
  },
]
export const panelRouteConfig =[
    {
        id: '15',
        path: r.leader,
        component: Leader,
        exact: true,
    },
  {
    id: '16',
    path: r.dashboard,
    component: Dashboard,
    exact: true,
  },
  {
    id: '17',
    path: r.finances,
    component: Finances,
    exact: true,
  },
  {
    id: '18',
    path: r.team,
    component: Team,
    exact: true,
  },
  //Kepler
  {
    id: '19',
    path: r.kepler,
    component: KeplerTables,
    exact: true,
  },
  {
    id: '20',
    path: [r.personalKepler, r.tableKepler],
    component: KeplerTable,
    exact: true,
  },
  //Gliese
  {
    id: '21',
    path: r.gliese,
    component: GlieseTables,
    exact: true,
  },
  {
    id: '22',
    path: [r.personalTableGliese, r.tableGliese],
    component: GlieseTable,
    exact: true,
  },
  //Aida
  {
    id: '23',
    path: r.aida,
    component: AidaTables,
    exact: true,
  },
  {
    id: '24',
    path: [r.personalTableaida, r.tableaida],
    component: AidaTable,
    exact: true,
  },
  //Rockets
  {
    id: '25',
    path: r.rockets,
    component: RocketsTables,
    exact: true,
  },
  {
    id: '26',
    path: [r.personalTableRockets, r.tableRockets],
    component: RocketsTable,
    exact: true,
  },
  //ion
  {
    id: '27',
    path: r.ion,
    component: IonTables,
    exact: true,
  },
  {
    id: '28',
    path: [r.personalTableion, r.tableion],
    component: IonTable,
    exact: true,
  },
  //Royals
  {
    id: '29',
    path: r.royal,
    component: RoyalsTables,
    exact: true,
  },
  {
    id: '30',
    path: [r.personalTableroyal, r.tableroyal],
    component: RoyalsTable,
    exact: true,
  },
  //X2
  {
    id: '31',
    path: r.x2,
    component: X2Tables,
    exact: true,
  },
  {
    id: '32',
    path: [r.personalTablex2, r.tablex2],
    component: X2Table,
    exact: true,
  },
  //MilkyWay
  {
    id: '33',
    path: r.milkyway,
    component: MilkyWay,
    exact: true,
  },
  {
    id: '34',
    path: r.milkywayPlanets,
    component: MyPlanets,
    exact: true,
  },
  //Settings
  {
    id: '35',
    path: r.settings,
    component: Settings,
    exact: true,
  },
  {
    id: '36',
    path: r.materials,
    component: MyMaterial,
    exact: true,
  },
  {
    id: '37',
    path: r.bot,
    component: TelegramBot,
    exact: true,
  },
  {
    id: '38',
    path: [r.news, r.newsItem],
    component: News,
    exact: true,
  },
  {
    id: '39',
    path: r.casino,
    component: Casino,
    exact: true,
  },
  {
    id: '40',
    path: r.nukeWorld,
    component: NukeWorld,
    exact: true,
  },
  {
    id: '41',
    path: r.raccoonTales,
    component: RaccoonTales,
    exact: true,
  },
  {
    id: '41',
    path: r.forestDreams,
    component: ForestDreams,
    exact: true,
  },
]
