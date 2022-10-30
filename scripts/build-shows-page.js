const link =
  "https://project-1-api.herokuapp.com/showdates?api_key=725f8d16-faaf-4a24-9ab4-b99a62a72a3c";

const showsDisplay = document.querySelector(".shows__display");

const showTable = () => {
  const getShows = axios.get(link);
  getShows.then((response) => {
    const showsArray = response.data;

    showsArray.forEach((show) => {
      const showCard = document.createElement("div");
      showCard.classList.add("show__card");
      showsDisplay.appendChild(showCard);

      const showDate = document.createElement("p");
      const dateLabel = document.createElement("p");
      dateLabel.innerHTML = "DATE";
      dateLabel.classList.add("show__label");
      showCard.appendChild(dateLabel);

      showDate.classList.add("showDate");
      showDate.innerText = new Date(Number(show.date)).toDateString();
      showCard.appendChild(showDate);

      const venueLabel = document.createElement("p");
      venueLabel.innerHTML = "VENUE";
      venueLabel.classList.add("show__label");
      showCard.appendChild(venueLabel);

      const showVenue = document.createElement("p");
      showVenue.classList.add("showPlace");
      showVenue.innerText = show.place;
      showCard.appendChild(showVenue);

      const locationLabel = document.createElement("p");
      locationLabel.innerHTML = "LOCATION";
      locationLabel.classList.add("show__label");
      showCard.appendChild(locationLabel);

      const showLocation = document.createElement("p");
      showLocation.classList.add("showLocation");
      showLocation.innerText = show.location;
      showCard.appendChild(showLocation);

      const showButton = document.createElement("button");
      showButton.classList.add("button");
      showCard.appendChild(showButton);
      showButton.innerHTML = "BUY TICKETS";
    });
  });
};

showTable();
