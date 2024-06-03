import { useState } from 'react'
import GreenDot from '../assets/green-dot.png'
import YellowDot from '../assets/yellow-dot.png'
import RedDot from '../assets/red-dot.png'

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false)

  const packages = [
    {
      name: 'Start',
      monthlyPrcie: 19,
      yearlyPrice: 199,
      description:
        'Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Reprehenderit, deleniti!',
      features: [
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        {
          descr: 'Lorem ipsum dolor sit amet dolor sit amet.',
          icon: YellowDot,
        },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
      ],
    },
    {
      name: 'Advance',
      monthlyPrcie: 39,
      yearlyPrice: 399,
      description:
        'Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Reprehenderit, deleniti!',
      features: [
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        {
          descr: 'Lorem ipsum dolor sit amet dolor sit amet.',
          icon: YellowDot,
        },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
      ],
    },
    {
      name: 'Premium',
      monthlyPrcie: 59,
      yearlyPrice: 599,
      description:
        'Lorem ipsum dolor sit amet dolor sit amet consectetur adipisicing elit. Reprehenderit, deleniti!',
      features: [
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: GreenDot },
        {
          descr: 'Lorem ipsum dolor sit amet dolor sit amet.',
          icon: YellowDot,
        },
        { descr: 'Lorem ipsum dolor sit amet dolor sit amet.', icon: RedDot },
      ],
    },
  ]
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the ``topic
          sentence``.
        </p>
        {/* price toggle */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-2 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-200 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  isYearly ? 'bg-primary ml-2 translate-x-6' : 'bg-gray-500'
                }`}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>
      {/* packages */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((item, index) => (
          <div
            key={index}
            className="border py-10 md:px-4 px-6 rounded-lg shadow-3xl"
          >
            <h3 className="text-3xl font-bold text-primary text-center">
              {item.name}
            </h3>
            <p className="text-base text-center text-tartiary mt-5">
              {item.description}
            </p>
            <p className="text-4xl text-center font-bold text-secondary mt-5">
              ${isYearly ? item.yearlyPrice : item.monthlyPrcie}
              <span className="text-base text-tartiary font-medium">
                /{isYearly ? 'year' : 'month'}
              </span>
            </p>
            <ul className="space-y-2 px-4 mt-4">
              {item?.features?.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2">
                  <img src={feature.icon} alt="" className="w-4 h-4" />
                  <p className="text-base text-tartiary">{feature.descr}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
