import axios from "axios";

// main
async function processQueries() {
  // call api
  const inputResponse = await axios.get(
    "https://test-share.shub.edu.vn/api/intern-test/input"
  );
  const { token, data, query } = inputResponse.data;

  console.log("token", token);

  const n = data.length;

  // Bước 1: Tính toán tổng tích lũy
  const prefixSum = new Array(n).fill(0);
  const evenPrefixSum = new Array(n).fill(0);
  const oddPrefixSum = new Array(n).fill(0);

  prefixSum[0] = data[0];
  evenPrefixSum[0] = data[0];
  oddPrefixSum[0] = 0;

  // sum prefix for all arrays
  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + data[i];
    evenPrefixSum[i] = evenPrefixSum[i - 1] + (i % 2 === 0 ? data[i] : 0);
    oddPrefixSum[i] = oddPrefixSum[i - 1] + (i % 2 !== 0 ? data[i] : 0);
  }

  // Bước 2: process querries
  const results: number[] = [];

  for (const q of query) {
    const { type, range } = q;
    const [l, r] = range;

    if (type === "1") {
      // sum [ l, r ]
      const sum = prefixSum[r] - (l > 0 ? prefixSum[l - 1] : 0);
      results.push(sum);
    } else if (type === "2") {
      // sum odd even in [l, r]
      const evenSum = evenPrefixSum[r] - (l > 0 ? evenPrefixSum[l - 1] : 0);
      const oddSum = oddPrefixSum[r] - (l > 0 ? oddPrefixSum[l - 1] : 0);
      const result = evenSum - oddSum;
      results.push(result);
    }
  }

  console.log(results);

  // send the results

  await axios.post(
    "https://test-share.shub.edu.vn/api/intern-test/output",
    results,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  console.log("Sended");
}

processQueries().catch(console.error);
