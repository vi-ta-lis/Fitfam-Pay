import React, { useEffect, useState } from "react";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import WorkoutCard from "./WorkoutCard";
import Loading from "../../src/assets/loading.gif";

export default function WorkoutExplorer() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("");

  useEffect(() => {
    const url = "https://exercisedb.p.rapidapi.com/exercises";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "561a32c078msh8ba2713828ceeb1p16df34jsnb176a5242632",
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };

    async function fetchApi() {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
        setLoader(false);
        setError(false);
        console.log(result);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoader(false);
      }
    }
    fetchApi();
  }, []);

  // Filter exercises based on search and body part
  const filteredData = data.filter((exercise) => {
    const matchesSearch = exercise.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBodyPart =
      selectedBodyPart === "" || exercise.bodyPart === selectedBodyPart;
    return matchesSearch && matchesBodyPart;
  });

  // Get unique body parts for filter
  const bodyParts = [...new Set(data.map((exercise) => exercise.bodyPart))];

  if (error) {
    return (
      <div className="workout-explorer">
        <Header />
        <div className="error-container">
          <h1>Something went wrong, please try again later.</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="workout-explorer">
      <Header />

      <div className="workout-hero">
        <h1 className="workout-title">Workout Explorer</h1>
        <p className="workout-subtitle">
          Discover exercises to build your perfect routine
        </p>
      </div>

      <div className="workout-filters">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedBodyPart}
            onChange={(e) => setSelectedBodyPart(e.target.value)}
            className="body-part-select"
          >
            <option value="">All Body Parts</option>
            {bodyParts.map((bodyPart) => (
              <option key={bodyPart} value={bodyPart}>
                {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {loader ? (
        <div className="loading-container">
          <img src={Loading} alt="loading-state" className="loading-gif" />
          <p>Loading workouts...</p>
        </div>
      ) : (
        <div className="workout-grid">
          {filteredData.length > 0 ? (
            filteredData.map((exercise) => (
              <WorkoutCard key={exercise.id} workout={exercise} />
            ))
          ) : (
            <div className="no-results">
              <p>No exercises found matching your criteria.</p>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}
