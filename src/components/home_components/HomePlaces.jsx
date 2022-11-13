import React from "react";

const places = [
  {
    id: "place1",
    img1: "/assets/place1.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place2",
    img1: "/assets/place2.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place3",
    img1: "/assets/place3.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place4",
    img1: "/assets/place4.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place5",
    img1: "/assets/place5.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place6",
    img1: "/assets/place6.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place7",
    img1: "/assets/place7.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
  {
    id: "place8",
    img1: "/assets/place8.png",
    paragraph1: "Desert King",
    paragraph2: "2345km away",
    img2: "/assets/star.png",
    paragraph3: "1MBT per night",
    paragraph4: "available for 2weeks stay",
  },
];

function HomePlaces() {
  return (
    <section className="home-places">
      <h1 className="home-places-h1">Inspiration for your next adventure</h1>
      <div className="grid-main-div">
        {places.map((place) => (
          <div className="flex-main-div">
            <img src={place.img1} alt="place1" className="home-place-img" />
            <div className="flex-div">
              <div className="inner-flex-div">
                <p>{place.paragraph1}</p>
                <p>{place.paragraph2}</p>
                <img src={place.img2} alt="star" />
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
