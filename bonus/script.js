for (let i = 1; i <= 100; i++) {

    const chessboard = document.querySelector(".scacchiera")

    let square = document.createElement("div");
    square.classList.add("square");

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        square.innerText = `FizzBuzz`
        square.style.backgroundColor = "red";
    }

    else if (i % 3 == 0) {
        console.log("Fizz");
        square.innerText = `Fizz`
        square.style.backgroundColor = "lightgreen";
    }

    else if (i % 5 == 0) {
        console.log("Buzz");
        square.innerText = `Buzz`
        square.style.backgroundColor = "yellow";
    }

    else {
        console.log(i);
        square.innerText = `${i}`
        square.style.backgroundColor = "lightblue";
    }

    chessboard.append(square);
}

