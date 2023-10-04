import { Button, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {
    const {onAddGoal,goalInputHandler,enterGoalText} = props
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            placeholder="Your cource goal !" 
            style={styles.textInput} 
            onChangeText={goalInputHandler} 
            value={enterGoalText} />
            <Button title="Add Goal" onPress={onAddGoal} />
        </View>
    )
}
export default GoalInput
const styles = StyleSheet.create({

    inputContainer: {
        // flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginBottom: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        width: '75%',
        marginRight: 8,
        padding: 8
    }
})