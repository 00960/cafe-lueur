const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  if (form) {
    form.addEventListener('submit', function (e) {
      const errors = [];

      if (!name.value.trim()) {
        errors.push("お名前を入力してください。");
      }

      if (!email.value.trim()) {
        errors.push("メールアドレスを入力してください。");
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errors.push("正しいメールアドレスの形式で入力してください。");
      }

      if (!message.value.trim()) {
        errors.push("メッセージを入力してください。");
      }

      if (errors.length > 0) {
        e.preventDefault(); // 送信中止
        alert(errors.join("\n"));
      }
    });
  }
});