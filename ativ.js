// // Seeking a Target (Seek)
// // The Nature of Code
// // The Coding Train / Daniel Shiffman
// // https://youtu.be/p1Ws1ZhG36g
// // https://thecodingtrain.com/learning/nature-of-code/5.2-seek.html

// // Seek: https://editor.p5js.org/codingtrain/sketches/AxuChwlgb
// // Seek with Sliders: https://editor.p5js.org/codingtrain/sketches/DROTtSI7J
// // Arrive: https://editor.p5js.org/codingtrain/sketches/dQx9oOfTN
// // Pursue: https://editor.p5js.org/codingtrain/sketches/XbsgoU_of

// let vehicle;
// let target;

// function setup() {
//   createCanvas(500, 500);
//   vehicle = new Vehicle(100, 100);
// }

// function draw() {
//   background(0);
//   fill(255, 0, 0);
//   noStroke();
//   target = createVector(mouseX, mouseY);
//   circle(target.x, target.y, 32);

//   vehicle.seek(target);
//   vehicle.update();
//   vehicle.show();
// }

// class Vehicle {
//   constructor(x, y) {
//     this.position   = createVector(x, y);
//     this.velocity   = createVector(0, 0);
//     this.acceleration = createVector(0, 0);
//     this.maxspeed   = 4;
//     this.maxforce   = 0.1;
//   }

//   applyForce(force) {
//     this.acceleration.add(force);
//   }

//   seek(target) {
//     let desired = p5.Vector.sub(target, this.position);
//     desired.setMag(this.maxspeed);
//     let steer = p5.Vector.sub(desired, this.velocity);
//     steer.limit(this.maxforce);
//     this.applyForce(steer);
//   }

//   update() {
//     this.velocity.add(this.acceleration);
//     this.velocity.limit(this.maxspeed);
//     this.position.add(this.velocity);
//     this.acceleration.mult(0);
//   }

//   show() {
//     fill(255);
//     stroke(255);
//     strokeWeight(2);
//     circle(this.position.x, this.position.y, 16);
//   }
// }
