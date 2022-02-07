const lightworldmap = "url('assets/images/lightworldmap.png')";
const darkworldmap = "url('assets/images/darkworldmap.png')";
let usinglightbackground = false;

main();

async function main() {
    let continueBlink = true;
    while (continueBlink) {
        await update();
    }
}

async function update() {
    let eventlist = makeEventList();
    for (let s = 0; s < 10; s++) {
        for (let i = 0; i < eventlist.length; i++) {
            if (eventlist[i].second == s) {
                printCircle(eventlist[i].x, eventlist[i].y);
            }
        }

        await sleep(1000);

    }
}

function makeEventList() {
    let answer = [];
    answer.push(makeEvent(28, 90, 3));
    answer.push(makeEvent(30, 65, 7));
    answer.push(makeEvent(65, 50, 3));
    answer.push(makeEvent(30, 75, 2));
    answer.push(makeEvent(25, 60, 4));
    answer.push(makeEvent(55, 35, 5));
    answer.push(makeEvent(80, 30, 3));
    answer.push(makeEvent(30, 10, 9));
    answer.push(makeEvent(51, 40, 3));
    answer.push(makeEvent(15, 40, 1));
    answer.push(makeEvent(45, 60, 3));
    answer.push(makeEvent(50, 25, 3));
    return answer;
}

function makeEvent(x, y, second) {
    return {
        x: x,
        y: y,
        second: second
    };
}

async function printCircle(x, y) {
    let square = document.createElement("div");
    document.getElementsByTagName("body")[0].appendChild(square);
    square.setAttribute('class', 'square');
    square.style.position = "absolute";
    square.style.left = x + "%";
    square.style.top = y + "%";
    await sleep(2000 + (Math.random() * 2500));
    square.remove();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let button = document.getElementById("switch")
button.addEventListener("click", switchbackground);




function switchbackground() {
    let bodystyle = document.getElementsByTagName('body')[0].style;
    let buttonstyle = document.getElementById("switch").style;
    if (usinglightbackground) {
        buttonstyle.backgroundColor = "#000000";
        bodystyle.backgroundImage = darkworldmap;
        usinglightbackground = false;
        openFullscreen();
    } else {
        buttonstyle.backgroundColor = "#ffffff";
        bodystyle.backgroundImage = lightworldmap;
        usinglightbackground = true;
    }

}

function openFullscreen() {
    let doc = document.documentElement;
    if (doc.requestFullscreen) {
        doc.requestFullscreen();
    } else if (doc.webkitRequestFullscreen) {
        /* Safari */
        doc.webkitRequestFullscreen();
    } else if (doc.msRequestFullscreen) {
        /* IE11 */
        doc.msRequestFullscreen();
    }
}