const view1 = document.getElementById('view')

view1.innerHTML += '<p>1</p>'  // 1

setTimeout(() => view1.innerHTML += '<p>2</p>', 0); // 2

Promise.resolve().then(() => view1.innerHTML += '<p>3</p>'); // 3