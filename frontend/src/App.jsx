import React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import axios from "axios"
import Footer from "./Footer"
import Map from "./Map"
import Nav from "./Nav"
import About from "./About"
import { gapi } from "gapi-script"
import "./App.css"

function App() {
  const [htmlContent, setHtmlContent] = useState("")
  const [markers, setMarkers] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:8000/locations/')
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }, []); // The empty array means this effect runs once after the initial render

  useEffect(() => {
    function start() {
      console.log("Initializing Google API client...")
      gapi.client
        .init({
          clientId:
            "959647849030-5lrli8u42k7j0p7i7tqvuoruv1uogg4i.apps.googleusercontent.com",
          scope: "",
        })
        .then(() => {
          console.log("Google API client initialized successfully.")
        })
        .catch((error) => {
          console.error("Error initializing Google API client:", error)
        })
    }

    console.log("Loading Google API client...")
    gapi.load("client:auth2", start)
  }, [])

  useEffect(() => {
    axios
      .get("/api/places/")
      .then((response) => {
        setMarkers(response.data)
        console.log("HTTP Response: ", response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Map markerList={markers} />} />
          <Route exact path='/maps' element={<Map markerList={markers} />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
