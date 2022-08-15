import Image from 'next/image';

function EventCard({title,image,register}){
  return(
    <div className="relative mx-4 md:w-1/4 w-full my-16 h-[25rem] cursor-pointer group overflow-hidden">
          <div className="w-full h-full absolute brightness-75 rounded-md overflow-hidden">
            <Image
              src={image}
              layout="fill"
              alt="Award"
              objectFit="cover"
            />
          </div>
          <div className="w-full absolute px-8 py-4 text-justify md:text-2xl text-xl text-white bottom-0 bg-black opacity-75 translate-y-32 transition-transform duration-700 ease-out group-hover:translate-y-0">
            <div className="flex justify-center">
              {title}
            </div>
            <div className="mx-auto border w-max text-center my-12 px-6 py-2 rounded-lg">
              <a href={register}>
                Register
              </a>
            </div>
          </div>
        </div>
  );
}

const Events = () => {
  return (
    <>
      <div className="relative top-12">
        <div className="events-section" id="events">

        <h1 className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            Upcoming Events
          </h1>
          <div className="flex flex-wrap justify-center ">

        <EventCard title="COMING SOON" image="/events/image (35).jpg" register="https://forms.gle/vH5Ertv1rzLA9nrT8"/>
        <EventCard title="NEW EVENT" image="/events/image (35).jpg" register="https://forms.gle/vH5Ertv1rzLA9nrT8"/>
        <EventCard title="COMING SOON" image="/events/image (35).jpg" register="https://forms.gle/vH5Ertv1rzLA9nrT8"/>

        </div>
          <h1 className="sm:text-5xl text-4xl text-white uppercase text-center staatlich relative after:-bottom-4 after:absolute after:bg-gradient-to-r after:from-blue-800 after:to-blue-500 after:h-2 after:w-2/3 after:left-0 w-max mx-auto after:rounded-full animate__animated animate__fadeInDown">
            All Events
          </h1>
          <div className="events-gallery">
            <div className="column">
              <div className="event-card">
                <img className="event-poster" src="/events/image (1).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (2).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (3).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="event-card">
                <img className="event-poster" src="/events/image (4).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (5).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (6).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="event-card">
                <img className="event-poster" src="/events/image (7).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (8).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (9).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
            </div>
            <div className="column">
              <div className="event-card">
                <img className="event-poster" src="/events/image (10).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (11).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
              <div className="event-card">
                <img className="event-poster" src="/events/image (12).jpg" />
                <div className="event-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Neque dolor dolores quaerat nobis optio ea alias error eum
                  unde fugiat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
