import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Serve an image from a static folder
app.get("/image", (req, res) => {
    const images = [
        "https://placekitten.com/400/400", // Placeholder kitten image
        "https://placebear.com/400/400",   // Placeholder bear image
        "https://placekeanu.com/400/400",  // Placeholder Keanu Reeves
    ];

    // Pick a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    res.json({ url: randomImage });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Image API is running on http://localhost:${PORT}`);
});
