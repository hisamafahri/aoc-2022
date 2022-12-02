import { data } from "./data";

export const day2task1 = () => {
  let score = 0;
  data.map((round) => {
    // Rock
    if (round[0] === "A") {
      if (round[1] === "X") {
        // draw (3) + rock (1)
        score = score + (3 + 1);
      }

      if (round[1] === "Y") {
        // win (6) + paper (2)
        score = score + (6 + 2);
      }

      if (round[1] === "Z") {
        // lose (0) + scissors (3)
        score = score + (0 + 3);
      }
    }

    // Paper
    if (round[0] === "B") {
      if (round[1] === "X") {
        // lose (0) + rock (1)
        score = score + (0 + 1);
      }

      if (round[1] === "Y") {
        // draw (3) + paper (2)
        score = score + (3 + 2);
      }

      if (round[1] === "Z") {
        // win (6) + scissors (3)
        score = score + (6 + 3);
      }
    }

    // Scissors
    if (round[0] === "C") {
      if (round[1] === "X") {
        // win (6) + rock (1)
        score = score + (6 + 1);
      }

      if (round[1] === "Y") {
        // lose (0) + paper (2)
        score = score + (0 + 2);
      }

      if (round[1] === "Z") {
        // draw (3) + scissors (3)
        score = score + (3 + 3);
      }
    }
  });

  console.log(score);
};
