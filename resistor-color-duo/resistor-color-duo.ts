export function decodedValue([firstBand, secondBand, thirdBand]: [string, string, string?]): number {

  const resistanceValues = new Map<string, number>([
    ["black", 0],
    ["brown", 1],
    ["red", 2],
    ["orange", 3],
    ["yellow", 4],
    ["green", 5],
    ["blue", 6],
    ["violet", 7],
    ["grey", 8],
    ["white", 9]
  ]);


  if (!resistanceValues.has(firstBand) || !resistanceValues.has(secondBand)) {
    throw new Error("Invalid color bands provided");
  }

  const value1 = resistanceValues.get(firstBand)!;
  const value2 = resistanceValues.get(secondBand)!;

  return value1 * 10 + value2;

}