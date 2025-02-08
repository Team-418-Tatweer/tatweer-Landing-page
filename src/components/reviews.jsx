"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { FaAt, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const ContactItem = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-blue-500">{icon}</div>
      <p className="mt-2">{text}</p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="text-white flex items-center justify-center p-10 pb-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500">WE ARE HERE</h1>
        <h2 className="text-4xl font-bold">TO HELP YOU</h2>
        <div className="flex justify-center mt-8 space-x-16">
          <ContactItem icon={<FaAt />} text="support@synexflow.com" />
          <ContactItem icon={<FaMapMarkerAlt />} text="Cyber, Table 418 USTHB, Algiers" />
          <ContactItem icon={<FaPhone />} text="+213 555 555 555" />
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "Nadir Khouri",
    image: "https://storage.googleapis.com/a1aa/image/PWsdtREwA0mSTOJrZffCj2QmqvSzouvHsCFV4JOLvaA.jpg",
    rating: 5,
    text: "SynexFlow has completely transformed our workflow. The automation features have saved us hours of work every week!",
  },
  {
    name: "Rachid Chalal",
    image: "https://storage.googleapis.com/a1aa/image/dSykQQaZ7XFglZI9NEVTjKDPN0YqpFSylFJpIw6aDe8.jpg",
    rating: 4,
    text: "Great tool for streamlining processes! The interface is intuitive, and customer support is always helpful.",
  },
  {
    name: "Sabrina Bouzidi",
    image: "https://storage.googleapis.com/a1aa/image/O6Gl8_0g0h2SlKBpQCyWFWr5YkP-43l6zptN8jidPBI.jpg",
    rating: 5,
    text: "Absolutely love it! Our team is more productive than ever, and managing projects has never been easier.",
  },
  {
    name: "Omar Ben",
    image: "https://storage.googleapis.com/a1aa/image/O6Gl8_0g0h2SlKBpQCyWFWr5YkP-43l6zptN8jidPBI.jpg",
    rating: 3,
    text: "The platform is good, but I’d love to see more integrations with third-party apps. Looking forward to future updates!",
  },
  {
    name: "Fatima Zahra",
    image: "https://storage.googleapis.com/a1aa/image/O6Gl8_0g0h2SlKBpQCyWFWr5YkP-43l6zptN8jidPBI.jpg",
    rating: 4,
    text: "SynexFlow is a game changer for our business. It’s easy to use, and the analytics give us great insights.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[url('/images/reviews/group1000003698.png')] bg-no-repeat">
      <section className="container mx-auto mt-16 mb-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-12 mt-12">
            What do customers say about SynexFlow?
          </h1>
        </div>

        <div className="relative mb-16 mt-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 }, // 2 slides on medium screens
              1024: { slidesPerView: 3 }, // 3 slides on large screens
            }}
            navigation
            pagination={{ clickable: true }}
            className="py-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide className="mb-6" key={index}>
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                  <Image
                    src={review.image}
                    alt={`Profile picture of ${review.name}`}
                    width={100}
                    height={100}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h2 className="font-semibold text-lg">{review.name}</h2>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-4">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < review.rating ? (
                        <AiFillStar key={i} className="text-yellow-500 text-xl" />
                      ) : (
                        <AiOutlineStar key={i} className="text-gray-300 text-xl" />
                      )
                    )}
                  </div>

                  <p className="text-gray-600">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <ContactInfo />
    </section>
  );
}
