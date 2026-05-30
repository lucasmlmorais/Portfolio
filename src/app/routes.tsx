import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Work } from "./pages/Work";
import { CaseStudyCMS } from "./pages/CaseStudyCMS";
import { CaseStudyOrdering } from "./pages/CaseStudyOrdering";
import { About } from "./pages/About";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "work", Component: Work },
      { path: "case-study/cms-migration", Component: CaseStudyCMS },
      { path: "case-study/ordering-optimization", Component: CaseStudyOrdering },
      { path: "about", Component: About },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
