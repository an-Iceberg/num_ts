// https://en.wikipedia.org/wiki/Stencil_(numerical_analysis)

export function d(f: (x: number) => number, x: number, h: number = 0.001): number
{
  return (f(x - 2 * h) - 8 * f(x - h) + 8 * f(x + h) - f(x + 2 * h)) / (12 * h);
}

export function d2(f: (x: number) => number, x: number, h: number = 0.001): number
{
  return d((x) => d(f, x, h), x, h);

  // return (-f(x - 2 * h) + 16 * f(x - h) - 30 * f(x) + 16 * f(x + h) - f(x + 2 * h)) / (12
  //   * Math.pow(h, 2));

  // return (-(1 / 12) * f(x - 2 * h) + (4 / 3) * f(x - h) - 2.5 * f(x) + (4 / 3) * f(x + h)
  //   - (1 / 12) * f(x + 2 * h)) / Math.pow(h, 2);
}

export function d3(f: (x: number) => number, x: number, h: number = 0.001): number
{
  return d((x) => d2(f, x, h), x, h);

  // return (-f(x - 2 * h) + 2 * f(x - h) - 2 * f(x + h) + f(x + 2 * h)) / (2 * Math.pow(h, 3));
}

export function d4(f: (x: number) => number, x: number, h: number = 0.001): number
{
  return d((x) => d3(f, x, h), x, h);

  // return (f(x - 2 * h) - 4 * f(x - h) + 6 * f(x) - 4 * f(x + h) + f(x + 2 * h)) / (Math.pow(h, 4));
}

{
  const x = Math.PI;
  const f = (x: number) => Math.exp(x);
  const d1_f = (x: number) => Math.exp(x);
  const d2_f = (x: number) => Math.exp(x);
  const d3_f = (x: number) => Math.exp(x);
  const d4_f = (x: number) => Math.exp(x);

  console.log(`d1 ε = ${Math.abs(d1_f(x) - d(f, x)).toExponential(2)}`);
  console.log(`d2 ε = ${Math.abs(d2_f(x) - d2(f, x)).toExponential(2)}`);
  console.log(`d3 ε = ${Math.abs(d3_f(x) - d3(f, x)).toExponential(2)}`);
  console.log(`d4 ε = ${Math.abs(d4_f(x) - d4(f, x)).toExponential(2)}`);
}
