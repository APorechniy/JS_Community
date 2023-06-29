for (let i = 0; i < 101; i++) {
    Promise.resolve().then(() => {
        document.getElementById("view").style.height = `${i}vh`;
        console.log(document.getElementById("view").clientHeight)
    })
}
