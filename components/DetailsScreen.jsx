import { Button, Text, View } from "react-native";

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Button
                title="Home"
                onPress={() => navigation.goBack()}
            ></Button>
            <Button
                title="Listar filmes"
                onPress={() => navigation.navigate("Movies")}
            ></Button>
        </View>
    );
}