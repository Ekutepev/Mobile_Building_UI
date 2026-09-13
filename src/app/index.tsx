import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.groupedGreeting}>
          <Text style={[styles.greeting, { fontSize: 14 }]}>Good morning</Text>
          <Text style={[styles.greeting, { fontWeight: "bold" }]}>Evgeny</Text>
        </View>
        <View style={styles.circleIcon}>
          <MaterialCommunityIcons name="email-outline" size={24} color="#008a00" />
        </View>
      </View>
      <ScrollView horizontal={true} style={{ marginTop: -20, flexGrow: 0 }}>
        <TouchableOpacity>
          <Pressable style={[styles.OvalButton, { marginLeft: 20 }]}>
            <MaterialCommunityIcons name="send-outline" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Interac e-Transfer</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={styles.OvalButton}>
            <Fontisto name="arrow-swap" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Transfer</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={styles.OvalButton}>
            <MaterialCommunityIcons name="file-document-outline" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Pay Bills</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={styles.OvalButton}>
            <MaterialCommunityIcons name="camera-outline" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Deposit Cheque</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={styles.OvalButton}>
            <SimpleLineIcons name="globe" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>TD Global Transfer</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={[styles.OvalButton, { marginRight: 20 }]}>
            <MaterialCommunityIcons name="currency-usd" size={24} color="#008a00" />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Request Money</Text>
          </Pressable>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.myAccountContainer}>
        <View style={styles.myAccounts}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>My Accounts</Text>
          <MaterialCommunityIcons name="chevron-right" size={40} color="#008a00" />
          <MaterialCommunityIcons style={{ marginLeft: "auto" }} name="dots-horizontal" size={24} color="black" />
        </View>
      </View>
      <View style={styles.NavBar}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Navigation Bar</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f3f3f3",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    minHeight: 200,
    width: "100%",
    padding: 20,
    backgroundColor: "#008a00",
  },

  groupedGreeting: {
    justifyContent: "flex-start",
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },

  OvalButton: {
    width: "auto",
    height: 45,
    borderRadius: 22,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 14,
    marginLeft: 8,
    flexDirection: "row",

  },

  greeting: {
    color: "white",
    fontSize: 18,
  },

  myAccountContainer: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  myAccounts: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
  },

  NavBar: {
    width: "100%",
    height: 100,
    backgroundColor: "#008a00",
    justifyContent: "center",
    alignItems: "center",

  }
});
