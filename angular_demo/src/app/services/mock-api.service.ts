import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MockApiService {
	private data: Record<string, unknown[]> = {
		users: [
			{ id: 1, username: 'admin', role: 'admin' },
			{ id: 2, username: 'user', role: 'user' }
		],
		products: [
			{ id: 1, name: 'Product 1' },
			{ id: 2, name: 'Product 2' }
		],
		contacts: [
			{ id: 1, name: 'Contact 1' },
			{ id: 2, name: 'Contact 2' }
		]
	};

	get(resource: string) {
		return this.data[resource] || [];
	}

		post(resource: string, item: unknown) {
	if (!this.data[resource]) this.data[resource] = [];
		this.data[resource].push(item);
		return item;
	}

		put(resource: string, id: number, item: unknown) {
			const arr = this.data[resource];
			if (!arr) return null;
			const idx = arr.findIndex((x) => (typeof x === 'object' && x !== null && 'id' in x && typeof (x as { id?: unknown }).id === 'number' && (x as { id: number }).id === id));
				if (idx > -1) {
					const current = arr[idx];
							if (typeof current === 'object' && current !== null && typeof item === 'object' && item !== null) {
								arr[idx] = { ...current, ...item };
								return arr[idx];
							}
					return current;
				}
			return null;
		}

		delete(resource: string, id: number) {
			const arr = this.data[resource];
			if (!arr) return false;
			const idx = arr.findIndex((x) => (typeof x === 'object' && x !== null && 'id' in x && typeof (x as { id?: unknown }).id === 'number' && (x as { id: number }).id === id));
			if (idx > -1) {
				arr.splice(idx, 1);
				return true;
			}
			return false;
		}
}

