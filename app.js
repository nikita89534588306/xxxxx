    //получаем все ссылки в документе
    var contacts = document.querySelectorAll('.contact');
    //перебираем элементы массива
    for(let thisContact of contacts) 
        //добавляем обработчик нажатия на ссылку правой кнопкой мыши
        thisContact.oncontextmenu = handlerContextMenu