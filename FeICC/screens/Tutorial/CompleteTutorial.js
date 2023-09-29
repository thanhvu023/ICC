import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
function CompleteTutorial() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/arrowLeft.png')} style={styles.headerImage} />
                <View style={styles.headerContent}>
                    <Text style={styles.headerTitle}>Đậu Hũ Tứ Xuyên</Text>
                </View>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.redBox}>
                    <Image source={require('../../assets/StepImage/Step4.png')} style={styles.stepImage} />
                </View>
                <View style={styles.blueBox}>
                    <Text style={styles.yeah}> Yeah!</Text>
                    <Text style={styles.message}>Món ăn đã hoàn tất. Bon appétit!</Text>

                    <TouchableOpacity style={styles.completeButton}>
                        <Text style={styles.completeButtonText}>Ăn thôi!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(198, 227, 229, 0.4)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    headerImage: {
        width: 24,
        height: 24,
    },
    headerContent: {
        flex: 1,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    wrapper: {
        flex: 1,
    },
    slide: {
        flex: 1,
        flexDirection: 'column',
        width,
    },
    redBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blueBox: {
        width,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 46,
        borderTopRightRadius: 46,
    },
    stepImage: {
        width: 207,
        height: 207,
    },
    completeButton: {
        width: '86%',
        height: 54,
        color: 'white',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 122, 0, 1)',
        position: 'absolute',
        bottom: 36,
    },
    completeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    yeah: {
        fontSize: 32,
        fontWeight: 'bold',
        position: 'absolute',
        bottom: 190,
    },
    message: {
        fontSize: 18,
        width: '45%',
        textAlign: 'center',
        position: 'absolute',
        bottom: 150,
    },
});

export default CompleteTutorial;
