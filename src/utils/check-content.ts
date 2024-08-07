const emptyContentPattern = /<[^>]+>\s*(<br>\s*)*<\/[^>]+>/g;

export const isEmptyContent = (content: string) => {
  const sanitizedInput = content.replace(emptyContentPattern, '').trim();
  return sanitizedInput === '';
};
