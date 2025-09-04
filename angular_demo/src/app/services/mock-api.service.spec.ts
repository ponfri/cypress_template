import { MockApiService } from './mock-api.service';

describe('MockApiService', () => {
  let service: MockApiService;

  beforeEach(() => {
    service = new MockApiService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', () => {
    const users = service.get('users');
    expect(Array.isArray(users)).toBeTrue();
    expect(users.length).toBeGreaterThan(0);
  });

  it('should add a new product', () => {
    const newProduct = { id: 3, name: 'Product 3' };
    service.post('products', newProduct);
    const products = service.get('products');
  expect(products.find((p: unknown) => typeof p === 'object' && p !== null && 'id' in p && typeof (p as { id?: unknown }).id === 'number' && (p as { id: number }).id === 3)).toBeTruthy();
  });

  it('should update a contact', () => {
    const updated = service.put('contacts', 1, { name: 'Updated Contact' });
    expect(updated).toBeTruthy();
    if (typeof updated === 'object' && updated !== null && 'name' in updated) {
      expect((updated as { name: string }).name).toBe('Updated Contact');
    }
  });

  it('should delete a user', () => {
    const result = service.delete('users', 1);
    expect(result).toBeTrue();
    const users = service.get('users');
  expect(users.find((u: unknown) => typeof u === 'object' && u !== null && 'id' in u && typeof (u as { id?: unknown }).id === 'number' && (u as { id: number }).id === 1)).toBeUndefined();
  });
});
