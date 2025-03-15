export async function apiRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(url, {
      ...options,
      cache: "no-cache",
    });
  
  
    return response.json();
  }
  