import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import AllowNotification from './Pages/AllowNotification';
import CodeConfirm from './Pages/CodeConfirm';
import Explore from './Pages/Explore';
import Home from './Pages/Home';
import AppLayout from './Pages/layout/AppLayout';
import PlanLayout from './Pages/layout/PlanLayout';
import PhoneConfirmation from './Pages/PhoneConfirmation';
import Profile from './Pages/Profile';
import Welcome from './Pages/Welcome';


function App() {
  return (
    <Router>
      <Route exact path={[
        '/',
        '/allow_notification',
        '/invite',
        '/code_confirm',
        '/get_username'
      ]}>
        <PlanLayout>
          <Switch >
            <Route path="/" component={Welcome} />
            <Route path="/invite" component={PhoneConfirmation} />
            <Route path="/code_confirm" component={CodeConfirm} />
            <Route path="/allow_notification" component={AllowNotification} />
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={['/home','/explore', '/profile']}>
        <AppLayout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </AppLayout>
      </Route>
    </Router>
  );
}

export default App;
