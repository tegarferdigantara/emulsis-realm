'use client'

import { useState, useEffect } from "react";
import {
  Search,
  Filter,
  ShoppingCart,
  Sword,
  Shield,
  Zap,
  Wand2,
  Bot as Bow,
  X,
  User,
} from "lucide-react";

const categories = [
  { label: "All", value: "all" },
  { label: "Weapon", value: "weapon" },
  { label: "Armor", value: "armor" },
  { label: "Consumable", value: "consumable" },
  { label: "Accessory", value: "accessory" },
];

const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "low" },
  { label: "Price: High to Low", value: "high" },
  { label: "Name: A-Z", value: "az" },
  { label: "Name: Z-A", value: "za" },
];

const items = [
  {
    id: 1,
    name: "Excalibur Sword",
    category: "weapon",
    price: 250,
    image: "https://static.wikia.nocookie.net/rohan/images/7/7e/Excalibur.png",
    icon: Sword,
    description:
      "A legendary sword with immense power, said to be unbreakable.",
  },
  {
    id: 2,
    name: "Dragon Shield",
    category: "armor",
    price: 180,
    image:
      "https://static.wikia.nocookie.net/rohan/images/2/2d/Dragon_Shield.png",
    icon: Shield,
    description:
      "A shield forged from dragon scales, offers superior protection.",
  },
  {
    id: 3,
    name: "Elven Bow",
    category: "weapon",
    price: 200,
    image: "https://static.wikia.nocookie.net/rohan/images/3/3d/Elven_Bow.png",
    icon: Bow,
    description: "A finely crafted bow favored by elven archers.",
  },
  {
    id: 4,
    name: "Mana Potion",
    category: "consumable",
    price: 30,
    image:
      "https://static.wikia.nocookie.net/rohan/images/6/6e/Mana_Potion.png",
    icon: Wand2,
    description: "Restores a moderate amount of mana instantly.",
  },
  {
    id: 5,
    name: "Ring of Power",
    category: "accessory",
    price: 120,
    image:
      "https://static.wikia.nocookie.net/rohan/images/8/8e/Ring_of_Power.png",
    icon: Zap,
    description: "A mystical ring that increases the wearer's strength.",
  },
  {
    id: 6,
    name: "Health Potion",
    category: "consumable",
    price: 25,
    image:
      "https://static.wikia.nocookie.net/rohan/images/2/2e/Health_Potion.png",
    icon: Wand2,
    description: "Restores a moderate amount of health instantly.",
  },
  {
    id: 7,
    name: "Mystic Staff",
    category: "weapon",
    price: 320,
    image:
      "https://static.wikia.nocookie.net/rohan/images/4/4e/Mystic_Staff.png",
    icon: Wand2,
    description: "A staff imbued with ancient magic, increases spell power.",
  },
  {
    id: 8,
    name: "Guardian Helm",
    category: "armor",
    price: 150,
    image:
      "https://static.wikia.nocookie.net/rohan/images/5/5e/Guardian_Helm.png",
    icon: Shield,
    description: "A sturdy helm that protects against critical hits.",
  },
  {
    id: 9,
    name: "Swift Boots",
    category: "accessory",
    price: 90,
    image:
      "https://static.wikia.nocookie.net/rohan/images/6/6e/Swift_Boots.png",
    icon: Zap,
    description: "Boots that increase movement speed.",
  },
  {
    id: 10,
    name: "Elixir of Life",
    category: "consumable",
    price: 60,
    image:
      "https://static.wikia.nocookie.net/rohan/images/7/7e/Elixir_of_Life.png",
    icon: Wand2,
    description: "A rare elixir that fully restores health.",
  },
  {
    id: 11,
    name: "Cloak of Shadows",
    category: "armor",
    price: 210,
    image:
      "https://static.wikia.nocookie.net/rohan/images/8/8e/Cloak_of_Shadows.png",
    icon: Shield,
    description: "A cloak that grants invisibility for a short time.",
  },
  {
    id: 12,
    name: "Phoenix Feather",
    category: "consumable",
    price: 75,
    image:
      "https://static.wikia.nocookie.net/rohan/images/9/9e/Phoenix_Feather.png",
    icon: Zap,
    description: "Revives a fallen ally instantly.",
  },
  {
    id: 13,
    name: "Shadow Blade",
    category: "weapon",
    price: 270,
    image:
      "https://static.wikia.nocookie.net/rohan/images/1/1e/Shadow_Blade.png",
    icon: Sword,
    description: "A blade forged in darkness, deals extra damage at night.",
  },
  {
    id: 14,
    name: "Thunder Axe",
    category: "weapon",
    price: 295,
    image:
      "https://static.wikia.nocookie.net/rohan/images/2/2e/Thunder_Axe.png",
    icon: Sword,
    description: "An axe crackling with thunder, stuns enemies on hit.",
  },
  {
    id: 15,
    name: "Crystal Dagger",
    category: "weapon",
    price: 160,
    image:
      "https://static.wikia.nocookie.net/rohan/images/3/3e/Crystal_Dagger.png",
    icon: Sword,
    description: "A dagger made of pure crystal, extremely sharp and light.",
  },
  {
    id: 16,
    name: "Inferno Bow",
    category: "weapon",
    price: 310,
    image:
      "https://static.wikia.nocookie.net/rohan/images/4/4e/Inferno_Bow.png",
    icon: Bow,
    description: "A bow imbued with fire, arrows ignite targets.",
  },
  {
    id: 17,
    name: "Frost Staff",
    category: "weapon",
    price: 280,
    image:
      "https://static.wikia.nocookie.net/rohan/images/5/5e/Frost_Staff.png",
    icon: Wand2,
    description: "A staff that freezes enemies on contact.",
  },
  {
    id: 18,
    name: "Golden Spear",
    category: "weapon",
    price: 350,
    image:
      "https://static.wikia.nocookie.net/rohan/images/6/6e/Golden_Spear.png",
    icon: Sword,
    description: "A spear made of gold, increases critical hit rate.",
  },
];

