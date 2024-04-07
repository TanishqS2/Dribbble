import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("login.ejs");
});

app.get("/create",(req,res)=>{
    res.render("profile.ejs");
});

app.get("/options", (req,res)=>{
    res.render("options.ejs");
});

app.get("/home", (req,res)=>{
  res.render("home.ejs");
});

app.get("/file", (req,res)=>{
    // Get the necessary elements
const arrowSection = document.querySelector('.arrow-section');
const fileInput = arrowSection.querySelector('#file-input');

// Add an event listener for when a file is selected
fileInput.addEventListener('change', function() {
  // Get the selected file(s)
  const files = this.files;

  // Check if at least one file is selected
  if (files.length > 0) {
    // Get the first selected file
    const file = files[0];

    // Check if the file is an image
    if (file.type.match('image.*')) {
      // Create a new FileReader object
      const reader = new FileReader();

      // Add an event listener for when the file is loaded
      reader.addEventListener('load', function() {
        // Create a new image element
        const img = document.createElement('img');
        img.src = reader.result;
        img.alt = file.name;

        // Clear the previous content of the arrow section, except for the file input
        const fileInputElement = arrowSection.querySelector('#file-input');
        arrowSection.innerHTML = '';
        arrowSection.appendChild(fileInputElement);

        // Append the new selected image
        arrowSection.appendChild(img);
      });

      // Read the selected file as a data URL
      reader.readAsDataURL(file);
    } else {
      alert('Please select an image file.');
    }
  } else {
    alert('No file selected.');
  }
 });
});

app.listen(port,()=>{
    console.log(`server is running on ${port}.`);
});

