const profiles = [
    {name: "Alice", email: "alice@example.com", img: "1 (1).jpg"},
    {name: "Bob Smith", email: "bob@example.com", img: "1 (2).jpg"},
    {name: "Charlie Davis", email: "charlie@example.com", img: "1 (4).jpg"},
    {name: "Diana Green", email: "diana@example.com", img: "1 (5).jpg"},
    {name: "Emily", email: "emily.johnson@example.com", img: "1 (14).jpg"},
    {name: "James Carter", email: "james.carter@example.com", img: "1 (17).jpg"},
    {name: "Daniel Reynolds", email: "daniel.reynolds@example.com", img: "1 (15).jpg"},
    {name: "Michael Harris", email: "michael.harris@example.com", img: "1 (13).jpg"},
    {name: "William Scott", email: "william.scott@example.com", img: "1 (18).jpg"},
    {name: "Scarlett", email: "scarlett@example.com", img: "1 (5).jpg"},
];

function generateProfile() {
    const randomIndex = Math.floor(Math.random() * profiles.length);
    const profile = profiles[randomIndex];

    document.getElementById("profile-img").src = profile.img;
    document.getElementById("profile-name").textContent = profile.name;
    document.getElementById("profile-email").textContent = profile.email;
}
