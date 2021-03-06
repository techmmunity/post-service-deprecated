/**
 *
 * Every Time that a function be added here,
 * you need to add the type to
 * the types/yup.d.ts file
 *
 */

import * as yup from "yup";

export type Yup = typeof yup;

export const InvalidParamsErrorMessage = `this must be a \`object\` type, but the final value was: \`null\` (cast from the value \`""\`).
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;

export { yup };
