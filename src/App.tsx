import { Switch, Route, Router as WouterRouter } from "wouter";
import NotFound from "@/pages/not-found";
import Portfolio from "@/pages/Portfolio";

import PerformanceOptimization from "@/pages/case-studies/PerformanceOptimization";
import AIEvaluationFramework from "@/pages/case-studies/AIEvaluationFramework";
import MillionRecordsStreaming from "@/pages/case-studies/MillionRecordsStreaming";
import RBAC from "@/pages/case-studies/RBAC";
import SentryOptimization from "@/pages/case-studies/SentryOptimization";
import ReactWebComponentLibrary from "@/pages/case-studies/ReactWebComponentLibrary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/case-study/performance-optimization" component={PerformanceOptimization} />
      <Route path="/case-study/ai-evaluation-framework" component={AIEvaluationFramework} />
      <Route path="/case-study/million-records-streaming" component={MillionRecordsStreaming} />
      <Route path="/case-study/rbac" component={RBAC} />
      <Route path="/case-study/sentry-optimization" component={SentryOptimization} />
      <Route path="/case-study/react-web-component-library" component={ReactWebComponentLibrary} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;