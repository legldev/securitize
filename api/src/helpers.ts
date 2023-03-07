export const calculateWalletAgeInDays = (timestamp: number): number => {
    const currentTimeInSeconds = Date.now() / 1000;
    const ageInSeconds = currentTimeInSeconds - timestamp;
    const ageInDays = Math.floor(ageInSeconds / (60 * 60 * 24));
    return ageInDays;
  }