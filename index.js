function loadPosts(posts) {
  for (var key in posts) {
    post_data = posts[key];

    var post = document.createElement("div");
    post.classList.add("post-container");

    var user_profile = document.createElement("div");
    var profile_pic = document.createElement("img");
    var post_info = document.createElement("div");
    var username = document.createElement("p");
    var date_time = document.createElement("span");
    user_profile.classList.add("user-profile");
    profile_pic.src = "profile_pictures/" + post_data["username"] + ".png";
    username.innerText = post_data["username"];
    date_time.innerText = post_data["date_time"];
    post_info.appendChild(username);
    post_info.appendChild(date_time);
    user_profile.appendChild(profile_pic);
    user_profile.appendChild(post_info);

    var post_text = document.createElement("p");
    post_text.classList.add("post-text");
    post_text.innerText = post_data["text"];

    if (!post_data["text_only"]) {
      var image = document.createElement("img");
      image.classList.add("post-img");
      image.src = "post_pictures/" + post_data["id"] + ".png";
    }

    var post_row = document.createElement("div");
    var activity_icons = document.createElement("div");
    var likes_div = document.createElement("div");
    var likes_img = document.createElement("img");
    var likes_number = document.createElement("span");
    var comments_div = document.createElement("div");
    var comments_img = document.createElement("img");
    var comments_number = document.createElement("span");
    var shares_div = document.createElement("div");
    var shares_img = document.createElement("img");
    var shares_number = document.createElement("span");
    post_row.classList.add("post-row");
    activity_icons.classList.add("activity-icons");
    likes_img.src = "images/" + "like.png";
    likes_number.innerText = post_data["likes"];
    comments_img.src = "images/" + "comment.png";
    comments_number.innerText = post_data["comments"];
    shares_img.src = "images/" + "share.png";
    shares_number.innerText = post_data["shares"];
    likes_div.appendChild(likes_img);
    likes_div.appendChild(likes_number);
    comments_div.appendChild(comments_img);
    comments_div.appendChild(comments_number);
    shares_div.appendChild(shares_img);
    shares_div.appendChild(shares_number);
    activity_icons.appendChild(likes_div);
    activity_icons.appendChild(comments_div);
    activity_icons.appendChild(shares_div);
    post_row.appendChild(activity_icons);

    post.appendChild(user_profile);
    post.appendChild(post_text);
    if (!post_data["text_only"]) {
      post.appendChild(image);
    }
    post.appendChild(post_row);

    document.getElementById("main-content").appendChild(post);
  }
}

function getPostsURI() {
  window
    .fetch("https://api.npoint.io/a3522306c1b343bffcd8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loadPosts(data);
    });
}

function getPostsFile() {
  window
    .fetch("/posts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      loadPosts(data[0]);
    });
}
