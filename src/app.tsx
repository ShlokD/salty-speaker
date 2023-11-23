import Router, { Route } from "preact-router";
import { useEffect, useState } from "preact/hooks";
import Footer from "./footer";
import Header from "./header";
import Home from "./home";
import Shop from "./shop";
export function App() {
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (location.pathname !== url) {
        setUrl(location.pathname);
      }
    });
    const config = { subtree: true, childList: true };
    observer.observe(document, config);
  }, [url]);

  const isHome = url === "/";
  return (
    <div
      className={`flex flex-col w-full min-h-screen ${
        isHome ? "" : "relative"
      }`}
    >
      <Header />
      <main
        className={`flex flex-col w-full min-h-screen ${isHome ? "" : "pb-20"}`}
      >
        <Router>
          <Route path="/" component={Home} />
          <Route path="/shop" component={Shop} />
        </Router>
      </main>
      <Footer />
    </div>
  );
}
