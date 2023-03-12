import bonusMaskCreator from "./bonusMaskCreator";

function calculateBonus(promoCode: number) {
  let validBonus: boolean = false;
  let evenSum: number = 0;
  let oddSum: number = 0;
  let bonusMask: string = "";
  const digits: number[] = [];

  //record the promo code in the array
  while (promoCode > 0) {
    digits.push(promoCode % 10);
    promoCode = Math.floor(promoCode / 10);
  }
  digits.reverse();

  //creation promo code mask
  if (digits.length === 8) {
    bonusMask = bonusMaskCreator(digits);
  } else {
    console.log("invalid bonus code");
  }

  // checking the validity of the same promotional code
  if (bonusMask.includes("eeeeeeee") || bonusMask.includes("oooooooo")) {
    console.log("Your bonus is nathing!");
    validBonus = true;
  }

  // checking the validity of the random promotional code
  if (bonusMask.includes("eeooeeoo") || bonusMask.includes("ooeeooee")) {
    const randomNumber = Math.floor(Math.random() * 2);
    randomNumber
      ? console.log("Your bonus is 1000")
      : console.log("Your bonus is 2000");
    validBonus = true;
  }

  if (validBonus == false) {
    // processing of the variant for 2000 hryvnias
    if (bonusMask.includes("eeoee") || bonusMask.includes("eeooee")) {
      console.log("Your bonus is 2000");
    }
    // processing of the variant for 1000 hryvnias
    if (bonusMask.includes("ooeoo") || bonusMask.includes("ooeeoo")) {
      console.log("Your bonus is 1000");
    }
    validBonus = true;
  }

  // processing of the variant for 100 hryvnias
  if (!validBonus) {
    digits.forEach((digit) => {
      if (digit % 2 === 0) {
        evenSum += digit;
      } else {
        oddSum += digit;
      }
    });
    if (evenSum > oddSum) {
      console.log("Your bonus is 100");
    } else {
      console.log("Your bonus is nathing!");
    }
  }
}

calculateBonus(44334433);
