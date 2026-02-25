const BASE_URL = 'https://localhost:3000';
import Cookies from 'js-cookie';

export const authService = {
    async login(credentials: any) {
        const res = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });

        if (!res.ok) throw new Error('Invalid credentials');

        const data = await res.json();
        if (data.token) {
            Cookies.set('token', data.token, { expires: 1 }); // 1 day
        }
    
        return data;
    },

    logout() {
        Cookies.remove('token');
        window.location.href = '/login';
    },

    async register(data: any) {
        const res = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        return res.json();
    },
};

export const exhibitService = {
    async getAll(page: number) {
        const res = await fetch(`${BASE_URL}/exhibits?page=${page}&limit=10`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
    },
    
    async getOne(id: string) {
        const res = await fetch(`${BASE_URL}/exhibits/${id}`, { cache: 'no-store' });
        return res.json();
    },

    async create(data: any) {
        const token = Cookies.get('token');
        if (!token) throw new Error('Unauthorized');

        const res = await fetch(`${BASE_URL}/exhibits`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) throw new Error('Failed to create exhibit');
        return res.json();
    },
};

