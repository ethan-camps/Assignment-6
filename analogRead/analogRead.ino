/*
  Arduino Code - for AnalogReadSerial
  Reads an analog input on pin 0, prints the result to the serial monitor.
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.
 This example code is in the public domain.
 */

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);

  //the light on the baord that is recieveing electricity
  pinMode(11,OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {

  //OUTPUT STUFF
  
  //if we have a serial connection
  if(Serial.available() > 0){

    char input =Serial.parseInt();

    //Use the value of the Incoming byte to control led
    analogWrite(11,input);
    
  }
  
  // INPUT STUFF
  //Reading sensor values
  int sensor1 = analogRead(A0);
  int sensor2 = analogRead(A1);

  
  // print out the value you read:
  Serial.print(sensor1);
  Serial.print(",");
  Serial.println(sensor2);
  delay(1);        // delay in between reads for stability
 
}
