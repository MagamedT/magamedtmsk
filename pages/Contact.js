import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Contact() {
  return (
    <div className="flex flex-col max-w-3xl mx-auto bg-[#111111] h-screen">
        <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 

        </Head>
        <Header />
        <main className="mx-4 mt-12 grow">    
            <h1 className="text-white text-4xl font-black mb-10"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact</span> 📞</h1>

            <div className="text-white">
              <h3><span className="font-medium">→ E-mail:</span> <a href = "mailto:magamed.taimeskhanov@etu.univ-cotedazur.fr">magamed.taimeskhanov@etu.univ-cotedazur.fr</a></h3>
              
            </div>
                
        </main>
        <Footer />
    </div>
  )
}

export default Contact