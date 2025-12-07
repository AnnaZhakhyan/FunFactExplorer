async function searchTopic() {
  const topic = document.getElementById("searchInput").value.trim();
  const box = document.getElementById("result");

  if (!topic) {
    box.innerHTML = `<p class="error">Please enter something to search!</p>`;
    return;
  }

  box.innerHTML = "Loading...";

  const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${topic}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      box.innerHTML = `<p class="error">Topic not found. Try another one!</p>`;
      return;
    }

    const data = await response.json();
    const img = data.thumbnail
      ? data.thumbnail.source
      : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    box.innerHTML = `
      <h2>${data.title}</h2>
      <img src="${img}" alt="${data.title}">
      <p><strong>Description:</strong> ${data.extract}</p>
      <p><a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a></p>
    `;

  } catch (err) {
    box.innerHTML = `<p class="error">Something went wrong.</p>`;
  }
}
