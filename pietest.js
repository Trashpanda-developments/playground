let ball;
let leftPaddle;
let rightPaddle;
let leftScore = 0;
let rightScore = 0;

function setup() {
    createCanvas(600, 400);
    ball = new Ball();
    leftPaddle = new Paddle(true);
    rightPaddle = new Paddle(false);
}

function draw() {
    background(0);
    ball.update();
    ball.display();
    leftPaddle.update();
    leftPaddle.display();
    rightPaddle.update();
    rightPaddle.display();
    checkCollision();
    displayScore();
}

function checkCollision() {
    if (ball.checkCollision(leftPaddle)) {
        ball.reverseX();
    }
    if (ball.checkCollision(rightPaddle)) {
        ball.reverseX();
    }
    if (ball.x < 0) {
        rightScore++;
        reset();
    }
    if (ball.x > width) {
        leftScore++;
        reset();
    }
}

function reset() {
    ball.x = width / 2;
    ball.y = height / 2;
}

function displayScore() {
    textSize(32);
    text(leftScore, width * 0.25, 50);
    text(rightScore, width * 0.75, 50);
}

class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.size = 20;
        this.xSpeed = 5;
        this.ySpeed = 5;
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    display() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    reverseX() {
        this.xSpeed *= -1;
    }

    checkCollision(paddle) {
        if (this.x - this.size / 2 < paddle.x + paddle.w &&
            this.x + this.size / 2 > paddle.x &&
            this.y - this.size / 2 < paddle.y + paddle.h &&
            this.y + this.size / 2 > paddle.y) {
            return true;
        }
        return false;
    }
}

class Paddle {
    constructor(isLeft) {
        this.w = 20;
        this.h = 100;
        this.y = height / 2 - this.h / 2;
        if (isLeft) {
            this.x = 0;
        } else {
            this.x = width - this.w;
        }
    }

    update() {
        this.y = mouseY - this.h / 2;
    }

	display() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }
}