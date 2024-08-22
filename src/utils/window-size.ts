export function isMoblieSize(width: number | undefined) {
  if (!width) {
    return false;
  }

  return width < 640;
}
