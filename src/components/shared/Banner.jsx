import PropTypes from 'prop-types'
const Banner = ({ banner, heading, subHeading, btn1, btn2 }) => {
  return (
    <div className="gradient-bg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* banner content */}
        <div>
          <img src={banner} alt="" className="lg:h-[386px]" />
        </div>
        <div className="md:w-3/5">
          <h2 className="md:text-7xl text-4xl font-bold text-white mb-6 leading-[110px]">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subHeading}</p>
          <div className="space-x-5 space-y-4">
            <button className="btn-primary">{btn1}</button>
            <button className="btn-primary">{btn2}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

Banner.propTypes = {
  banner: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
}
export default Banner
