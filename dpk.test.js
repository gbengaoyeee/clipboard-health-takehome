const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a non-empty trivial key when given an empty object", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

  it("Returns a non-empty trivial key when given an array", () => {
    const trivialKey = deterministicPartitionKey([]);
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

  it("Returns a non-empty trivial key when given a string", () => {
    const trivialKey = deterministicPartitionKey('hello');
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

  it("Returns a non-empty trivial key when given a number", () => {
    const trivialKey = deterministicPartitionKey(123456789);
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  });

  it("Returns a non-empty trivial key when given a partitionKey and trivialKey is the same as partitionKey", () => {
    const partitionKey = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    const trivialKey = deterministicPartitionKey({
      partitionKey,
    });
    expect(trivialKey.length).toBeLessThanOrEqual(256);
    expect(trivialKey).toBe(partitionKey);
  })

  it("Returns a stringified version of a non-string partitionKey", () => {
    const partitionKey = 123456789;
    const trivialKey = deterministicPartitionKey({
      partitionKey,
    });
    expect(trivialKey).toBe(partitionKey.toString());
  })

  it("Returns a valid trivialKey when partitionKey is greater than 256", () => {
    const partitionKey = "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927eb"
    expect(partitionKey.length).toBeGreaterThan(256);
    const trivialKey = deterministicPartitionKey({
      partitionKey,
    });
    expect(trivialKey.length).toBeLessThanOrEqual(256);
  })

});
