import FeaturesSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import SignupForm from "./components/SignUp"
import SocialMediaPost from "./components/SocialMediaPost"
import StylePhotos from "./components/StylePhotos"


function App() {

  return (
    <>
    <div className="font-inter">

    <Navbar/>
    <HeroSection/>
    <FeaturesSection/>
    <SocialMediaPost/>
    <StylePhotos/>
    <SignupForm/>
    <Footer/>
    </div>
    </>
  )
}

export default App
