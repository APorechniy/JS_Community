const view3 = document.getElementById('view')

view3.innerHTML += '<p>7</p>' // 7

setTimeout(() => view3.innerHTML += '<p>8</p>', 0); // 8

Promise.resolve().then(() => view3.innerHTML += '<p>9</p>'); //9