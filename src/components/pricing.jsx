import Image from "next/image";

const PricingCard = ({ title, description, price, features, buttonText, highlight }) => {
  return (
    <div className={`border ${highlight ? "border-blue-500" : "border-blue-500 border-2"} rounded-lg p-6 w-full h-[90%] md:w-1/3`}>
      <div className="flex items-center mb-4 h-[90%] ">
        <Image
          alt="Plan Icon"
          className="w-10 h-10"
          src="https://storage.googleapis.com/a1aa/image/uCihpPdHJvlj3w51qaKHNV4FaYqzXBDMuf7wu2wMxPM.jpg"
          width={40}
          height={40}
        />
        <h2 className="text-xl font-semibold ml-4">{title}</h2>
      </div>
      <p className="text-gray-500 mb-4">{description}</p>
      <h3 className="text-2xl font-semibold mb-4">{price}</h3>
      <ul className="mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <i className="fas fa-check text-blue-500 mr-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 rounded-lg ${highlight ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default function Pricing() {
  const plans = [
    {
      title: "Starter Plan",
      description: "Perfect for individuals or small teams getting started.",
      price: "FREE",
      features: [
        "Basic analytics & reports",
        "Limited project tracking",
        "Community support",
        "Access to essential features",
      ],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Pro Plan",
      description: "Advanced tools for growing businesses and teams.",
      price: "$29/month",
      features: [
        "Unlimited project tracking",
        "Priority customer support",
        "Advanced analytics & insights",
        "Collaboration & workflow automation",
      ],
      buttonText: "Upgrade Now",
      highlight: false,
    },
    {
      title: "Enterprise Plan",
      description: "Customized solutions for large businesses and enterprises.",
      price: "Contact Us",
      features: [
        "Dedicated account manager",
        "Custom integrations & API access",
        "Advanced security & compliance",
        "24/7 premium support",
      ],
      buttonText: "Contact Us",
      highlight: true,
    },
  ];

  return (
    <section className="container mx-auto w-full h-[90%]">
      <div className="text-center py-12">
        <h1 className="text-3xl font-semibold">Flexible Plans for Every Team</h1>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs and scale as you grow.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-4 w-full h-[90%]">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
