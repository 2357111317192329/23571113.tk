const keyTracker = new KeyTracker();
const ball1 = new ball(100,0,1);
//Up is ArrowUp
//0 is 0
//A is A
//a is a
setInterval(() => {
  let tmpleft=ball1.controlkey[0];
  let tmpright=ball1.controlkey[1];
  let tmpup=ball1.controlkey[2];
  let tmpdown=ball1.controlkey[3];
  let tmpgd=ball1.controlkey[4]; // 增重鍵
  if (keyTracker.isKeyPressed(tmpleft)) {
    ball1.move(-1,0);
  }
  else{
  }
  if (keyTracker.isKeyPressed(tmpright)) {
    ball1.move(1,0);
  }
  else{
  }
  if (keyTracker.isKeyPressed(tmpup)) {
    ball1.move(0,1);
  }
  else{
  }
  if (keyTracker.isKeyPressed(tmpdown)) {
    ball1.move(0,-1);
  }
  else{
  }
  if (keyTracker.isKeyPressed(tmpgd)) {
    ball1.gain_dense(1);
  }
  else{
    ball1.gain_dense(0);
  }
  ball1.update();
  ball1.lookdata();
}, 100);
