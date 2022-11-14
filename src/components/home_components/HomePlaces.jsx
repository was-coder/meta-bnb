import React from "react";
import homePlaces from "../Data";
import { stars } from "../Data";

function HomePlaces() {
  return (
    <section className="home-places">
      <h1 className="home-places-h1">Inspiration for your next adventure</h1>
      <div className="grid-main-div">
        {homePlaces.map((place) => (
          <div className="flex-main-div" key={place.id}>
            <img src={place.img1} alt="place1" className="home-place-img" />
            <div className="flex-div">
              <div className="inner-flex-div">
                <p>{place.paragraph1}</p>
                <p>{place.paragraph2}</p>
                <div className="star-div">
                  {stars.map((star) => {
                    return <img src={star} alt="star" />;
                  })}
                </div>
              </div>
              <div className="inner-flex-div inner-flex-div2">
                <h6>{place.paragraph3}</h6>
                <p>{place.paragraph4}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePlaces;
