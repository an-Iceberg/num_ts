function range(from: number, to: number): number[]
{
  return [...Array(Math.floor(to - from) + 1)]
    .map((_, i) => from + i);
}

/**
 * Calculates the integral of `f` between `a` and `b` using
 * [Simpson's ⅓ rule](https://en.wikipedia.org/wiki/Simpson%27s_rule#Composite_Simpson's_1/3_rule)
 * , so using polynomials of 2ⁿᵈ degree.
 */
export function int_2(
  a: number,
  b: number,
  f: (x: number) => number,
  h: number = 1e-2,
): number
{
  const n = Math.ceil((b - a) / h);
  const x = (i: number): number => a + (i * h);

  // deno-fmt-ignore
  return (1/3)*h*range(1, n/2)
    .map(i => f(x(2*i - 2)) + 4*f(x(2*i - 1)) + f(x(2*i)))
    .reduce((Σ, σ) => Σ + σ); // Sum
}

/**
 * Calculates the integral of `f` between `a` and `b` using
 * [Simpson's ⅜ rule](https://en.wikipedia.org/wiki/Simpson%27s_rule#Composite_Simpson's_3/8_rule)
 * , so using polynomials of 3ʳᵈ degree.
 */
export function int_3(
  a: number,
  b: number,
  f: (x: number) => number,
  h: number = 1e-2,
): number
{
  const n = Math.ceil((b - a) / h);
  const x = (i: number): number => a + (i * h);

  // deno-fmt-ignore
  return (3/8)*h*range(1, n/3)
    .map(i => f(x(3*i - 3)) + 3*f(x(3*i - 2)) + 3*f(x(3*i - 1)) + f(x(3*i)))
    .reduce((prev, current) => prev + current); // Sum
}

/**
 * Calculates the integral of `f` between `a` and `b` using
 * [Boole's rule](https://en.wikipedia.org/wiki/Finite_difference_coefficient)
 * , so using polynomials of 4ʳᵈ degree.
 */
export function int_4(
  a: number,
  b: number,
  f: (x: number) => number,
  h: number = 1e-2,
): number
{
  const n = Math.ceil((b - a) / h);
  const x = (i: number): number => a + (i * h);

  // deno-fmt-ignore
  return (2/45)*h*range(1, n/4)
    .map((i) => 7*f(x(4*i - 4)) + 32*f(x(4*i - 3)) + 12*f(x(4*i - 2)) + 32*f(x(4*i - 1)) + 7*f(x(4*i)))
    .reduce((prev, current) => prev + current); // Sum
}
