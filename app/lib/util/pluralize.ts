export const pluralize = (num: number, [one, other]: string[]) => {
  const pluralRules = new Intl.PluralRules("en-US");
  const pluralForm = pluralRules.select(num);

  switch (pluralForm) {
    case "one":
      return one;
    default:
      return other;
  }
};