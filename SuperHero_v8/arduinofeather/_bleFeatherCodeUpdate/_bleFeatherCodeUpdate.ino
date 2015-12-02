

/*
  A simplified example of the Adaffuit Bluetooth LE UART library
  for the Feather Bluetooth LE module.

  based on Kevin Townsend's blueuart_datamode example
  modified by Tom Igoe
  30 Nov 2015
 */

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
const int buttonPin = 2;     // the number of the pushbutton pin
const int ledPin =  3;

int buttonState = 0;



void setup() {

  Serial.begin(9600);   // initialize serial communications

  if ( !ble.begin(false)) {       // initialize Bluefruit radio
    Serial.println("Couldn't find Bluefruit");
    while (true);                 // do nothing more

    pinMode(buttonPin, INPUT);
    pinMode(ledPin, OUTPUT);
  }

  // set radio into data mode:
  ble.setMode(BLUEFRUIT_MODE_DATA);
}

void loop(void) {
  zax = analogRead(A0);
  yax = analogRead(A1);
  xax = analogRead(A2);
  
  buttonState = digitalRead(buttonPin);
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.print(1);
    ble.print(1);
  }
  else {
    digitalWrite(ledPin, LOW);
    Serial.print(0);
    ble.print(0);
  }

  // Send input data to host via Bluefruit
  ble.print(",");
  ble.println(zax);
  Serial.print(",");
  Serial.println(zax);

  delay(500);
}
