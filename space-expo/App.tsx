import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppRegistry } from "react-native";
import Home from "./src/components/Home/Home";
import PlanetPages from "./src/components/PlanetPages/PlanetPages";
import CrewPages from "./src/components/CrewPages/CrewPages";
import LaunchesPages from "./src/components/LaunchesPages/LaunchesPages";
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://api.spacex.land/graphql/",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PlanetPages" component={PlanetPages} />
          <Stack.Screen name="CrewPages" component={CrewPages} />
          <Stack.Screen name="LaunchesPages" component={LaunchesPages} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent("space-expo", () => App);
