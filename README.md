**Twitify App!**


Twitify is a user-friendly application that lets you seamlessly browse other users' tweets, and follow and unfollow them, all through an elegantly designed interface built with React.


The Tweets page retrieves an array of objects (users) from the backend (in this case, using mockapi.io) and displays a user card for each one. Each request is limited to 3 objects, and clicking the "Load more" button triggers another request.

Each User Card on Twitify displays useful information such as the number of followers, number of tweets, and avatar, as well as a "Follow/Unfollow" button. Upon entering the application, a "following" field is created in your local storage, simulating an authorization. This field contains an array of users you are following, and clicking on the "Follow/Following" button updates both the array and the follower count on both the UI and backend.
