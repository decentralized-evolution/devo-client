import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DevoTimeline from "../timeline/DevoTimeline";
import Initiatives from "../initiative/Initiatives";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/initiatives" />
        </Route>

        <Route exact path="/initiatives" component={Initiatives} />
        <Route exact path="/timeline" component={DevoTimeline} />
      </Switch>
    </div>
  );
};
