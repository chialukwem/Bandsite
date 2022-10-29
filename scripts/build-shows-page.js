const link =
  "https://project-1-api.herokuapp.com/showdates?api_key=725f8d16-faaf-4a24-9ab4-b99a62a72a3c";

let showsDisplay = document.querySelector(".shows__display");

const showTable = () => {
  const getShows = axios.get(link);
  getShows.then((response) => {
    const showsArray = response.data;

    showsArray.forEach((show) => {
      let showCard = document.createElement("div");
      showCard.classList.add("show__card");
      showsDisplay.appendChild(showCard);

      let showDate = document.createElement("p");
      let dateLabel = document.createElement("p");
      dateLabel.innerHTML = "DATE";
      dateLabel.classList.add("show__label");
      showCard.appendChild(dateLabel);

      showDate.classList.add("showDate");
      showDate.innerText = new Date(Number(show.date)).toDateString();
      showCard.appendChild(showDate);

      let venueLabel = document.createElement("p");
      venueLabel.innerHTML = "VENUE";
      venueLabel.classList.add("show__label");
      showCard.appendChild(venueLabel);

      let showVenue = document.createElement("p");
      showVenue.classList.add("showPlace");
      showVenue.innerText = show.place;
      showCard.appendChild(showVenue);

      let locationLabel = document.createElement("p");
      locationLabel.innerHTML = "LOCATION";
      locationLabel.classList.add("show__label");
      showCard.appendChild(locationLabel);

      let showLocation = document.createElement("p");
      showLocation.classList.add("showLocation");
      showLocation.innerText = show.location;
      showCard.appendChild(showLocation);

      let showButton = document.createElement("button");
      showButton.classList.add("button");
      showCard.appendChild(showButton);
      showButton.innerHTML = "BUY TICKETS";
    });
  });
};

showTable();
