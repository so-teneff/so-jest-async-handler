function f(n) {
    let g;
    if (n === 1) {
        g = () => console.log(`ok`);
    } else {
        g = () => {throw `not okay`;};
    }

    someEvent.listen(async () => {
        g();
    });
}

module.exports = f;