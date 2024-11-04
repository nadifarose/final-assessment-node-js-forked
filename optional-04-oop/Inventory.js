/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  constructor() {
    this.items = []; // Initialize an empty array for items
  }

  addItem(item) {
    this.items.push(item); // Add the item to the items array
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id); // Remove item by id
  }

  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n'); // List all items
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
