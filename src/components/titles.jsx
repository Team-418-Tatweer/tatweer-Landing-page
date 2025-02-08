import Image from "next/image";

export default function Titles() {
    const titleData = [
      {
        title: "Easily Plan Productions, Evenets..",
        description:
          "You can manage and plan productions for anytime and shared across all the users in the platforme.",
        imageSrc: "/images/titles/productionplanning.png",
      },
      {
        title: "Accurate Forecasting sales with powerful AI agents",
        description:
          "Our AI agents can facilitate your decision making, need a 7 days forecasting? we’ll cover you.",
        imageSrc: "/images/titles/forecastingresults.png",
      },
      {
        title: "AUTOMATED ALERTS & NOTIFICATIONS",
        description:
          "Instant alerts for shipment delays, weather disruptions, and inventory shortages to keep operations running smoothly.",
        imageSrc: "/images/titles/6.externalmarket&environmentalfactorspage.png",
      },
      {
        title: "AUTOMATED ALERTS & NOTIFICATIONS",
        description:
          "Instant alerts for shipment delays, weather disruptions, and inventory shortages to keep operations running smoothly.",
        imageSrc: "/images/titles/6.externalmarket&environmentalfactorspage.png",
      },
    ];
  
    return (
      <section className="mt-32">
        {titleData.map((item, index) => (
          <div
            key={index}
            className={`flex ${
              index % 2 === 0 ? "justify-between" : "flex-row-reverse justify-between"
            } items-center`}
          >
            <Image  src={item.imageSrc} width='800' height='200' alt={item.title} />
            <div className={`max-w-md p-4 ${index % 2 === 0 ? "mr-24" : "ml-16"}`}>
              <div className="flex items-center mb-2">
                <span className="text-blue-500 text-5xl mr-2">•</span>
                <h1 className="text-2xl font-bold">{item.title}</h1>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-blue-500 text-2xl mr-2">⎯</span>
              </div>
              <p className="text-gray-500 text-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
  