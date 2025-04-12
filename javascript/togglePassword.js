function togglePassword() {
  const input = document.querySelector('input[name="password"]');
  const icon = document.querySelector(".toggle-password");

  if (!input || !icon) {
    console.warn("input 또는 icon을 찾을 수 없습니다.");
    return;
  }

  input.type = input.type === "password" ? "text" : "password";
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
}
