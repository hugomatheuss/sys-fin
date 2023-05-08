export class StorageUtil {
    public static store(key: string, dados: any): void {
        const dadosStorage = btoa(JSON.stringify(dados));
        sessionStorage.setItem(key, dadosStorage);
    }

    public static get(key: string): any {
        const data = sessionStorage.getItem(key)
        return data ? JSON.parse(atob(data)) : null;
    }

    public static remove(key: string): any {
        return sessionStorage.removeItem(key);
    }

    public static removeAll(): void {
        return sessionStorage.clear()
    }
}
