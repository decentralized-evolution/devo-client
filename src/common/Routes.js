import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DevoTimeline from "../timeline/DevoTimeline";
import Initiatives from "../initiative/Initiatives";
import About from "../about/about";
import ProjectList from "../project/list/ProjectList";
import ProjectDetails from "../project/details/ProjectDetails";
import ProjectAdd from "../project/add/ProjectAdd";

export default function Routes({
  isWalletConnected,
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>

        <Route exact path="/projects" component={() => <ProjectList isWalletConnected={isWalletConnected} />}/>
        <Route exact path="/projects/add" component={ProjectAdd} />
        <Route exact path="/projects/:projectId" component={ProjectDetails} />
        <Route exact path="/governance" component={Initiatives} />
        <Route exact path="/timeline" component={DevoTimeline} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};
