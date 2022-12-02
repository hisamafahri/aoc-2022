import { data } from "./data";

export const day2task2 = () => {
  let score = 0;
  data.map((round) => {
    // Rock
    if (round[0] === "A") {
      if (round[1] === "X") {
        // scissors (3) + lose (0)
        score = score + (3 + 0);
      }

      if (round[1] === "Y") {
        // rock (1) + draw (3)
        score = score + (1 + 3);
      }

      if (round[1] === "Z") {
        // paper (2) + win (6)
        score = score + (2 + 6);
      }
    }

    // Paper
    if (round[0] === "B") {
      if (round[1] === "X") {
        // rock (1) + lose (0)
        score = score + (1 + 0);
      }

      if (round[1] === "Y") {
        // paper (2) + draw (3)
        score = score + (2 + 3);
      }

      if (round[1] === "Z") {
        // scissors (3) + win (6)
        score = score + (3 + 6);
      }
    }

    // Scissors
    if (round[0] === "C") {
      if (round[1] === "X") {
        // paper (2) + lose (0)
        score = score + (2 + 0);
      }

      if (round[1] === "Y") {
        // scissors (3) + draw (3)
        score = score + (3 + 3);
      }

      if (round[1] === "Z") {
        // rock (1) + win (6)
        score = score + (1 + 6);
      }
    }
  });

  console.log(score);
};
