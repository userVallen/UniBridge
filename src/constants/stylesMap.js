export const monthList = [
  "firstMonth",
  "secondMonth",
  "thirdMonth",
  "fourthMonth",
  "fifthMonth",
  "sixthMonth",
  "seventhMonth",
  "eighthMonth",
  "ninthMonth",
  "tenthMonth",
  "eleventhMonth",
  "twelfthMonth",
];

export const dayList = [
  "firstDay",
  "secondDay",
  "thirdDay",
  "fourthDay",
  "fifthDay",
  "sixthDay",
  "seventhDay",
  "eighthDay",
  "ninthDay",
  "tenthDay",
  "eleventhDay",
  "twelfthDay",
];

export const majorList = ["mse", "iba", "bio", "kor", "art", "edu"];

export const colorSetList = [
  {
    id: "blue",
    background: "rgba(228, 243, 255, 1)",
    color: "rgba(0, 133, 255, 1)",
    border: "transparent",
  },
  {
    id: "orange",
    background: "rgba(255, 245, 234, 1)",
    color: "rgba(255, 159, 45, 1)",
    border: "transparent",
  },
  {
    id: "gray",
    background: "rgba(232, 232, 232, 1)",
    color: "rgba(88, 87, 87, 1)",
    border: "transparent",
  },
  {
    id: "red",
    background: "rgba(255, 236, 236, 1)",
    color: "rgba(233, 44, 44, 1)",
    border: "transparent",
  },
  {
    id: "green",
    background: "rgba(234, 248, 235, 1)",
    color: "rgba(0, 186, 52, 1)",
    border: "transparent",
  },
  {
    id: "purple",
    background: "rgba(246, 239, 250, 1)",
    color: "rgba(214, 154, 222, 1)",
    border: "transparent",
  },
];

export const majorColorClassMap = {
  mse: colorSetList.find((item) => item.id === "blue"),
  iba: colorSetList.find((item) => item.id === "orange"),
  bio: colorSetList.find((item) => item.id === "gray"),
  kor: colorSetList.find((item) => item.id === "red"),
  art: colorSetList.find((item) => item.id === "green"),
  edu: colorSetList.find((item) => item.id === "purple"),
};
