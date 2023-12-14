import EffortlessConvenience from './effortlessConvenience'
import Reliable from './reliable'
import SubHero from './sub-hero.jsx'
import Subheroup from './sub-hero-up'
import Hero from '../request/'

const homePageSection = () => {
  return (
    <div className="home-page-section-1">
      <Hero />
      <Subheroup />
      <EffortlessConvenience
        title="Effortless Convenience"
        description="Our taxi app provides unparalleled convenience with a user-friendly interface, allowing you to effortlessly book rides, track your driver in real-time, and enjoy a hassle-free transportation experience."
        imageUrl="/first-img.png"
        altText="Effortless Convenience"
      />
      <Reliable />
      <EffortlessConvenience
        title="Transparent and Competitive Pricing"
        description="Experience the clarity of transparent and competitive pricing through our taxi app, where you can easily estimate fares before your journey begins, eliminating surprises and providing you with cost-effective transportation options tailored to your needs."
        imageUrl="/third-img.png"
        altText="Effortless Convenience"
      />
      <SubHero />
    </div>
  )
}

export default homePageSection
