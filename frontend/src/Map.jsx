import React, { useEffect, useState } from "react"
import FilterBox from "./FilterBox"
import "./Map.css"
import { Loader } from "@googlemaps/js-api-loader"

const Map = ({ markerList }) => {
  const [selectedOptions, setSelectedOptions] = useState(["All"])
  const [scriptLoaded, setScriptLoaded] = useState(false)

  // console.log("Props", markerList)

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyByuVqouk6934F-ZmlfjreJrXoh9nmj23w",
      version: "weekly",
    })

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps")
      const mapLocation = { lat: 38.0334654, lng: -78.5077724 }
      const RSPBaseSymbol = "./images/RSP_Sign.png"

      console.log("s:", selectedOptions)

      let map = new Map(document.getElementById("map"), {
        center: { lat: 38.0334654, lng: -78.5077724 },
        zoom: 17,
        mapId: "7383ea4d2ef1f2b",
      })

      for (const marker of markerList) {
        console.log("marker", marker)
        if (
          selectedOptions.includes(marker.type) ||
          selectedOptions.includes("All")
        ) {
          const baseSettings = {
            url: "http://127.0.0.1:8000" + marker.icon, // todo: change this (Relative path to the image)
            scaledSize: new window.google.maps.Size(10, 10), // Size of the icon
            origin: new window.google.maps.Point(0, 0), // Position of the icon's image within the sprite
          }
          const baseMarker = new google.maps.Marker({
            position: {
              lat: marker.location.latitude,
              lng: marker.location.longitude,
            },
            map,
            title: marker.name,
            icon: baseSettings,
            animation: google.maps.Animation.DROP,
          })
          map.addListener("zoom_changed", function () {
            const zoomLevel = map.getZoom()
            const newIconSize = zoomLevel // Adjust the size based on the zoom level
            baseMarker.setIcon({
              url: "http://127.0.0.1:8000" + marker.icon, // todo: replace with actual url of symbol
              scaledSize: new google.maps.Size(newIconSize, newIconSize),
            })
          })
          const InfoWindow = new window.google.maps.InfoWindow({
            content: "<h3>" + marker.detail.description + "</h3>",
          })
          // Show info window when marker is clicked
          baseMarker.addListener("click", () => {
            InfoWindow.open(map, baseMarker)
          })
        }
      }
    })
  }, [markerList, selectedOptions])

  // called when filter items are checked
  const handleFilterChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions) // set which filter items are selected
    // Perform any actions based on the selected options, such as updating the map display
  }

  return (
    <div className='map-container-container'>
      <div id='map' className='map-container'></div>
      <FilterBox
        options={["All", "Restroom", "VendingMachine", "StudyRoom"]}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Map