const ItemMall = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [modalItem, setModalItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [userPoints, setUserPoints] = useState(1000); // dummy user points
  const username = "Adventurer"; // dummy username
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  let filtered = items.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "high")
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "az")
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "za")
    filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const pagedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const goToPage = (page) => setCurrentPage(page);
  // Reset to page 1 if filter/search/sort changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category, search, sort]);

  const openModal = (item) => {
    setModalItem(item);
    setQuantity(1);
  };
  const closeModal = () => setModalItem(null);

  const handleAddToCart = () => {
    if (!modalItem) return;
    setCart((prev) => {
      const exist = prev.find((i) => i.id === modalItem.id);
      if (exist) {
        return prev.map((i) =>
          i.id === modalItem.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...modalItem, quantity }];
    });
    closeModal();
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const cartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const handleDirectBuy = () => {
    if (!modalItem) return;
    setCart([{ ...modalItem, quantity }]);
    closeModal();
    setTimeout(() => setCartOpen(true), 100); // buka cart setelah modal detail tertutup
  };

  return (
    <section
      id="mall"
      className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center font-gaming text-glow">
          Item Mall
        </h2>
        <p className="text-center text-gray-300 font-fantasy mb-8 max-w-2xl mx-auto">
          Temukan berbagai item eksklusif untuk memperkuat karaktermu! Gunakan
          Rohan Points untuk membeli senjata, armor, potion, dan aksesori langka
          di Item Mall.
        </p>
        {/* Profil Mini & Rohan Points */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <User className="w-8 h-8 text-orange-400" />
            <span className="font-gaming text-white text-lg">{username}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-gaming text-orange-400 text-lg">
              Rohan Points:
            </span>
            <span className="font-gaming text-white text-2xl text-glow">
              {userPoints} RP
            </span>
          </div>
        </div>
        {/* Cart Icon */}
        <div className="flex justify-end mb-4">
          <button className="relative" onClick={() => setCartOpen(true)}>
            <ShoppingCart className="w-8 h-8 text-orange-400" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5 font-gaming border-2 border-black">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        {/* Filter & Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-orange-400" />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-black/70 border border-orange-500 text-white rounded-lg px-4 py-2 font-fantasy focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-orange-400" />
            <input
              type="text"
              placeholder="Search Items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black/70 border border-orange-500 text-white rounded-lg px-4 py-2 font-fantasy focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 font-gaming">Sort By</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-black/70 border border-orange-500 text-white rounded-lg px-4 py-2 font-fantasy focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pagedItems.map((item) => (
            <div
              key={item.id}
              className="relative gaming-card rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-orange-500/40 transition-all bg-black/60 backdrop-blur-md border border-orange-500/20 hover:border-orange-400/70 hover:scale-105 duration-300 group overflow-hidden"
            >
              {/* Badge kategori */}
              <span className="absolute top-4 left-4 bg-orange-500/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow group-hover:bg-orange-600/90 transition-all font-gaming">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
              {/* Gambar item */}
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Nama item */}
              <h3 className="text-xl font-bold text-white mb-1 font-gaming text-glow text-center">
                {item.name}
              </h3>
              {/* Deskripsi singkat */}
              <p className="text-gray-400 text-sm font-fantasy mb-3 text-center line-clamp-2">
                {item.description}
              </p>
              {/* Harga dan ikon */}
              <div className="flex items-center space-x-2 mb-4">
                <item.icon className="w-6 h-6 text-orange-400" />
                <span className="text-lg font-bold text-orange-400 font-gaming">
                  {item.price} RP
                </span>
              </div>
              {/* Tombol Buy */}
              <button
                className="mt-auto bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all w-full"
                onClick={() => openModal(item)}
              >
                <ShoppingCart className="w-5 h-5 inline-block mr-2" />
                Buy
              </button>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-400 font-fantasy py-12">
              No items found.
            </div>
          )}
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              className="px-3 py-1 rounded bg-black/60 border border-orange-500 text-orange-400 font-gaming disabled:opacity-50"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 rounded font-gaming border ${
                  currentPage === idx + 1
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-black/60 text-orange-400 border-orange-500 hover:bg-orange-500 hover:text-white"
                }`}
                onClick={() => goToPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-black/60 border border-orange-500 text-orange-400 font-gaming disabled:opacity-50"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        {/* Modal Detail Item */}
        {modalItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2"
            onClick={closeModal}
          >
            <div
              className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-4 sm:p-8 max-w-xs sm:max-w-md w-full relative gaming-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={modalItem.image}
                alt={modalItem.name}
                className="w-32 h-32 object-contain mx-auto mb-4 drop-shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-2 font-gaming text-glow text-center">
                {modalItem.name}
              </h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <modalItem.icon className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-gaming capitalize">
                  {modalItem.category}
                </span>
              </div>
              <p className="text-gray-300 font-fantasy text-center mb-4">
                {modalItem.description}
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-lg font-bold text-orange-400 font-gaming">
                  {modalItem.price} RP
                </span>
                <span className="text-gray-400 font-fantasy">per item</span>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="text-gray-300 font-fantasy">Quantity</span>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, Number(e.target.value)))
                  }
                  className="w-20 px-3 py-2 rounded-lg bg-black/70 border border-orange-500 text-white font-fantasy text-center focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-gray-400 font-fantasy">Total:</span>
                <span className="text-xl font-bold text-orange-400 font-gaming">
                  {modalItem.price * quantity} RP
                </span>
              </div>
              <div className="flex gap-4">
                <button
                  className="flex-1 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 inline-block mr-2" />
                  Add to Cart
                </button>
                <button
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-6 py-3 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-red-500/50 transition-all"
                  onClick={handleDirectBuy}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Cart Modal */}
        {cartOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2"
            onClick={() => setCartOpen(false)}
          >
            <div
              className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-4 sm:p-8 max-w-sm sm:max-w-lg w-full relative gaming-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
                onClick={() => setCartOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-gaming text-glow">
                Your Cart
              </h3>
              {/* Total Rohan Points User */}
              <div className="flex justify-between items-center mb-6 p-4 rounded-lg bg-black/60 border border-orange-500">
                <span className="font-gaming text-orange-400 text-lg">
                  Your Rohan Points
                </span>
                <span className="font-gaming text-white text-2xl text-glow">
                  {userPoints} RP
                </span>
              </div>
              {cart.length === 0 ? (
                <div className="text-center text-gray-400 font-fantasy py-12">
                  Your cart is empty.
                </div>
              ) : (
                <>
                  <div className="space-y-4 max-h-64 overflow-y-auto mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 bg-black/60 rounded-lg p-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-contain rounded"
                        />
                        <div className="flex-1">
                          <div className="font-gaming text-white text-lg">
                            {item.name}
                          </div>
                          <div className="text-orange-400 font-gaming text-sm">
                            {item.price} RP x {item.quantity}
                          </div>
                        </div>
                        <div className="font-gaming text-orange-400 text-lg">
                          {item.price * item.quantity} RP
                        </div>
                        <button
                          className="ml-2 text-red-400 hover:text-red-600"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-300 font-fantasy">
                      Total Price:
                    </span>
                    <span className="text-2xl font-bold text-orange-400 font-gaming">
                      {cartTotal} RP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-300 font-fantasy">
                      Rohan Points After Purchase:
                    </span>
                    <span className="text-2xl font-bold text-green-400 font-gaming">
                      {Math.max(userPoints - cartTotal, 0)} RP
                    </span>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all"
                    onClick={() => alert("Checkout is not implemented yet!")}
                  >
                    Checkout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ItemMall;