  let evenNumberBuffer: string = "";
  let oddNumberBuffer: string = "";
let bonusMask: string = "";
 
const bonusMaskCreator = (bonusArr: number[]): string => {
   bonusArr.forEach((digit, i) => {
      if (digit % 2 === 0) {
        bonusMask += oddNumberBuffer;
        evenNumberBuffer += "e";
        oddNumberBuffer = "";
        if (i == 7 && evenNumberBuffer) {
          bonusMask += evenNumberBuffer;
        }
      } else {
        bonusMask += evenNumberBuffer;
        oddNumberBuffer += "o";
        evenNumberBuffer = "";
        if (i == 7 && oddNumberBuffer) {
          bonusMask += oddNumberBuffer;
        }
      }
    });
  return bonusMask;
}
 
export default bonusMaskCreator;