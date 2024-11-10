export const fetchEndpoint = async <T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}${endpoint}`,
    init
  );
  return await response.json();
};
