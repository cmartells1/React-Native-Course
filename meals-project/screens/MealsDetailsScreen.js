import { Text, View } from 'react-native';

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>This is the Meal Details Screen {mealId} </Text>
    </View>
  );
}

export default MealDetailsScreen;
