#include <SPI.h>
#include <SoftwareSerial.h>

#include <Adafruit_BLE.h>
#include <Adafruit_BluefruitLE_SPI.h>
#include <Adafruit_BluefruitLE_UART.h>
#define BLUEFRUIT_SPI_CS  8
#define BLUEFRUIT_SPI_IRQ 7
#define BLUEFRUIT_SPI_RST 4    // Optional but recommended, set to -1 if unused

/* hardware SPI, using SCK/MOSI/MISO hardware SPI pins
and then user selected CS/IRQ/RST */
Adafruit_BluefruitLE_SPI ble(BLUEFRUIT_SPI_CS, BLUEFRUIT_SPI_IRQ, BLUEFRUIT_SPI_RST);

int zax;
int yax;
int xax;

const int button = 2;
const int ledPin =  3;

int buttonState = 0;

int buttonVariable = 0;

void setup() {

  //Serial.begin(9600);  // initialize serial communications
  pinMode(ledPin, OUTPUT);

  pinMode(button, INPUT);

  if ( !ble.begin(false)) {       // initialize Bluefruit radio
    Serial.println("Couldn't find Bluefruit");
    while (true);                 // do nothing more
  }

  // set radio into data mode:
  ble.setMode(BLUEFRUIT_MODE_DATA);
}

void loop(void) {
  zax = analogRead(A0);
  yax = analogRead(A1);
  xax = analogRead(A2);

  buttonState = digitalRead(button);
  if (buttonState == HIGH) {
    //    // turn LED on:
    digitalWrite(ledPin, HIGH);
    //    Serial.print(1);
    //ble.print();
    buttonVariable = 1;
  }
  else {
    //    //     turn LED off:
    digitalWrite(ledPin, LOW);
    //    Serial.print(0);
    //ble.print(0);
    buttonVariable = 0;

  }

  // Send input data to host via Bluefruit
  //  Serial.print(',');
  //ble.print(',');
  Serial.print(buttonVariable);
  Serial.print(",");
  Serial.println(zax);

  ble.print(buttonVariable);
  ble.print(",");
  ble.println(zax);
  //  Serial.print(',');
  //  ble.print(',');
  //  Serial.print(yax);
  //  ble.print(yax);
  //  Serial.print(',');
  //  ble.print(',');
  //  ble.println(xax);
  //  Serial.println(xax);
  delay(500);
}
