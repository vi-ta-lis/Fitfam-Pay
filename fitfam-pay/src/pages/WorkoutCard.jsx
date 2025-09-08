import { useState } from "react";

export default function WorkoutCard({ workout }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Format the body part and target for display
  const formatText = (text) => {
    return (
      text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/g, " $1")
    );
  };

  return (
    <div className="workout-card">
      <div className="card-image-container">
        {!imageLoaded && !imageError && (
          <div className="image-placeholder">
            <div className="placeholder-spinner"></div>
          </div>
        )}

        {imageError ? (
          <div className="image-error">
            <span className="error-icon">🏋️‍♂️</span>
            <p>Image unavailable</p>
          </div>
        ) : (
          <img
            src={`https://corsproxy.io/?${encodeURIComponent(workout.gifUrl)}`}
            alt={workout.name}
            className={`card-image ${imageLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            crossOrigin="anonymous"
          />
        )}

        <div className="card-overlay">
          <span className="body-part-badge">
            {formatText(workout.bodyPart)}
          </span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{formatText(workout.name)}</h3>

        <div className="card-details">
          <div className="detail-item">
            <span className="detail-label">Target:</span>
            <span className="detail-value">{formatText(workout.target)}</span>
          </div>

          <div className="detail-item">
            <span className="detail-label">Equipment:</span>
            <span className="detail-value">
              {formatText(workout.equipment)}
            </span>
          </div>
        </div>

        {workout.instructions && workout.instructions.length > 0 && (
          <div className="card-instructions">
            <h4>Instructions:</h4>
            <ul>
              {workout.instructions.slice(0, 3).map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
              {workout.instructions.length > 3 && (
                <li className="more-instructions">
                  +{workout.instructions.length - 3} more steps...
                </li>
              )}
            </ul>
          </div>
        )}

        {workout.secondaryMuscles && workout.secondaryMuscles.length > 0 && (
          <div className="secondary-muscles">
            <span className="muscles-label">Secondary muscles:</span>
            <div className="muscles-tags">
              {workout.secondaryMuscles.map((muscle, index) => (
                <span key={index} className="muscle-tag">
                  {formatText(muscle)}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
