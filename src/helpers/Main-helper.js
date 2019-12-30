export function createHTML(rows, columns, headerRow, headerColumn) {
  let html = ``;
  if (rows !== 0 && columns !== 0) html += (`<table>`);
  for (let i = 0; i < rows; i++) {
    html += `
  <tr>`;
    for (let j = 0; j < columns; j++) {
      if (i === headerRow) {
        html += `
    <th scope="col">Column</th>`;
      } else if (j === headerColumn) {
        html += `
    <th scope="row">Column</th>`;
      } else {
        html += `
    <td>Column</td>`;
      }
    }
    html += `
  </tr>`;
  }
  if (rows !== 0 && columns !== 0) html += (`
</table>`);
  return html;
}

export default createHTML;