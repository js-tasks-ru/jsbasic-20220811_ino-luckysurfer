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

