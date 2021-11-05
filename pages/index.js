import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Album from "../containers/Album/Album";
import AboutUs from "../containers/AboutUs/AboutUs";
import Navigation from "../containers/Navigation/Navigation";

export default function Home() {
  return (
    <>
    <Navigation />
    <main>
      <Album />
      <AboutUs />
    </main>
    </>
  )
}
