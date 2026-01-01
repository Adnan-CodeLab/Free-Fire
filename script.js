function loadWeapon(weapon) {
  if (weapon === "m10") {
    document.getElementById("content").innerHTML = `
      <div class="weapon-main">
        <h2>M10 (Original)</h2>
        <img src="images/m10.png" alt="M10">
      </div>

      <h3>M10 Skins</h3>
      <div class="skins">
        <div class="skin-card">
          <img src="images/skin1.jpg">
          <video src="videos/skin1.mp4" muted loop></video>
          <p>Crimson Rage</p>
        </div>

        <div class="skin-card">
          <img src="images/skin2.jpg">
          <video src="videos/skin2.mp4" muted loop></video>
          <p>Night Hunter</p>
        </div>
      </div>
    `;

    document.querySelectorAll("video").forEach(v => {
      v.parentElement.addEventListener("mouseenter", () => v.play());
      v.parentElement.addEventListener("mouseleave", () => v.pause());
    });
  }
}
