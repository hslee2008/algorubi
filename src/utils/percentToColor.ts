const percentToColor = (percent: string) => {
  // percent format will be in 1/x
  switch (percent) {
    case "1/18":
      return "blue";
    case "1/36":
      return "green";
    case "1/72":
      return "red";
  }
};

export { percentToColor };
