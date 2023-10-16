import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function DishesScreen({ route, navigation }) {
    // Sử dụng route.params ở đây
    const { data } = route.params;
    console.log('Dữ liệu từ params:', data);

    // ... phần còn lại của mã của bạn
}

function DishesNavigator() {
    return (
        <Stack.Navigator initialRouteName="Dishes">
            <Stack.Screen name="Dishes" component={DishesScreen} />
        </Stack.Navigator>
    );
}

export default DishesNavigator;
