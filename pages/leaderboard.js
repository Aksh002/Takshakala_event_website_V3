import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LeaderboardHeading from '@components/Leaderboard/LeaderboardHeading'
import Footer from '@components/Footer/Footer'
import Navbar from '@components/Nav/Navbar'
import LeaderboardSmallData from '@components/Leaderboard/LeaderboardSmallData'

const leaderboard = () => {
    return (
        <>
        <div className = {styles.container}>
            <Head>
                <title>NEURA AI | Leaderboard</title>
                <meta
                    name="description"
                    content="Neura AI Flagship Tech Event"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <LeaderboardHeading />
            <LeaderboardSmallData />    
        </div>
        <Footer />
        </>
    )
}

export default leaderboard
