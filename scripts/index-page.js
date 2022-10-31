const link =
  "https://project-1-api.herokuapp.com/comments?api_key=725f8d16-faaf-4a24-9ab4-b99a62a72a3c";

const commentForm = document.querySelector("#commentForm");
const commentsDisplay = document.querySelector(".comments__display");

const showCommentsList = () => {
  const getComments = axios.get(link);
  getComments.then((response) => {
    const commentsData = response.data;

    commentsDisplay.innerHTML = "";

    commentsData.forEach(function (comment) {
      const commentCard = document.createElement("div");
      commentCard.classList.add("comment__name-container");
      commentsDisplay.appendChild(commentCard);

      const commentImage = document.createElement("img");
      commentImage.classList.add("commentImage");
      commentCard.appendChild(commentImage);

      const nameContainer = document.createElement("div");
      nameContainer.classList.add("comment__items");
      commentCard.appendChild(nameContainer);

      const commentName = document.createElement("p");
      commentName.classList.add("commentName");
      commentName.innerText = comment.name;
      nameContainer.appendChild(commentName);

      const commentTime = document.createElement("p");
      commentTime.classList.add("commentTime");
      commentTime.innerText = new Date(comment.timestamp).toLocaleDateString(
        "en-US"
      );
      nameContainer.appendChild(commentTime);

      const commentText = document.createElement("p");
      commentText.classList.add("commentText");
      commentText.innerText = comment.comment;
      commentCard.appendChild(commentText);
    });
  });
};

showCommentsList();

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = event.target.name.value;
  const commentValue = event.target.comment.value;
  const timeStamp = new Date();

  const newComment = {
    name: nameValue,
    comment: commentValue,
    timestamp: timeStamp.toLocaleDateString(),
  };

  const addComment = axios.post(link, newComment);
  addComment.then((response) => {
    event.target.reset();
    showCommentsList();
  });

});
