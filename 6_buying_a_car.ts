export function nbMonths(
    startPriceOld: number,
    startPriceNew: number,
    savingperMonth: number,
    percentLossByMonth: number): number[] {
    let nbMonth = 0,
        saving = startPriceOld - startPriceNew,
        priceNew = startPriceNew,
        priceOld = startPriceOld,
        bank = 0;
    while (saving < 0) {
        nbMonth++;  // A new month is starting
        if (!(nbMonth % 2)) percentLossByMonth += .5;

        priceNew -= priceNew * percentLossByMonth / 100;
        priceOld -= priceOld * percentLossByMonth / 100;

        bank += savingperMonth;
        saving = (priceOld + bank) - priceNew;
    }
    return [nbMonth, Math.round(saving)];
}
