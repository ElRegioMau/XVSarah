
  const targetDate = new Date(2025, 8, 13, 18, 0, 0); // 13 Sept 2025, 18:00

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = "¡Ya llegó el gran día!";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      `<span class="time">${days} :</span> ` +
      `<span class="time"> ${hours} :</span> ` +
      `<span class="time"> ${minutes} :</span> ` +
      `<span class="seconds"> ${seconds}</span>`;
  }

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
