import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import SafeView from "~/components/SafeView";

import * as aiService from "~/services/aiService";

const option = {
  itching: "Itching",
  skin_rash: "Skin rash",
  nodal_skin_eruptions: "Nodal skin eruptions",
  continuous_sneezing: "Continuous sneezing",
  shivering: "Shivering",
  chills: "Chills",
  joint_pain: "Joint pain",
  stomach_pain: "Stomach pain",
  acidity: "Acidity",
  ulcers_on_tongue: "Ulcers on tongue",
  muscle_wasting: "Muscle wasting",
  vomiting: "Vomiting",
  burning_micturition: "Burning micturition",
  spotting_urination: "Spotting urination",
  fatigue: "Fatigue",
  weight_gain: "Weight gain",
  anxiety: "Anxiety",
  cold_hands_and_feets: "Cold hands and feet",
  mood_swings: "Mood swings",
  weight_loss: "Weight loss",
  restlessness: "Restlessness",
  lethargy: "Lethargy",
  patches_in_throat: "Patches in throat",
  irregular_sugar_level: "Irregular sugar level",
  cough: "Cough",
  high_fever: "High fever",
  sunken_eyes: "Sunken eyes",
  breathlessness: "Breathlessness",
  sweating: "Sweating",
  dehydration: "Dehydration",
  indigestion: "Indigestion",
  headache: "Headache",
  yellowish_skin: "Yellowish skin",
  dark_urine: "Dark urine",
  nausea: "Nausea",
  loss_of_appetite: "Loss of appetite",
  pain_behind_the_eyes: "Pain behind the eyes",
  back_pain: "Back pain",
  constipation: "Constipation",
  abdominal_pain: "Abdominal pain",
  diarrhoea: "Diarrhea",
  mild_fever: "Mild fever",
  yellow_urine: "Yellow urine",
  yellowing_of_eyes: "Yellowing of eyes",
  acute_liver_failure: "Acute liver failure",
  fluid_overload: "Fluid overload",
  swelling_of_stomach: "Swelling of stomach",
  swelled_lymph_nodes: "Swollen lymph nodes",
  malaise: "Malaise",
  blurred_and_distorted_vision: "Blurred and distorted vision",
  phlegm: "Phlegm",
  throat_irritation: "Throat irritation",
  redness_of_eyes: "Redness of eyes",
  sinus_pressure: "Sinus pressure",
  runny_nose: "Runny nose",
  congestion: "Congestion",
  chest_pain: "Chest pain",
  weakness_in_limbs: "Weakness in limbs",
  fast_heart_rate: "Fast heart rate",
  pain_during_bowel_movements: "Pain during bowel movements",
  pain_in_anal_region: "Pain in anal region",
  bloody_stool: "Bloody stool",
  irritation_in_anus: "Irritation in anus",
  neck_pain: "Neck pain",
  dizziness: "Dizziness",
  cramps: "Cramps",
  bruising: "Bruising",
  obesity: "Obesity",
  swollen_legs: "Swollen legs",
  swollen_blood_vessels: "Swollen blood vessels",
  puffy_face_and_eyes: "Puffy face and eyes",
  enlarged_thyroid: "Enlarged thyroid",
  brittle_nails: "Brittle nails",
  swollen_extremeties: "Swollen extremities",
  excessive_hunger: "Excessive hunger",
  extra_marital_contacts: "Extra marital contacts",
  drying_and_tingling_lips: "Drying and tingling lips",
  slurred_speech: "Slurred speech",
  knee_pain: "Knee pain",
  hip_joint_pain: "Hip joint pain",
  muscle_weakness: "Muscle weakness",
  stiff_neck: "Stiff neck",
  swelling_joints: "Swelling joints",
  movement_stiffness: "Movement stiffness",
  spinning_movements: "Spinning movements",
  loss_of_balance: "Loss of balance",
  unsteadiness: "Unsteadiness",
  weakness_of_one_body_side: "Weakness of one body side",
  loss_of_smell: "Loss of smell",
  bladder_discomfort: "Bladder discomfort",
  foul_smell_of_urine: "Foul smell of urine",
  continuous_feel_of_urine: "Continuous feel of urine",
  passage_of_gases: "Passage of gases",
  internal_itching: "Internal itching",
  "toxic_look_(typhos)": "Toxic look (typhos)",
  depression: "Depression",
  irritability: "Irritability",
  muscle_pain: "Muscle pain",
  altered_sensorium: "Altered sensorium",
  red_spots_over_body: "Red spots over body",
  belly_pain: "Belly pain",
  abnormal_menstruation: "Abnormal menstruation",
  dischromic_patches: "Dischromic patches",
  watering_from_eyes: "Watering from eyes",
  increased_appetite: "Increased appetite",
  polyuria: "Polyuria",
  family_history: "Family history",
  mucoid_sputum: "Mucoid sputum",
  rusty_sputum: "Rusty sputum",
  lack_of_concentration: "Lack of concentration",
  visual_disturbances: "Visual disturbances",
  receiving_blood_transfusion: "Receiving blood transfusion",
  receiving_unsterile_injections: "Receiving unsterile injections",
  coma: "Coma",
  stomach_bleeding: "Stomach bleeding",
  distention_of_abdomen: "Distention of abdomen",
  history_of_alcohol_consumption: "History of alcohol consumption",
  fluid_overload: "Fluid overload",
  blood_in_sputum: "Blood in sputum",
  prominent_veins_on_calf: "Prominent veins on calf",
  palpitations: "Palpitations",
  painful_walking: "Painful walking",
  pus_filled_pimples: "Pus-filled pimples",
  blackheads: "Blackheads",
  scurring: "Scarring",
  skin_peeling: "Skin peeling",
  silver_like_dusting: "Silver-like dusting",
  small_dents_in_nails: "Small dents in nails",
  inflammatory_nails: "Inflammatory nails",
  blister: "Blister",
  red_sore_around_nose: "Red sore around nose",
  yellow_crust_ooze: "Yellow crust ooze",
};

const optionSicks = Object.entries(option).map(([key, value]) => ({
  key,
  value,
}));

function PredictDiseases() {
  const navigation = useNavigation();
  const [data, setData] = useState({ sicks: [] });

  const handleSicks = (value) => {
    const index = data.sicks.indexOf(value.key);
    if (index !== -1) {
      const updatedSicks = data.sicks.filter((item) => item !== value.key);
      setData({ ...data, sicks: updatedSicks });
    } else {
      const updatedSicks = [...data.sicks, value.key];
      setData({ ...data, sicks: updatedSicks });
    }
  };

  const onSubmit = () => {
    const format = data.sicks.join(",");
    aiService
      .getPredictDiseases({ data: format })
      .then((data) => {
        navigation.navigate("ListPredictDiseases", { sickName: data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeView>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        Chọn bệnh lý
      </Text>
      <ScrollView
        style={{
          marginVertical: 10,
          marginBottom: 35,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {optionSicks.map((item) => {
            const checkExist = data.sicks.filter((sick) => sick == item.key);
            return (
              <TouchableOpacity
                key={item.key}
                style={{
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingVertical: 14,
                  borderWidth: checkExist == item.key ? 3 : 1,
                  borderColor: checkExist == item.key ? "#40A2E3" : "#ccc",
                  borderRadius: 10,
                  margin: 10,
                }}
                onPress={() => handleSicks(item)}
              >
                <Text>{item.value}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            backgroundColor: "#AAD7D9",
            paddingVertical: 16,
            marginBottom: 14,
            marginHorizontal: 10,
            borderRadius: 10,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AntDesign name="search1" size={40} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </SafeView>
  );
}

export default PredictDiseases;
