<script>
  import LandingPage from "./routes/LandingPage.svelte";
  import Dashboard from "./routes/Dashboard.svelte";

  import { loggedInUser } from "./store";
  import { Router, Route } from "svelte-navigator";
  import { useSetLoggedInUser } from "./util/useSetLoggedInUser";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  import PageLayout from "./components/PageLayout.svelte";
  import CreateTemplate from "./routes/CreateTemplate.svelte";
  import TemplateView from "./routes/TemplateView.svelte";
  import UpdateTemplate from "./routes/UpdateTemplate.svelte";
  import ActiveListView from "./routes/ActiveListView.svelte";

  useSetLoggedInUser();
</script>

{#if $loggedInUser !== undefined}
  <Router>
    <div>
      <Route path="/about">
        <PageLayout showNavbar={false}>
          <LandingPage />
        </PageLayout>
      </Route>
      <PrivateRoute path="/create-template">
        <PageLayout>
          <CreateTemplate />
        </PageLayout>
      </PrivateRoute>
      <PrivateRoute path="/template/:id/update" let:params>
        <PageLayout>
          <UpdateTemplate id={params.id} />
        </PageLayout>
      </PrivateRoute>
      <PrivateRoute path="/template/:id" let:params>
        <PageLayout>
          <TemplateView id={params.id} />
        </PageLayout>
      </PrivateRoute>
      <PrivateRoute path="/list/:id" let:params>
        <PageLayout>
          <ActiveListView id={params.id} />
        </PageLayout>
      </PrivateRoute>
      <PrivateRoute path="/">
        <PageLayout>
          <Dashboard />
        </PageLayout>
      </PrivateRoute>
    </div>
  </Router>
{/if}
