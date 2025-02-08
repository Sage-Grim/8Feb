document.getElementById("toggleButton").addEventListener("click", function() {
    var proposalDiv = document.getElementById("proposalDiv");
    var toggleButton = document.getElementById("toggleButton");

    if (proposalDiv.style.display === "none" || proposalDiv.style.display === "") {
        proposalDiv.style.display = "block";
        toggleButton.textContent = "Hide Surprise 💖";
    } else {
        proposalDiv.style.display = "none";
        toggleButton.textContent = "Tap to See Surprise 💖";
    }
});

// "No" button prank (Move away when hovered)
document.getElementById("noButton").addEventListener("mouseover", function() {
    var x = Math.floor(Math.random() * window.innerWidth * 0.7); // 70% of screen width
    var y = Math.floor(Math.random() * window.innerHeight * 0.7); // 70% of screen height
    this.style.position = "absolute";
    this.style.left = x + "px";
    this.style.top = y + "px";
});

function showProposal() {
    document.getElementById("proposalDiv").style.display = "block";
}
