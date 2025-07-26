import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const founders = [
  {
    name: "Vitalis",
    role: "Co-Founder & Frontend Engineer",
    image: "/vitalis.png",
  },
  {
    name: "Kenzy",
    role: "Co-Founder & Backend Engineer",
    image: "/kenzy.png",
  },
  {
    name: "The Edoho",
    role: "Co-Founder & Frontend Engineer",
    image: "/edoho.png",
  },
  {
    name: "Favour",
    role: "Co-Founder & Product Designer",
    image: "/favour.png",
  },
];

const FoundersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 5000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-white text-center px-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Founders</h2>
      
      {/* Centralize the slider */}
      <div className="max-w-screen-lg mx-auto">
        <Slider {...settings}>
          {founders.map((founder, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{ width: "96px", height: "96px", objectFit: "cover" }}
                  className="rounded-full mx-auto mb-3 border border-gray-300"
                />
                <h4 className="text-lg font-semibold text-gray-700">{founder.name}</h4>
                <p className="text-sm text-gray-500">{founder.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FoundersCarousel;
