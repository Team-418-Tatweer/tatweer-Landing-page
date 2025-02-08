export default function Titles() {
    const titleData = [
      {
        title: "LIVE SHIPMENT TRACKING",
        description:
          "24/7 real-time access to your shipment locations. Instantly share ETA updates with stakeholders during pickup or delivery.",
        imageSrc: "/images/titles/5.logistics&distributionpage1.svg",
      },
      {
        title: "SMART ROUTE OPTIMIZATION",
        description:
          "AI-driven route planning minimizes delays and fuel costs, ensuring faster deliveries with real-time traffic insights.",
        imageSrc: "/images/titles/5.logistics&distributionpage1.svg",
      },
      {
        title: "SUPPLY CHAIN VISIBILITY",
        description:
          "Monitor supplier reliability and inventory movement in real-time to prevent bottlenecks and optimize stock levels.",
        imageSrc: "/images/titles/5.logistics&distributionpage1.svg",
      },
      {
        title: "AUTOMATED ALERTS & NOTIFICATIONS",
        description:
          "Instant alerts for shipment delays, weather disruptions, and inventory shortages to keep operations running smoothly.",
        imageSrc: "/images/titles/5.logistics&distributionpage1.svg",
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
            <img src={item.imageSrc} alt={item.title} />
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
  