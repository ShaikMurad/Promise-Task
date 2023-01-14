// Function to fetch a random fox image
function getRandomFox() {
    return new Promise((resolve, reject) => {
      fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then((data) => resolve(data.image))
        .catch((error) => reject(error));
    });
  }
  
  // Using the promise
  getRandomFox()
    .then((imageUrl) => {
      console.log(imageUrl);
      // Example: https://randomfox.ca/images/146.jpg
    })
    .catch((error) => {
      console.log(error);
    });
 
    getRandomFox()
    .then((imageUrl) => {
      // Create an image element
      const img = document.createElement("img");
      // Set the src of the image to the URL
      img.src = imageUrl;
      // Append the image to the body
      document.body.appendChild(img);
    })
    .catch((error) => {
      console.log(error);
    });
  
    document.getElementById("reload").addEventListener("click", function(){
        location.reload();
    });
    
  
  
  
  