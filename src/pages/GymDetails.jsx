import GymDetailsCard from "../components/GymDetailsCard";
import Gym from "../assets/gym-details.jpg";

const sampleGym = {
  name: "Praise Edoho Gym",
  image: Gym,
  location: "Lekki Phase 1, Eket",
  description:
    "A state-of-the-art gym facility with the latest equipment and certified trainers.",
  features: [
    "24/7 Access to drinking Garri",
    "Personal Garri drinking coaches",
    "Groundnut",
    "Salt",
  ],
  price: 8000,
};

export default function GymDetails() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Gym Details</h1>
      <GymDetailsCard gym={sampleGym} />
    </div>
  );
}
