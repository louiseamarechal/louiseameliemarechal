// eslint-disable-next-line import/no-anonymous-default-export
export default (ctx, canvas, paddleProps) => {
  class Paddle {
    constructor(x) {
      this.x = x;
      this.y = paddleProps.y;
      this.height = paddleProps.height;
      this.width = paddleProps.width;
      this.colors = "#39FF14"; // equal to our var(--black)
    }
    move() {
      ctx.beginPath();
      ctx.roundRect(this.x, this.y, this.width, this.height, [50]);
      ctx.fillStyle = "#0B00D4";
      ctx.strokeStyle = this.colors;
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();
    }
  }

  let paddle = new Paddle(paddleProps.x);
  paddle.move();
  if (paddleProps.x <= 0) {
    paddleProps = 0;
  } else if (paddleProps.x + paddleProps.width >= canvas.width) {
    paddleProps.x = canvas.width - paddleProps.width;
  }
};
