import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useStore } from "./store";

import { Header, Sidebar, Footer } from "@/components/layout";
import { LoadingView } from "@/components/ui";
const Home = React.lazy(() => import("@/views/Home"));
// const Login = React.lazy(() => import("@/views/Login"));
const Search = React.lazy(() => import("@/views/Search"));
const YourLibrary = React.lazy(() => import("@/views/YourLibrary"));

function Routes() {
  const { token, onLoading } = useStore();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Sidebar />
      <Footer />

      <main className="app-main">
        {onLoading ? (
          <LoadingView />
        ) : (
          <Suspense fallback={null}>
            {token ? (
              <Switch>
                <Route exact strict path="/search" component={Search} />
                <Route exact strict path="/your-library" component={YourLibrary} />
                <Route exact strict path="/home" component={Home} />
                <Redirect to="/home" />
              </Switch>
            ) : (
              {/* <Switch>
                <Route path="/login" component={Login} />
                <Redirect to="/login" />
              </Switch> */}
            )}
          </Suspense>
        )}
      </main>
    </BrowserRouter>
  );
}

export default Routes;
