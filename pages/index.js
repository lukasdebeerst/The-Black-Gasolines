import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import Navigation from '../containers/Navigation/navigation';
import Header from "../containers/Header/header";
// import AboutUs from "../containers/AboutUs/aboutUs";
// import TourDates from "../containers/TourDates/tourDates";


export default function Home() {
  return (
    <>
    {/* <Navigation /> */}
    <main>
      <Header />
      {/* <AboutUs />
      <TourDates /> */}
    </main>
    </>
  )
}
