/**
 * Transform the object to array.
 * @param obj
 * @returns {{value: *, key: *}[]}
 */
export function transform(obj) {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
}
