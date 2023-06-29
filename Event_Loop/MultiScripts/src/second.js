const view2 = document.getElementById('view')

view2.innerHTML += '<p>4</p>' // 4

setTimeout(() => view2.innerHTML += '<p>5</p>', 0); // 5

Promise.resolve().then(() => view2.innerHTML += '<p>6</p>'); // 6