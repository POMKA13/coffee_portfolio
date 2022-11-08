
function giftset(evt, identifier) {
    let giftset__block;
    let giftset__tablinks;

  // Получить все элементы с class="giftset__block" и скрыть их
  giftset__block = document.getElementsByClassName("giftset__block");

  for (let i = 0; i < giftset__block.length; i++) {
    giftset__block[i].style.display = "none";
  }

  // Получить все элементы с class="giftset__tablinks" и удалить класс "active"
  giftset__tablinks = document.getElementsByClassName("giftset__tablinks");
  for (let i = 0; i < giftset__tablinks.length; i++) {
    giftset__tablinks[i].className = giftset__tablinks[i].className.replace(
      " active",
      ""
      );
     
    }

  // Показать текущую вкладку и добавить «active» класс к ссылке, открывающей вкладку
  document.getElementById(identifier).style.display = "block";
  evt.currentTarget.className += " active";
}

