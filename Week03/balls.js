const area = {
        element: document.getElementById('area'),
        width : 600,
        height: 400
};


function initialize(){
    area.element.style.width = area.width + 'px'; //600px;
    area.element.style.height = area.height + 'px'; //400px
    area.element.style.border = 'solid black 1px';
    area.element.style.top = 0;
    document.body.appendChild(area.element);
}

function createBall(color, dx, dy) {
    //const newBall = new Object.create(this);
    const newBall = {}; //about the same as above

    newBall.dx = dx;
    newBall.dy = dy;

    newBall.width = 40;
    newBall.height = 40;

    newBall.element = document.createElement('div');

    newBall.element.style.backgroundColor = color;

    newBall.element.style.width = newBall.width + 'px'; //600px;
    newBall.element.style.height = newBall.height + 'px'; //400px
    newBall.element.style.position = 'absolute';
    newBall.element.style.borderRadius = '50%';

    area.element.appendChild(newBall.element);

    return newBall;

}


function moveto(ball, x,y){
ball.element.style.left = x + 'px';
ball.element.style.top = y + 'px';

}


function changeDirection(ball,x,y){
    if(x<0 || x > area.width - ball.width){
        ball.dx = -ball.dx;
    }
    if(y<0 || y > area.height - ball.height){
        ball.dy = -ball.dy;
    }
}


function update(ball,x,y){
    moveTo(ball, x,y);

    setTimeout(function() {
                changeDirection(ball,x,y);
                update(ball, x + ball.dx, y + ball.dy); //recursion
    }, 1000 / 60);
}


initialize();

const balls = [];

for(let i=0; i<3; i++){

    const newBall = createBall('blue', 4, 3);
    balls.push(newBall);
}

for (const ball of balls) {
    update(ball,70,0);
}

//const ball1 = createBall('blue',4,3);

//update(ball1, 70,0);

//ball.moveto(ball1, 30, 40);