/* 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.
JS has introduced the .at method for this purpose, but solve this algo w/o it.
If the element does not exist (index is out of range) return null
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;

// RIOT method
// Read Input Output Talk



/**
 * Retrieves the nth to last indexed item from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {number} nthToLast
 * @returns {any} The item at the nthToLast index or null.
 */
function nthLast(items, nthToLast) {
    var idx = items.length - nthToLast
    if (idx >= 0 && idx < items.length){ // if the idx is within the bounds of the array
        return items[idx] //returning the value at that index
    }
    return null //else return null
}

// Tests
const result1 = nthLast(arr1, idx1);
console.log(result1, "should be", expected1);

const result2 = nthLast(arr2, idx2);
console.log(result2, "should be", expected2);

const result3 = nthLast(arr3, idx3);
console.log(result3, "should be", expected3);

const result4 = nthLast(arr4, idx4);
console.log(result4, "should be", expected4);

const result5 = nthLast(arr5, idx5);
console.log(result5, "should be", expected5);