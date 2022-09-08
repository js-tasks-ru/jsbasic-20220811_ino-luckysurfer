function highlight(table) {
  const rows = table.tBodies[0].rows;

  for (const row of rows) {
  
    const cellStatus = row.cells[row.cells.length - 1];
    const cellGender = row.cells[row.cells.length - 2];
    const cellAge = row.cells[row.cells.length - 3];
  
    if ('available' in cellStatus.dataset) {
      row.classList.add(cellStatus.dataset.available === 'true' ? 'available' : 'unavailable');
    }
    else {
      row.setAttribute('hidden', true);
    }

    if (cellGender.textContent === 'm') row.classList.add('male');
    else if (cellGender.textContent === 'f') row.classList.add('female');

    if (cellAge.textContent < 18) row.style.textDecoration = "line-through";
  }
}


// Функция highlight для каждой строки tr таблицы должна сделать следующее:

// Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status.
// Если её значение true – класс available, если её значение false – класс unavailable.

// Проставить атрибут hidden, если атрибута data-available нет вообще.

// Проставить класс male/female в зависимости от содержимого ячейки Gender.
// Если её значение m – класс male, Если её значение f – класс female.

// Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
// (!!!) Обращаем отдельное внимание, что все манипуляции нужно делать со СТРОКАМИ таблицы (тег tr). Т.е. вы проверяете ячейку (тег td), но изменяете строку (тег tr). 
// Это распространённая ошибка, из-за которой часто не проходит автоматическая проверка.