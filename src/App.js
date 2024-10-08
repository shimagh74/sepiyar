import React from "react";
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import EyebrowTattooCare from './pages/EyebrowTattooCare';
import EyeLinerTattooCare from './pages/EyeLinerTattooCare';
import FaqsView from './pages/Faq/FaqsView';
import LipTattooCare from './pages/LipTattooCare';
import Policies from './pages/Policies';
import Reviews from './pages/Reviews';
import Treatments from './pages/Treatments';
import NotFound from './pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Masterpage from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Masterpage />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "About", element: <About /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "EyebrowTattooCare", element: <EyebrowTattooCare /> },
      { path: "EyeLinerTattooCare", element: <EyeLinerTattooCare /> },
      { path: "LipTattooCare", element: <LipTattooCare /> },
      { path: "Faqs", element: <FaqsView /> },
      { path: "Policies", element: <Policies /> },
      { path: "Reviews", element: <Reviews /> },
      { path: "Treatments", element: <Treatments /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
