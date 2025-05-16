const scenes = {
  dig: {
    image: "images/level1_dig_success.jpg",
    text: "Henry digs a tunnel… and escapes! SUCCESS!",
    voice: "voices/dig_success.mp3"
  },
  guard: {
    image: "images/level1_guard_fail.jpg",
    text: "He calls the guard… for a hug. That goes about as well as you’d expect. FAIL.",
    voice: "voices/guard_fail.mp3"
  },
  pigeons: {
    image: "images/level1_pigeons_fail.jpg",
    text: "Henry summons a pigeon army… but they panic and drop him mid-air. FAIL.",
    voice: "voices/pigeons_fail.mp3"
  }
};

function choose(option) {
  const scene = scenes[option];
  document.getElementById("scene-img").src = scene.image;
  document.getElementById("scene-text").textContent = scene.text;

  const voice = document.getElementById("voice");
  voice.src = scene.voice;
  voice.play();
}
