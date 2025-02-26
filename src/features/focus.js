import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setSubject}
          label="What would you like to focus on?"
          style={styles.textinput}
        />
        <View stye={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    justifyContent: 'top',
    padding: spacing.lg,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
  },
  textinput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
