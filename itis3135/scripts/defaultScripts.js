const companyName = "Decisive Ox";

function updateCurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = now.toLocaleDateString([], { weekday: 'long' });
    const date = now.toLocaleDateString([], { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('current-time').textContent = `Today is ${time} on ${day}, ${date}`;
}
updateCurrentTime();

function processForm() {
    const userName = document.getElementById('user-name').value;
    const userMood = document.getElementById('user-mood').value;
    const favoriteNumber = parseFloat(document.getElementById('favorite-number').value);

    if (userName && userMood && !isNaN(favoriteNumber)) {
        greetUser(userName, userMood);
        determinePolygon(Math.abs(Math.round(favoriteNumber)));
    } else {
        alert("Please complete all fields correctly.");
    }
}

function greetUser(name, mood) {
    alert(`${companyName} welcomes you, ${name}!\nWe're glad you are doing ${mood}!`);
}

function determinePolygon(number) {
    const polygons = [
        "Not a polygon", // 0 sides
        "Monogon",       // 1 side
        "Digon",         // 2 sides
        "Triangle",      // 3 sides
        "Quadrilateral", // 4 sides
        "Pentagon",      // 5 sides
        "Hexagon",       // 6 sides
        "Heptagon",      // 7 sides
        "Octagon",       // 8 sides
        "Nonagon",       // 9 sides
        "Decagon"        // 10 sides
    ];
    const polygonName = polygons[number] || `Polygon with ${number} sides`;
    alert(`A polygon with ${number} sides is called a ${polygonName}.`);
}

function provideOxWisdom() {
    alert("Ox Wisdom: Strength comes from persistence, not haste.");
}

function calculateOxStrength() {
    const strength = Math.floor(Math.random() * 100) + 1;
    alert(`Ox Strength: ${strength} units of determination!`);
}

function generateOxNickname() {
    const nicknames = ["Mighty Hoof", "Steadfast Charger", "Iron Will", "Grass Master"];
    const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)];
    alert(`Your Ox Nickname is: ${randomNickname}`);
}

function inspireOxDetermination() {
    alert("Ox Determination: When the load feels heavy, take one step at a time.");
}

function simulateOxStomp() {
    alert("Ox Stomp: Thud! Thud! The ground shakes with power!");
}