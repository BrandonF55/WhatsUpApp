import { View, StyleSheet } from "react-native"

const PageContainer = props => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        // this padding keeps the words from touching the left wall.
        flex: 1,
        // the flex is needed so it takes up the entire page.
        backgroundColor: 'white'
    }
});

export default PageContainer;
