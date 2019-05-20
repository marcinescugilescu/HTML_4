
window.onload = function(){

    // 1. pobieranie elementu button (querySelector('[data-js="header-hamburger"]')) i elementu z klasa do zmiany (body)
    // 2. klikniecie w button 
    // 3. zmiana klasy dla body (add/remove... albo toggle)

    let hamburger = document.querySelector('[data-js="header-hamburger"]');
    let body = document.querySelector('body');

    hamburger.onclick = function(){
        body.classList.toggle('menu-isOpen');
    }


}