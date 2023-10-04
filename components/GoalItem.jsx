import { StyleSheet, Text, View } from "react-native"

const GoalItem = (props) => {
    const { text } = props

    return (
        <View>
            <Text style={styles.listItem}>{text}</Text>

        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#5e5e5e'
    }
})