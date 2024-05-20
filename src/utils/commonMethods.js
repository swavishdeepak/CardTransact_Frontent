// export function getChangedValues(initialValues, values) {
//   const changedValues = {};

//   // Recursive function to traverse nested objects
//   function compareObjects(initial, current, path = "") {
//     for (const key in initial) {
//       if (initial.hasOwnProperty(key) && current.hasOwnProperty(key)) {
//         const newPath = path ? `${path}.${key}` : key;
//         if (typeof initial[key] === "object" && initial[key] !== null) {
//           if (Object.keys(current[key]).length > 0) {
//             changedValues[newPath] = {};
//             compareObjects(initial[key], current[key], newPath);
//           }
//         } else {
//           if (initial[key] !== current[key]) {
//             changedValues[newPath] = current[key];
//           }
//         }
//       }
//     }
//   }

//   console.log("chagd", changedValues);
//   compareObjects(initialValues, values);
//   return formatChangedValues(changedValues);
// }

export function getFilteredObject(user, current) {
  const result = {};

  for (const key in current) {
      if (typeof current[key] === 'object' && !Array.isArray(current[key]) && current[key] !== null) {
          // If the key is an object, recursively compare nested properties
          const nestedResult = getFilteredObject(user[key] || {}, current[key]);
          if (Object.keys(nestedResult).length > 0) {
              result[key] = nestedResult;
          }
      } else if (current[key] !== user[key]) {
          // If the value is different, add to the result
          result[key] = current[key];
      }
  }

  return result;
}

// Function to format the changed values object as per the desired output
export function formatChangedValues(changedValues) {
  const formattedValues = {};

  for (const key in changedValues) {
    const keyParts = key.split(".");
    let current = formattedValues;

    for (let i = 0; i < keyParts.length - 1; i++) {
      const part = keyParts[i];
      current[part] = current[part] || {};
      current = current[part];
    }

    current[keyParts[keyParts.length - 1]] = changedValues[key];
  }

  return formattedValues;
}

// Function to format the changed values object as per the desired output
