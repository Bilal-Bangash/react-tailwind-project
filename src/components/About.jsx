import aboutImg from '../assets/about.png'
import aboutImg2 from '../assets/about2.png'
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg} alt="" />
        </div>
        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our products{' '}
            <span className="text-secondary">for over 10 years.</span>
          </h2>
          <p className="text-base text-tartiary">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            ``topic sentence``.
          </p>
          <button className="btn-primary mt-5">Get Started</button>
        </div>
      </div>
      {/* second section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        <div className="md:w-1/2">
          <img src={aboutImg2} alt="" />
        </div>
        {/* about content */}
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can practice at any time{' '}
            <span className="text-secondary">convinent for you.</span>
          </h2>
          <p className="text-base text-tartiary">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            ``topic sentence``.
          </p>
          <button className="btn-primary mt-5">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default About
