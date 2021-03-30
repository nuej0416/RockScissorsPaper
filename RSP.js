let imageLocation = '0';
let rsp = {
    rock : '0',
    scissor : '-142px',
    paper : '284px',
};

function computerChoice (imageLocation) {
    return Object.entries(rsp).find(function(v) {
        return v[1] === imageLocation;
    })[0];
}

let interval;

function intervalMaker () {
    interval = setInterval( function () {
        if (imageLocation === rsp.rock) {
            imageLocation = rsp.scissor;
        } else if (imageLocation === rsp.scissor) {
            imageLocation = rsp.paper;
        } else {
            imageLocation = rsp.rock;
        }
        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imageLocation;
    }, 100);
}

intervalMaker();

const scoreTable = {
    rock : 0,
    scissor : 1,
    paper : -1,
};

let result = document.querySelector('.result');

document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        clearInterval(interval); // setInterval 중지
        setTimeout( function () {
            intervalMaker();
        }, 1000);
        let mychoice = this.textContent;
        let myscore = scoreTable[mychoice];
        let computerScore = scoreTable[computerChoice(imageLocation)];
        let scoreDifference = myscore - computerScore;

        if (scoreDifference === 0) {
            result.textContent = '비겼습니다.';
            console.log('비겼습니다.');
        } else if ([-1, 2].includes(scoreDifference)) {
            result.textContent = '이겼습니다.';
            console.log('이겼습니다!!');
        } else {
            result.textContent = '졌습니다ㅠㅠ.';
            console.log('졌습니다ㅠㅠ');
        }
    });
});


// let startValue = 3;
// let interval2 = setInterval(function () {
//     if (startValue ===0) {
//         console.log('종료!!');
//         return clearInterval(interval2);
//     }
//     console.log(startValue);
//     startValue -= 1;
// }, 1000);