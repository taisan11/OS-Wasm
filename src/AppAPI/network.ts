export async function request(url: string,requestInit?: RequestInit) {
    return await fetch(url, requestInit);
}