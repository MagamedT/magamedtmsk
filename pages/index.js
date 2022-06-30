
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecentPost from '../components/RecentPost'
import Footer from '../components/Footer'
import Information from '../components/Information'
import RecentProject from '../components/RecentProject'


const Home = () => {
  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>

      <Header />
      
      <main className="grow">
          <Hero />
          <RecentPost />
          <RecentProject />
          
      </main>

      <Footer />
    </div>
  )
}

export default Home
