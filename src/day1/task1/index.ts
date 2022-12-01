import { data } from "./data";

export const day1task1 = () => {
  let sum: number[] = [];

  let total = 0;
  data.map((val) => {
    if (val === 0) {
      sum.push(total);
      total = 0;
    } else {
      total = total + val;
    }
  });

  console.log(sum.sort((a, b) => a - b).reverse()[0]);
}
