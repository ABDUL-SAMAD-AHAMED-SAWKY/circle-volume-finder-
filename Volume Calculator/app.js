let input = document.querySelector("#radius");
let mesure = Array.from(document.querySelector("#mersure"));
let button = document.querySelector('.valueGetter')


console.log(input, mesure, button);
let btn = button.addEventListener('click', event => {
    if (input.value == "") {
        let errorvalue = document.querySelector(".error").innerHTML = '<strong>Please Enter a value after you can press</strong>'

        document.querySelector(".answer").innerHTML = ""
    }

    else {
        document.querySelector('.answer').classList.add('back')
        document.querySelector(".error").innerHTML = ''
        if (mesure[0].selected === true) {
            let result = 4 / 3 * (Math.PI) * (Math.pow(input.value, 3));
            document.querySelector(".answer").innerHTML = result.toFixed(3) + ' cm<sup>3</sup>';
        }
        else if (mesure[1].selected == true) {
            let result = 4 / 3 * (Math.PI) * (Math.pow(input.value * 10, 3));
            document.querySelector(".answer").innerHTML = result.toFixed(3) + ' mm<sup>3</sup>';
        }
        else if (mesure[2].selected == true) {
            let result = 4 / 3 * (Math.PI) * (Math.pow(input.value / 100, 3));
            document.querySelector(".answer").innerHTML = result.toFixed(3) + ' m<sup>3</sup>';
        }

    }
})