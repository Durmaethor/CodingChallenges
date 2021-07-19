let nums = [];
let curr = [];
let ans = [];
let visited = [];
 
// Function to fill the vector curr
  // while maintaining the indices visited
  // in the array num
function backtrack()
{
    // If current permutation is complete
    if (curr.length == nums.length)
    {
      ans.push(curr);
      for(let i = 0; i < curr.length; i++)
      {
        document.write(curr[i] +" ");
      }
      document.write("<br>");
    }
  
    // Traverse the input vector
    for (let i = 0; i < nums.length;
         i++)
    {
  
      // If index is already visited
      if (visited[i])
        continue;
  
      // If the numebr is dupicate
      if (i > 0 && (nums[i] == nums[i - 1]) && !visited[i - 1])
        continue;
  
      // Set visited[i] flag as true
      visited[i] = true;
  
      // Push nums[i] to current vector
      curr.push(nums[i]);
  
      // Recursive function call
      backtrack();
  
      // Backtrack to the previous
      // state by unsetting visited[i]
      visited[i] = false;
  
      // Pop nums[i] and place at
      // the back of the vector
      curr.pop();
    }
}
 
 // Function to pre-process the vector num
function permuteDuplicates()
{
    // Sort the array
    (nums).sort(function(a,b){return a-b});
  
    for(let i = 0; i < nums.length; i++)
    {
      visited.push(false);
    }
  
    // Find the distinct permutations of num
    backtrack();
  
    return ans;
}
 
// Function call to print all distinct
  // permutations of the vector nums
function getDistinctPermutations()
{
    ans = permuteDuplicates();
}
 
 // Driver code
// Input
nums.push(10,20,30);
 
// Function call to print
// all distinct permutations
getDistinctPermutations();