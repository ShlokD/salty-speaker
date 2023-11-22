import Router, { Route } from "preact-router";
import Header from "./header";
import Home from "./home";
import Shop from "./shop";
export function App() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main className="flex flex-col w-full min-h-screen">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Router>
      </main>
    </div>
  );
}
