

const convertBase64 = (file: File):Promise<string> => new Promise<string>((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result?.toString() || '');
  reader.onerror = reject;
});

export default convertBase64;