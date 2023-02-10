const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY ; // make candidate default to trivial key so that you dont need to check if candidate is null on line 18

  if (!event) return candidate; // initially check if event does not exists and return candidate. that way the function does not need to go all the way to line 18

  if (event.partitionKey) {
    candidate = (typeof event.partitionKey !== "string") ? JSON.stringify(event.partitionKey) : event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
  
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};