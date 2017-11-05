console.log("Hello from table.js");
console.log(window);
console.log(screen);
console.log(document);
console.log(document.getElementById('ticket-table'));

var tableBody = document.getElementById('ticket-table-body');

function fillOutCell(rowNumber, cell, dataRow) {

    switch(rowNumber) {
        
                    case 0:
                    var image = document.createElement('img');
                    image.src = './assets/artist_icons/' + dataRow.icon;
                    var span = document.createElement('span');
                    span.textContent = dataRow.name;
                    cell.appendChild(image);
                    cell.appendChild(span);
                    break;
        
                    case 1: 
                    cell.textContent = dataRow.city;
                    break;
        
                    case 2: 
                    cell.textContent = dataRow.date;
                    break;
        
                    case 3:
                    cell.textContent = dataRow.pricePerTicket;
                    break;
        
                    case 4: 
                    var input = document.createElement('input');
                    input.type = 'number';
                    input.value = 1;
                    var button = document.createElement('button');
                    button.className = 'add-ticket-button';
                    button.textContent = '+';
                    button.addEventListener('click', function(e) {
                        console.log('I clicked a button');
                        e.stopPropagation();
                    });
                    cell.appendChild(input);
                    input.addEventListener('click', function(e) {
                        e.stopPropagation();
                    });
                    cell.appendChild(button);
                    break;
        
        
        
                }
        

}

var tableRows = DATA.map(function(dataRow) {
    var row = document.createElement('tr');

    for(var i = 0; i < 5; i++) {
        var cell = document.createElement('td');
        fillOutCell(i, cell, dataRow);
        row.appendChild(cell);
    }
    return row;
});

tableRows.forEach(function(element) {

    element.addEventListener('click', function(e) {
        console.log('I clicked a row');
      });
    tableBody.appendChild(element);


});
