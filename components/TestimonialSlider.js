// testimonial data
const testimonialSlider = [
    {
      image: '/t-avt-3.png',
      name: 'Junaid Amin',
      position: 'Client',
      message:
        'Exceptional Shopify store! Transformed my business with seamless design, user-friendly interface, and an instant boost to online presence. Impressive!',
    },
    {
      image: '/t-avt-2.png',
      name: 'Olivia',
      position: 'Customer',
      message:
        'Outstanding service! Responsive, creative, and delivered beyond expectations. A pleasure to work with. Highly recommend for top-notch quality.',
    },
    {
      image: '/t-avt-1.png',
      name: 'Amelia',
      position: 'Customer',
      message:
        'Exceptional work! Meticulous, innovative, and dedicated to perfection. Their expertise brought my vision to life',
    },
  ];
  
  // import swiper react components
  import { Swiper, SwiperSlide } from "swiper/react";
  
  //import swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  
  // import required modules
  import { Navigation, Pagination } from "swiper";
  
  // icons
  import { FaQuoteLeft } from "react-icons/fa";
  // next image
  import Image from "next/image";
  
  const TestimonialSlider = () => {
    return <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {
        testimonialSlider.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                {/* avatar name position */}
                <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                  <div className="flex flex-col justify-center text-center">
                    {/* Avatar */}
                    <div className="mb-2 mx-auto">
                      <Image src={person.image} alt={'person'} width={100} height={100} />
                    </div>
                    {/* Name */}
                    <div className="text-lg">{person.name}</div>
                    {/* Position */}
                    <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                  </div>
                </div>
                {/* Quote and message */}
                <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                  {/* quote icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                  </div>
                  {/* message */}
                  <div className="xl:text-lg text-center md:text-left">{person.message}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>;
  };
  
  export default TestimonialSlider;
  
  