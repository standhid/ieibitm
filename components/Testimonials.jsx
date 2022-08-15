// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { FreeMode, Pagination } from "swiper";
// import Image from "next/image";

// function TeamCard({ id, image, category, title, ihref, fhref, lhref }) {
//   return (
//     <div className="flex flex-col md:w-[400px] w-[300px] gap-8 bg-yellow-500 rounded-md h-[50rem]">
//       <div className="h-[400px] overflow-hidden">
//         <img src={image} alt={title} className="md:w-[400px] w-[300px] h-[600px] relative -top-32"/>
//       </div>
//       <div className="md:w-[400px] w-[300px] text-justify p-8">
//         {category}
//       </div>
//     </div>
//   );
// }

// export default function Testimonial() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         freeMode={false}
//         loop={false}
//         pagination={true}
//         autoplay={{
//           delay: 1000,
//         }}
//         breakpoints={{
//           1200: {
//             slidesPerView: 2,
//           },
//           1450: {
//             slidesPerView: 3,
//           },
//         }}
//         modules={[FreeMode, Pagination]}
//         className="mySwiper"
//       >
//           <SwiperSlide>
//           <TeamCard
//             id="1"
//             category="hi there."
//             title=" Diksha lath, President 2018-19"
//             image="/public/test (4).jpg"
//             ihref="https://www.instagram.com"
//             fhref="https://www.facebook.com"
//             lhref="https://twitter.com"
//            />
//         </SwiperSlide>
//         <SwiperSlide>
//           <TeamCard
//             id="1"
//             category=" My journey in Bizwit has been one exciting one to recall . The skills and experience I had in the society is surely going to stay with me ."
//             title="Raj Roshni, President 2021-22"
//             image="/public/test (1).jpg"
//             ihref="https://www.instagram.com/haveee_you_met_raj/"
//             fhref="https://www.facebook.com"
//             lhref="https://twitter.com"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <TeamCard
//             id="1"
//             category="My Journey at Bizwit was super amazing, i got a chance to work with some of the most talented seniors, i leaned a lot of things here, when it comes to team work and managing events, Parties and meet-ups, never go out of sight if you are in Bizwit. I've gained a lot of things from the society, i wish i had a little more time to spend time with people over here, but whatever the time was, it was the best."
//             title="Hritik Singh, Vice President 2021-22"
//             image="/public/test (2).jpg"
//             ihref="https://www.instagram.com/hritik6093/"
//             fhref="https://www.facebook.com"
//             lhref="https://twitter.com"
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <TeamCard
//             id="1"
//             category="The amount of fun I had in these last few months of college after the lockdown is way more that what I did in my 3 years of college and that was just because of a handful of crazy people I made friends with. 
//             No outsider would ever be able to even guess the amount of fun we could have just by sitting in the college parking.
//             It was just a matter of time ...
//             As soon as I connected with them it was a complete bang.
//             "
//             title="Vivian Michael, Creative Head 2021-22"
//             image="/public/test (3).jpg"
//             ihref="https://www.instagram.com/_.viviaannn/"
//             fhref="https://www.facebook.com"
//             lhref="https://twitter.com"
//           />
//         </SwiperSlide>
//       </Swiper>
//     </>
//   );
// }
