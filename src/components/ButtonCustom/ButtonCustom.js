import { Text, TouchableOpacity } from "react-native";

function ButtonCustom({ label, onPress ,warning}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: warning? "red" : "#000",
        
      }}
      activeOpacity={1}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          color: "#000",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default ButtonCustom;
