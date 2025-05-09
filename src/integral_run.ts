import { int_2, int_3, int_4 } from "./integral.ts";

{
  const f = (x: number): number => Math.cos(x);
  const F = (x: number): number => Math.sin(x);
  let a = 0.0;
  let b = 5.0;

  console.log("f(x) = sin(x)");
  console.log(`a = ${a}, b = ${b}`);

  // deno-fmt-ignore
  console.log(`Simpson's 1/3: ε = ${Math.abs(int_2(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Simpson's 3/8: ε = ${Math.abs(int_3(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Boole's:       ε = ${Math.abs(int_4(a, b, f) - (F(b) - F(a))).toExponential(2)}`);

  console.log();

  a = 30.;
  b = 40;

  console.log(`a = ${a}, b = ${b}`);

  // deno-fmt-ignore
  console.log(`Simpson's 1/3: ε = ${Math.abs(int_2(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Simpson's 3/8: ε = ${Math.abs(int_3(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Boole's:       ε = ${Math.abs(int_4(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
}

console.log();

{
  const f = (x: number): number => 1 / x;
  const F = (x: number): number => Math.log(x);
  let a = 1.0;
  let b = 5.0;

  console.log("f(x) = 1/x");
  console.log(`a = ${a}, b = ${b}`);

  // deno-fmt-ignore
  console.log(`Simpson's 1/3: ε = ${Math.abs(int_2(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Simpson's 3/8: ε = ${Math.abs(int_3(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Boole's:       ε = ${Math.abs(int_4(a, b, f) - (F(b) - F(a))).toExponential(2)}`);

  console.log();

  a = 100.0;
  b = 150.0;

  console.log(`a = ${a}, b = ${b}`);

  // deno-fmt-ignore
  console.log(`Simpson's 1/3: ε = ${Math.abs(int_2(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Simpson's 3/8: ε = ${Math.abs(int_3(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
  // deno-fmt-ignore
  console.log(`Boole's:       ε = ${Math.abs(int_4(a, b, f) - (F(b) - F(a))).toExponential(2)}`);
}
