let shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Francisco, CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Francisco, CA",
  },
  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Francisco, CA",
  },
];

let showsDisplay = document.querySelector(".shows__display");

function displayShows(shows) {
  //   showsDisplay.innerHTML = "";
  shows.forEach(function (show) {
    // create a show card and add to the show display area
    let showCard = document.createElement("div");
    showCard.classList.add("show__card");
    showsDisplay.appendChild(showCard);

    //Create comment Image and append to comment
    // let commentImage = document.createElement("div");
    // commentImage.classList.add("commentImage");
    // commentCard.appendChild(commentImage);

    //create show date and append to shows
    let showDate = document.createElement("p");
    showDate.classList.add("showDate");
    showDate.innerText = show.Date;
    showCard.appendChild(showDate);

    //create a venue and append to shows
    let showVenue = document.createElement("p");
    showVenue.classList.add("commentTime");
    showVenue.innerText = show.Venue;
    showCard.appendChild(showVenue);

    //create a location text and append to shows
    let showLocation = document.createElement("p");
    showLocation.classList.add("showLocation");
    showLocation.innerText = show.Location;
    showCard.appendChild(showLocation);
  });
}

displayShows(shows);
