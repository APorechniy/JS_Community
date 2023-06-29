const checkRequestAnimationDiff = () => {
    let prev;
    function call() {
        requestAnimationFrame((timestamp) => {
            if (prev) {
                console.log(timestamp - prev);
            }
            prev = timestamp;
            call();
        });
    }
    call();
}
checkRequestAnimationDiff();