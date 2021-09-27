import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewReport from './pages/NewReport';
// import EditContact from './pages/EditContact';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewReport} />
      {/* <Route path="/edit/:id" exact component={EditContact} />  */}
    </Switch>
  );
}
