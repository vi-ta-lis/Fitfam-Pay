import React from "react";
import Slider from "react-slick";
const testimonials = [
  {
    name: "Chioma Eze",
    image:
      "https://images.pexels.com/photos/2897044/pexels-photo-2897044.jpeg?auto=compress&cs=tinysrgb&h=400",
    text: "FitfamPay makes it so easy to pay and find great gyms. I love the experience every single time!",
  },
  {
    name: "Daniel Okoro",
    image:
      "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&h=400",
    text: "This platform is a game-changer. No queues, no stress—just search, pay, and train!",
  },
  {
    name: "Amina Bello",
    image:
      "https://images.pexels.com/photos/4666755/pexels-photo-4666755.jpeg?auto=compress&cs=tinysrgb&h=400",
    text: "From the sleek interface to the fast payment, everything just works smoothly. Highly recommend.",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="testimonial-section">
      <h2>Loved By Gym Goers</h2>
      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} />
            <p className="testimonial-text">“{t.text}”</p>
            <h4 className="testimonial-name">— {t.name}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSlider;
