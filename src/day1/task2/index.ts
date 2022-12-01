import { data } from "./data";

export const day1task2 = () => {
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

  const list = sum.sort((a, b) => a - b).reverse();

  console.log(list[0] + list[1] + list[2]);
};
