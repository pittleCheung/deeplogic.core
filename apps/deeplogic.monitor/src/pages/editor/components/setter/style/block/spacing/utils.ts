export function extractSpacing(data, type) {
  return {
    top: data?.[`${type}Top`] ?? 0,
    right: data?.[`${type}Right`] ?? 0,
    bottom: data?.[`${type}Bottom`] ?? 0,
    left: data?.[`${type}Left`] ?? 0,
  };
}
