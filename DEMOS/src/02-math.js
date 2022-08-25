function sum(a, b) {
  return a + b;
}

const multi = (a, b) =>
{
  return a * b;
}

const divide = (a, b) =>
{
  if(b === 0)
  {
    return null;
  }
  return a / b;
}

module.exports =
{
  sum,
  multi,
  divide
};
