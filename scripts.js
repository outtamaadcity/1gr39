function addEvent() {
    const dateInput = document.getElementById('dateInput').value;
    const eventInput = document.getElementById('eventInput').value;

    const eventsList = document.getElementById('eventsList');
    const eventElement = document.createElement('div');
    eventElement.textContent = `${dateInput}: ${eventInput}`;
    eventsList.appendChild(eventElement);
}

function addPost() {
    const postInput = document.getElementById('postInput').value;

    const postsList = document.getElementById('postsList');
    const postElement = document.createElement('div');
    postElement.textContent = postInput;
    postsList.appendChild(postElement);
}

// For the lunch menu, you can add a similar function as above or integrate it with an external API or database.
