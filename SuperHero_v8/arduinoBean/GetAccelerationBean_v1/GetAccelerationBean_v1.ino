/*
  This sketch reads the acceleration from the Bean's on-board accelerometer.

  The acceleration readings are sent over serial and can be accessed in Arduino's Serial Monitor.

  To use the Serial Monitor, set Arduino's serial port to "/tmp/tty.LightBlue-Bean"
  and the Bean as "Virtual Serial" in the OS X Bean Loader.

  This example code is in the public domain.
*/

const int button = 2;
int buttonState = 0;
int buttonVariable = 0;

void setup() {
  // Bean Serial is at a fixed baud rate. Changing the value in Serial.begin() has no effect.
  Serial.begin();
  pinMode(button, INPUT);
  // Optional: Use Bean.setAccelerationRange() to set the sensitivity to something other than the default of ±2g.
}

void loop() {
  // Get the current acceleration with range of ±2g, and a conversion of 3.91×10-3 g/unit or 0.03834(m/s^2)/units.
  AccelerationReading acceleration = Bean.getAcceleration();



  buttonState = digitalRead(button);
  if (buttonState == HIGH) {
//    Serial.print(1);
    buttonVariable = 1;
  }
  else if (buttonState == LOW){
//    Serial.print(0);
    buttonVariable = 0;
  }

  Serial.print(0);
  Serial.print(',');
  String stringToPrint = String();
  //  stringToPrint = acceleration.zAxis;
  //  stringToPrint = stringToPrint + "X: " + acceleration.xAxis + "\tY: " + acceleration.yAxis + "\tZ: " + acceleration.zAxis;
  Serial.println(acceleration.zAxis);
//  Bean.sleep(500);
}



