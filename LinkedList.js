const numComponents = (head, nums) => {
  let res;
  for (let i = 0; i < head.length; i++) {
    if (!nums.includes(head[i])) {
      res = head[i];
    }
  }
  return res;
};

const head = [0, 1, 2, 3];
const nums = [0, 1, 3];

console.log(numComponents(head, nums));
