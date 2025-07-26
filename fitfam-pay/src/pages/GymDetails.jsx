import React from "react";

const GymDetails = ({ gym }) => {
  return (
    <div className="gym-card">
      <img className="gym-image" src={gym.image} alt={gym.name} />
      <div className="gym-info">
        <h2 className="gym-name">{gym.name}</h2>
        <p className="gym-location">{gym.location}</p>
        <p className="gym-description">{gym.description}</p>
        <ul className="gym-features">
          {gym.features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <p className="gym-price">₦{gym.price} / month</p>
        <button
          className="pay-button"
          onClick={() => alert("Redirect to payment")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default GymDetails;
