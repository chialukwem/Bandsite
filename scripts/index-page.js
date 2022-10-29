let defaultCommentsArray = [
  {
    Name: "Connor Walton",
    Timestamp: "02/17/2021",
    Comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    Name: "Emilie Beach",
    Timestamp: "01/09/2021",
    Comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incrdible day.",
  },

  {
    Name: "Miles Acosta",
    Timestamp: "12/20/2022",
    Comment:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

let commentForm = document.querySelector("#commentForm");
let commentsDisplay = document.querySelector(".comments__display");

function displayComment(comments) {
  commentsDisplay.innerHTML = "";
  comments.forEach(function (comment) {
    let commentCard = document.createElement("div");
    commentCard.classList.add("comment__name-container");
    commentsDisplay.appendChild(commentCard);

    let commentImage = document.createElement("img");
    commentImage.classList.add("commentImage");
    commentCard.appendChild(commentImage);

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("comment__items");
    commentCard.appendChild(nameContainer);

    let commentName = document.createElement("p");
    commentName.classList.add("commentName");
    commentName.innerText = comment.Name;
    nameContainer.appendChild(commentName);

    let commentTime = document.createElement("p");
    commentTime.classList.add("commentTime");
    commentTime.innerText = comment.Timestamp;
    nameContainer.appendChild(commentTime);

    let commentText = document.createElement("p");
    commentText.classList.add("commentText");
    commentText.innerText = comment.Comment;
    commentCard.appendChild(commentText);
  });
}

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = event.target.name.value;
  const commentValue = event.target.comment.value;
  const timeStamp = new Date();

  const newComment = {
    Name: nameValue,
    Comment: commentValue,
    Timestamp: timeStamp.toLocaleDateString(),
  };
  defaultCommentsArray.unshift(newComment);

  displayComment(defaultCommentsArray);
  event.target.reset();
});

displayComment(defaultCommentsArray);
