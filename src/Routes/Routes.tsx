import Dashboard from '../Views/Dashboard';
// import Install from '../Mains/Install';
import Features from '../Views/Features';
import DemoPage from '../Demo/Demo';

const Support = () => {
    return(
        <h1>
            Support
        </h1>

    )
}


const RouteElement = [
  {
    path: '/',
    Component: Dashboard,
    label: 'Dashboard'
  },
  // {
  //   path: '/Install',
  //   Component: Install,
  //   label: 'Installation'
  // },
  {
    path: '/Features',
    Component: Features,
    label: 'Key Features',
  },
  {
    path: '/Demo',
    Component: DemoPage,
    label: 'Demo'
  }
  // {
  //   path: '/Support',
  //   Component: Support,
  //   label: 'Support',
  // },
];

export default RouteElement;