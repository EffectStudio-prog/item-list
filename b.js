document.getElementById('myButton').addEventListener('click', function() {
    let ul = document.getElementById('myList');
    let li = document.createElement('li');
    li.textContent = `New item ${ul.children.length+1}`;
    li.addEventListener('click', function() {
        ul.removeChild(li);
    });
    ul.appendChild(li);
});

