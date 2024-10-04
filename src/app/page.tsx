
'use client'
import ReactFullpage from '@fullpage/react-fullpage'
import Navbar from './components/Navbar'
import Banner from './components/home/Banner'
import Footer from './components/Footer'
import ContactC from './components/contact/Contact'
import Music from './components/home/Music'
import ServiceS from './components/home/ServiceS'
import ProjectS from './components/home/ProjectS'
import VideoS from './components/home/VideoS'
import AboutS from './components/home/AboutS'
import Loading from './components/Loading'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  const [loaded, setLoaded] = useState<boolean>(true)

  return (
    <>
      {
        loaded ? (
          <Loading
            loading={loading}
            onLoad={() => {
              setLoading(false)
              setTimeout(() => {
                setLoaded(false)
              }, 1000)
            }}
          />
        ) : (
          <>
            <Navbar />
            <ReactFullpage
              navigation
              credits={{
                enabled: false
              }}
              touchSensitivity={5}
              scrollingSpeed={1000}
              render={({ fullpageApi }) => {

                return (
                  <ReactFullpage.Wrapper>
                    <Banner route={fullpageApi} />
                    <AboutS />
                    <VideoS />
                    <ProjectS />
                    <ServiceS />
                    <Music />
                    <ContactC />
                    <Footer />
                  </ReactFullpage.Wrapper>
                )
              }
              }
            />
          </>
        )}


    </>


  )
}
