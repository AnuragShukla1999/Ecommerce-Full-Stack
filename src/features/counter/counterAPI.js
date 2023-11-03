// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) => {
//     const response = await fetch('http://localhost:8000');
//     const result = await response.json();
//     resolve({data})
//   }
//   );
// }



export async function fetchCount(amount = 1) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch('http://localhost:8000');
      const result = await response.json();
      resolve({ data: result }); // Use result instead of data
    } catch (error) {
      reject(error); // Handle any errors
    }
  });
}
