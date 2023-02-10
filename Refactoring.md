# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
So initially, i noticed a lot of nested if statements and i looked deeper into them and i realized that there were some redundancies in the initial function. For example, there was a statement that checked if the variable candidate is null to set it equal to TRIVIAL_PARTITION_KEY. This was only supposed to happen if event was null. Instead of having that check, I can just initialize candidate with TRIVIAL_PARTITION_KEY and then immediately check if event does not exist, then return candidate which would have the value of TRIVIAL_PARTITION_KEY.
Another thing i did was placing the check of if partitionKey was not a string in a ternary code. Ternary can help a lot with reading and understanding code because it helps to get rid of if-else blocks especially when the if-else block is simply just setting variables; in our case, setting candidate variable.
I believe the code is a lot more readable now because i was able to get rid of nested if statements that was making the function bloated. Now its as flat as possible which what we always want when we code.

