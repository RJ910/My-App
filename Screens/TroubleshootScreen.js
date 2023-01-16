import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const hardwareComponents = {
  "hard drive": {
    problems: ["Not being recognized by the system", "Making strange noises", "Running slowly"],
    solutions: ["Ensure that the hard drive is properly connected to the motherboard and power supply", "Try running a disk diagnostic tool to check for errors", "Consider replacing the hard drive if it is old or has sustained physical damage"]
  },
  "memory (RAM)": {
    problems: ["Blue screen of death (BSOD)", "System crashes or freezes", "Error messages related to memory"],
    solutions: ["Ensure that the memory is properly seated in the motherboard", "Check for any bent or damaged pins on the memory modules", "Try removing and reseating the memory modules to make sure they are making good contact", "Consider replacing the memory if it is old or damaged"]
  },
  "power supply": {
    problems: ["Computer won't start", "Random shutdowns or restarts", "Error messages related to power"],
    solutions: ["Ensure that the power supply is properly plugged into the wall and the computer", "Check for any loose or damaged cables", "Consider replacing the power supply if it is old or has sustained physical damage"]
  }
};

function TroubleshootScreen() {
  const [component, setComponent] = useState('');
  const [troubleshootingInfo, setTroubleshootingInfo] = useState('');

  function handleSubmit() {
    if (!hardwareComponents[component]) {
      setTroubleshootingInfo(`Sorry, we do not have information on troubleshooting ${component}.`);
      return;
    }
    
    setTroubleshootingInfo(`Possible problems with ${component}:\n${hardwareComponents[component].problems.join("\n")}\n\nPossible solutions:\n${hardwareComponents[component].solutions.join("\n")}`);
  }

  return (
    <View>
      <Text>Enter a hardware component:</Text>
      <TextInput value={component} onChangeText={setComponent} />
      <Button title="Submit" onPress={handleSubmit} />
      <Text>{troubleshootingInfo}</Text>
    </View>
  );
}

export default TroubleshootScreen;
