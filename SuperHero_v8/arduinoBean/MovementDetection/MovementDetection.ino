/*
  This sketch shows you how to monitor if your Bean moves by sampling the acceleration at 5Hz and measuring change.

  The LED will blink red when it's being moved.

  Please note that if motion detection is triggered often, the LED use will drain the battery quickly.

  This example code is in the public domain.
*/

// When acceleration change goes beyond this threshold, the LED will blink.
#define THRESHOLD 100

AccelerationReading previousAccel;

const int button = 2;
int buttonState = 0;
int buttonVariable = 0;

void setup() {
  Serial.begin();

  pinMode(button, INPUT);
  // Turn off the Bean's LED
  Bean.setLed(0, 0, 0);
  // Initial reading
  previousAccel = Bean.getAcceleration();
}

void loop() {
  // Get the current acceleration with a conversion of 3.91×10-3 g/unit.
  AccelerationReading currentAccel = Bean.getAcceleration();
  uint16_t batteryReading =  Bean.getBatteryVoltage();

  // Find the difference between the current acceleration and that of 200ms ago.
  int accelDifference = getAccelDifference(previousAccel, currentAccel);
  // Update previousAccel for the next loop.
  previousAccel = currentAccel;

  // Check if the Bean has been moved beyond our threshold.
  if (accelDifference > THRESHOLD) {
    // Blink the LED
    //    Bean.setLed(255, 0, 0);
    //    Bean.sleep(100);
    //    Bean.setLed(0, 0, 0);
    //    Bean.sleep(100);
  } else {
    //    Bean.sleep(200);
  }
  
  buttonState = digitalRead(button);
  if (buttonState == HIGH) {
    //    Serial.print(1);
    buttonVariable = 1;
  }
  else if (buttonState == LOW) {
    //    Serial.print(0);
    buttonVariable = 0;
  }

  Serial.print(buttonVariable);
  Serial.print(',');
  Serial.print(batteryReading/100);

  Serial.print(",");
  Serial.println(accelDifference);
   Bean.sleep(200);




}

// This function calculates the difference between two acceleration readings
int getAccelDifference(AccelerationReading readingOne, AccelerationReading readingTwo) {
  int deltaX = abs(readingTwo.xAxis - readingOne.xAxis);
  int deltaY = abs(readingTwo.yAxis - readingOne.yAxis);
  int deltaZ = abs(readingTwo.zAxis - readingOne.zAxis);
  // Return the magnitude
  return deltaX + deltaY + deltaZ;


}
