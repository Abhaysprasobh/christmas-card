// Snowflake Animation
const snowContainer = document.getElementById("snow");

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Create snowflakes every 300ms
setInterval(createSnowflake, 300);

// Gift Box Click Event
const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const messageContainer = document.getElementById("messageContainer");
const replayButton = document.getElementById("replayButton");

giftBox.addEventListener("click", () => {
    giftBox.style.display = "none";
    giftMessage.style.display = "none";
    messageContainer.classList.remove("hidden");
});

// Replay Button
replayButton.addEventListener("click", () => {
    giftBox.style.display = "block";
    giftMessage.style.display = "block";
    messageContainer.classList.add("hidden");
});
