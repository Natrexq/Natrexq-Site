function RainingCode() {
  const Code = () => {
    var creepymode = "0";
    var Data = new Date().getFullYear();
    var matrix = document.createElement("h2");
    const worlds = [
      "Why are you here?",
      "Fat Natrexq is watching you!",
      "Bro you are fall into SiteLimbo",
      Data,
    ];
    const randomworlds = worlds[Math.floor(Math.random() * worlds.length)];

    matrix.classList.add("matrix");
    matrix.textContent = randomworlds;
    document.body.append(matrix);

    matrix.style.left = Math.random() * window.innerWidth + "px";
    matrix.style.top = Math.random() * window.innerHeight + "px";
    matrix.style.opacity = Math.random();
    if (creepymode == "1") {
      const colors = ["red", "#800303", "#480303"];
      const radnomcolor = colors[Math.floor(Math.random() * colors.length)];
      matrix.style.color = radnomcolor;
    } else {
      const colors = ["green", "greenyellow", "#00ff6a"];
      const radnomcolor = colors[Math.floor(Math.random() * colors.length)];
      matrix.style.color = radnomcolor;
    }
    const Exit = () => {
      window.history.back();
    };

    matrix.addEventListener("click", Exit);

    setTimeout(() => {
      matrix.remove();
    }, 1000);
  };

  setInterval(Code, 50);
}

window.onload(RainingCode());
