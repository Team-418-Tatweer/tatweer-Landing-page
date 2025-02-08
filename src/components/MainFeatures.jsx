import { FaChartLine, FaTruck, FaBoxes, FaBrain, FaUsers, FaCogs } from "react-icons/fa";
import FeatureBox from "./box_featuer";

export default function MainFeatures() {
  const features = [
    {
      title: "Sales & Forecasting",
      description: "AI-driven demand prediction based on historical sales data.",
      Icon: FaChartLine,
    },
    {
      title: "Logistics & Tracking",
      description: "Real-time delivery tracking and route optimization.",
      Icon: FaTruck,
    },
    {
      title: "Inventory Management",
      description: "Live stock monitoring with automated restocking alerts.",
      Icon: FaBoxes,
    },
    {
      title: "AI Decision Support",
      description: "Smart recommendations for business efficiency and cost reduction.",
      Icon: FaBrain,
    },
    {
      title: "Team Collaboration",
      description: "Seamless communication between departments for better workflow.",
      Icon: FaUsers,
    },
    {
      title: "Smart Planning",
      description: "Automated scheduling for production and supply chain management.",
      Icon: FaCogs,
    },
  ];

  return (
    <section className="bg-[url('/images/main_features/subtract.svg')] bg-center bg-no-repeat">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold">Main Features</h1>
        <p className="text-gray-500 mt-2">
          Key functionalities that enhance your business operations.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {features.map((feature, index) => (
          <FeatureBox key={index} title={feature.title} description={feature.description} Icon={feature.Icon} />
        ))}
      </div>
    </section>
  );
}
