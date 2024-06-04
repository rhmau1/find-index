function cariIndex(arr, target) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sum = arr[i] + arr[j];
      if (sum === target) {
        results.push([i, j]);
      }
    }
  }

  return results;
}

const nums = [4, 12, 8, 9, 10, 6, 1];

const A = cariIndex(nums, 13);
console.log('Pasangan index dengan hasil penjumlahan 13 adalah:');
if (A.length > 0) {
  A.forEach((x) => {
    console.log(`Index ${x[0]} dan ${x[1]}`);
  });
} else {
  console.log('Tidak ditemukan pasangan index yang sesuai');
}

const B = cariIndex(nums, 18);
console.log('Pasangan index dengan hasil penjumlahan 18 adalah:');
if (B.length > 0) {
  B.forEach((x) => {
    console.log(`Index ${x[0]} dan ${x[1]}`);
  });
} else {
  console.log('Tidak ditemukan pasangan index yang sesuai');
}
