function generateCaptcha(length = 6) {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

let currentCaptcha = generateCaptcha();
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("captcha-text").textContent = currentCaptcha;
});

function reloadCaptcha() {
  currentCaptcha = generateCaptcha();
  document.getElementById("captcha-text").textContent = currentCaptcha;
}

function validateCaptcha() {
  const input = document.getElementById("captcha-input").value.trim().toUpperCase();
  const error = document.getElementById("captcha-error");
  const userId = document.getElementById("srmid").value.trim();

  if (input !== currentCaptcha) {
    error.style.display = 'block';
    reloadCaptcha();
    return false;
  }

  error.style.display = 'none';
  $('#loginModal').modal('hide');

  const url = `welcome.html?srmid=${encodeURIComponent(userId)}`;
  window.open(url, '_blank');

  return false;
}
