function sumSalary(salaries) {
  const values = Object.values(salaries);

  let summ = 0;
  for (const val of values) {
    if (Number.isFinite(val)) {
      summ += val;
    }
  }

  return summ;
}
