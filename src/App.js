import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';

//Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import Header from './components/Header';
import SideBar from './components/sidebarcomponent/SideBar';
import Main from './components/bodycomponent/Main';



function App() {
  return (
  <>
   <Header />
   <SideBar />
   <Main />
  </>
  );
}

export default App;
