let red = 0;
let green = 0;
let blue = 0;
let isgenerating = false;
let interval;
// 
document.querySelector('.container').addEventListener('click', () => {
    if (isgenerating) {
        clearInterval(interval)
        isgenerating = false
        document.querySelector('.container')
            .innerHTML = `<p>rgb(${red}, ${green}, ${blue})<br>🖇</p>`;
        const rgb = `rgb(${red}, ${green}, ${blue})`;
        const textarea = document.createElement('textarea');
        textarea.value = rgb;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    } else {
        isgenerating = true
        interval = setInterval(() => {
            red = Math.round((Math.random()) * 255);
            green = Math.round((Math.random()) * 255);
            blue = Math.round((Math.random()) * 255);

            document.body.style.
            backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            document.querySelector('.container')
                .innerHTML =
                `red<span>${red}</span><br>
        green<span>${green}</span><br>
        blue<span>${blue}</span>`
        }, 1000);
    }
})