export function calculateDeliveryFee(
  cartValue: number,
  deliveryDistance: number,
  numberOfItems: number,
  deliveryDateTime: Date
): number {
  // Base fee
  let fee = 2; 

  // Small order surcharge
  if (cartValue < 10) {
    fee += 10 - cartValue;
  }

  // Distance Check
  if (deliveryDistance > 1000) {
    const additionalDistance = Math.ceil((deliveryDistance - 1000) / 500);
    fee += additionalDistance;
  }

  if (numberOfItems >= 5) {
    const itemSurcharge = (numberOfItems - 5 + 1) * 0.5;
    fee += itemSurcharge;

    if (numberOfItems > 12) {
      fee += 1.2;
    }
  }

  //Cart Value limit
  if (cartValue >= 200) {
    fee = 0;
  }

  // Checking for Friday Rush Hour (Friday between 3 PM to 7 PM)
  const isRushHour =
    deliveryDateTime.getDay() === 5 &&
    deliveryDateTime.getHours() >= 15 &&
    deliveryDateTime.getHours() < 19;
  if (isRushHour) {
    fee *= 1.2;
  }

  // Limit total fee at 15€
  return Math.min(fee, 15);
}
