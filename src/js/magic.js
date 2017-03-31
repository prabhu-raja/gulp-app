$(document).ready(() => {
  $('a').click((e) => {
    alert('you clicked something!');
    e.preventDefault();
  });
});