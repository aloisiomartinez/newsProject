import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewReport from './pages/NewReport';
import EditReport from './pages/EditReport';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" exact component={NewReport} />
      <Route path="/edit/:id" exact component={EditReport} />
    </Switch>
  );
}
