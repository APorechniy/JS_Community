const view1 = document.getElementById('view')

view1.innerHTML += '<p>1</p>'  // 1

setTimeout(() => view1.innerHTML += '<p>2</p>', 0); // 2

Promise.resolve().then(() => view1.innerHTML += '<p>3</p>'); // 3

//////////////////////////////

const view2 = document.getElementById('view')

view2.innerHTML += '<p>4</p>' // 4

setTimeout(() => view2.innerHTML += '<p>5</p>', 0); // 5

Promise.resolve().then(() => view2.innerHTML += '<p>6</p>'); // 6

//////////////////////////////

const view3 = document.getElementById('view')

view3.innerHTML += '<p>7</p>' // 7

setTimeout(() => view3.innerHTML += '<p>8</p>', 0); // 8

Promise.resolve().then(() => view3.innerHTML += '<p>9</p>'); //9

