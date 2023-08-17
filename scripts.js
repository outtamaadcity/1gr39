function addPost() {
    const postInput = document.getElementById('postInput').value;

    // Send post data to the server
    fetch('/api/addPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post: postInput })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            renderPosts();
        }
    });
}

function renderPosts() {
    // Fetch posts from the server
    fetch('/api/getPosts')
    .then(response => response.json())
    .then(posts => {
        const postsList = document.getElementById('postsList');
        postsList.innerHTML = "";
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.textContent = post;
            postsList.appendChild(postElement);
        });
    });
}

// Load saved posts on page load
window.onload = renderPosts;
