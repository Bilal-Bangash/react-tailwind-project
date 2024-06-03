import Banner from './shared/Banner'
import NewLetterImg from '../assets/newsletter.png'

const Newsletter = () => {
  return (
    <div
      className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12"
      id="newsletter"
    >
      <Banner
        banner={NewLetterImg}
        heading="Each student can share their discount code for friends"
        subHeading="A good example of a paragraph contains a topic sentence, details and a conclusion."
        btn1="I have a code"
      />
    </div>
  )
}

export default Newsletter
