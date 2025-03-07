import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

const gridSize = 20;
const updateInterval = 100; // ms entre movimentos

class Snake {
  constructor() {
    this.body = [{ x: 10, y: 10 }];
    this.previousBody = [];
    this.dir = { x: 1, y: 0 };
    this.nextDir = { x: 1, y: 0 };
  }

  update(width, height, setGameOver) {
    this.previousBody = [...this.body];
    this.dir = { ...this.nextDir };

    const head = this.body[0];
    const newHead = { x: head.x + this.dir.x, y: head.y + this.dir.y };

    if (
      newHead.x < 0 ||
      newHead.x >= width / gridSize ||
      newHead.y < 0 ||
      newHead.y >= height / gridSize ||
      this.body.some(
        (segment, i) =>
          i !== 0 && segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    this.body.unshift(newHead);
    this.body.pop();
  }

  grow() {
    this.body.push({ ...this.body[this.body.length - 1] });
  }

  show(p5, lastUpdate) {
    p5.fill(0, 255, 0);
    let alpha = (p5.millis() - lastUpdate) / updateInterval;
    alpha = p5.constrain(alpha, 0, 1);

    for (let i = 0; i < this.body.length; i++) {
      let current = this.body[i];
      let previous = this.previousBody[i] || current;
      let x = p5.lerp(previous.x, current.x, alpha) * gridSize;
      let y = p5.lerp(previous.y, current.y, alpha) * gridSize;
      p5.rect(x, y, gridSize - 1, gridSize - 1);
    }
  }

  setDir(x, y) {
    this.nextDir = { x, y };
  }
}

const SnakeGame = () => {
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [snake, setSnake] = useState(new Snake());
  const lastUpdate = useRef(0);

  const spawnFood = (p5) => {
    setFood({
      x: p5.floor(p5.random(p5.width / gridSize)),
      y: p5.floor(p5.random(p5.height / gridSize)),
    });
  };

  const restartGame = (p5) => {
    setGameOver(false);
    setSnake(new Snake());
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(600, 600).parent(canvasParentRef);
    p5.frameRate(60);
    spawnFood(p5);
  };

  const draw = (p5) => {
    if (gameOver) {
      p5.background(51);
      p5.fill(255);
      p5.textSize(32);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.text("Game Over", p5.width / 2, p5.height / 2);
    } else {
      p5.background(51);
      const now = p5.millis();
      if (now - lastUpdate.current > updateInterval) {
        snake.update(p5.width, p5.height, setGameOver);
        lastUpdate.current = now;
      }

      if (snake.body[0].x === food.x && snake.body[0].y === food.y) {
        snake.grow();
        spawnFood(p5);
      }

      snake.show(p5, lastUpdate.current);

      p5.fill(255, 0, 0);
      p5.rect(food.x * gridSize, food.y * gridSize, gridSize - 1, gridSize - 1);
    }
  };

  const keyPressed = (p5) => {
    if (p5.keyCode === p5.UP_ARROW && snake.dir.y !== 1) {
      snake.setDir(0, -1);
    } else if (p5.keyCode === p5.DOWN_ARROW && snake.dir.y !== -1) {
      snake.setDir(0, 1);
    } else if (p5.keyCode === p5.LEFT_ARROW && snake.dir.x !== 1) {
      snake.setDir(-1, 0);
    } else if (p5.keyCode === p5.RIGHT_ARROW && snake.dir.x !== -1) {
      snake.setDir(1, 0);
    }
  };

  return (
    <>
      <Sketch setup={setup} draw={draw} keyPressed={keyPressed} />
      <button
        onClick={restartGame}
        className={`font-bold px-3 py-1 bg-amber-300  cursor-pointer 
        hover:bg-amber-400 transition-colors duration-300`}
      >
        Restart
      </button>
    </>
  );
};

export default SnakeGame;
