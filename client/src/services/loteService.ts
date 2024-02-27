export const saveLote = async (lote: any) => {
  const response = await fetch('/api/lote', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(lote),
  });

  return response.json();
};
