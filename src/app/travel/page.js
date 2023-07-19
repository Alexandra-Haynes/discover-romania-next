
'use client'

import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TravelHeader from "../../components/TravelHeader";

import List from "../../components/List";
import Map from "../../components/Map";
import PlaceDetail from "../../components/PlaceDetail";
import { getPlacesData } from "../api/travelAdvisorApi";
import Head from "next/head";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat:45, lng: 25});
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Head>
        {/* <script
          src={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAP_API_KEY}`}
        ></script> */}
        <script src={`//maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_API_KEY}`}></script>
      </Head>

      <TravelHeader
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />

      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
};

export default Home;