import React, { useState } from "react";
import {
  User,
  Search,
  Filter,
  ShoppingCart,
  Upload,
  X,
  Image as ImageIcon,
} from "lucide-react";

const username = "Adventurer";
const userPoints = 1000;

const sortOptions = [
  { label: "Date (Newest)", value: "date_desc" },
  { label: "Date (Oldest)", value: "date_asc" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

type ExchangeItem = {
  id: number;
  name: string;
  image: string;
  seller: string;
  price: number;
  stack: number;
  saleDate: string;
};

const dummyItems: ExchangeItem[] = Array.from({ length: 23 }).map((_, i) => ({
  id: i + 1,
  name: "1k Relic Upgrade Stones",
  image:
    "https://static.wikia.nocookie.net/rohan/images/2/2e/Relic_Upgrade_Stone.png",
  seller: i % 2 === 0 ? "aalamRanger" : "bolt",
  price: i % 2 === 0 ? 100 : 200,
  stack: 1,
  saleDate: `2025-07-${19 - Math.floor(i / 5)} ${String(23 - (i % 24)).padStart(
    2,
    "0"
  )}:50:3${i % 10}`,
}));

const ExchangeMall = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [sellModal, setSellModal] = useState(false);
  const [buyModal, setBuyModal] = useState<ExchangeItem | null>(null);

  // Filter & sort
  let filtered = dummyItems.filter((item: ExchangeItem) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  if (sort === "date_desc")
    filtered = [...filtered].sort((a, b) => b.id - a.id);
  if (sort === "date_asc") filtered = [...filtered].sort((a, b) => a.id - b.id);
  if (sort === "price_asc")
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price_desc")
    filtered = [...filtered].sort((a, b) => b.price - a.price);

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const pagedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, sort]);

  // Sell form state
  const [sellName, setSellName] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [sellStack, setSellStack] = useState("1");
  const [sellImage, setSellImage] = useState("");

  // Buy modal state
  const [buyQty, setBuyQty] = useState(1);

  return (
    <section
      id="exchange"
      className="py-20 bg-gradient-to-b from-gray-900 to-black min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profil Mini & Sell Button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center space-x-3">
            <User className="w-10 h-10 text-orange-400" />
            <span className="font-gaming text-white text-xl">{username}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-gaming text-orange-400 text-lg">
              Rohan Points:
            </span>
            <span className="font-gaming text-white text-2xl text-glow">
              {userPoints} RP
            </span>
            <button
              className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-2 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
              onClick={() => setSellModal(true)}
            >
              <Upload className="w-5 h-5" /> Sell Item
            </button>
          </div>
        </div>
        <p className="text-center text-gray-300 font-fantasy mb-8 max-w-2xl mx-auto">
          Jual beli item antar pemain dengan mudah! Temukan penawaran terbaik
          atau pasang item milikmu untuk dijual di Exchange Mall.
        </p>
        {/* Search & Sort */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-orange-400" />
            <input
              type="text"
              placeholder="Enter keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-black/70 border border-orange-500 text-white rounded-lg px-4 py-2 font-fantasy focus:outline-none"
            />
            <button className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-4 py-2 rounded-lg font-bold font-gaming ml-2">
              SEARCH
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 font-gaming">Sort by:</span>
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
        {/* Table */}
        <div className="overflow-x-auto rounded-xl gaming-card shadow-lg">
          <table className="w-full text-left font-fantasy text-gray-200">
            <thead>
              <tr className="border-b border-orange-700 text-orange-400">
                <th className="py-3">IMAGE</th>
                <th>NAME</th>
                <th>SELLER</th>
                <th>PRICE</th>
                <th>STACK</th>
                <th>SALE DATE</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {pagedItems.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-800 hover:bg-black/30 transition"
                >
                  <td className="py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 object-contain rounded"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.seller}</td>
                  <td className="text-orange-400 font-gaming font-bold">
                    {item.price} RP
                  </td>
                  <td>{item.stack}</td>
                  <td>{item.saleDate}</td>
                  <td>
                    <button
                      className="bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-4 py-2 rounded-lg font-bold font-gaming shadow-lg hover:shadow-orange-500/50 transition-all flex items-center gap-2"
                      onClick={() => {
                        setBuyModal(item);
                        setBuyQty(1);
                      }}
                    >
                      <ShoppingCart className="w-4 h-4" /> BUY
                    </button>
                  </td>
                </tr>
              ))}
              {pagedItems.length === 0 && (
                <tr>
                  <td colSpan={7} className="text-center text-gray-400 py-8">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              className="px-3 py-1 rounded bg-black/60 border border-orange-500 text-orange-400 font-gaming disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage - 1)}
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
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 rounded bg-black/60 border border-orange-500 text-orange-400 font-gaming disabled:opacity-50"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
        {/* Modal Sell Item */}
        {sellModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2"
            onClick={() => setSellModal(false)}
          >
            <div
              className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-4 sm:p-8 max-w-xs sm:max-w-md w-full relative gaming-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
                onClick={() => setSellModal(false)}
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold text-white mb-6 text-center font-gaming text-glow">
                Sell Item
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-fantasy mb-2">
                    Item Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white font-fantasy focus:outline-none"
                    value={sellName}
                    onChange={(e) => setSellName(e.target.value)}
                    placeholder="Enter item name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-fantasy mb-2">
                    Price (RP)
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white font-fantasy focus:outline-none"
                    value={sellPrice}
                    onChange={(e) => setSellPrice(e.target.value)}
                    placeholder="Enter price"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-fantasy mb-2">
                    Stack
                  </label>
                  <input
                    type="number"
                    min={1}
                    className="w-full px-4 py-3 rounded-lg bg-black/70 border border-orange-500 text-white font-fantasy focus:outline-none"
                    value={sellStack}
                    onChange={(e) => setSellStack(e.target.value)}
                    placeholder="Enter stack"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <Upload className="w-5 h-5" /> Submit
                </button>
              </form>
            </div>
          </div>
        )}
        {/* Modal Buy Item */}
        {buyModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-2"
            onClick={() => setBuyModal(null)}
          >
            <div
              className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-4 sm:p-8 max-w-xs sm:max-w-md w-full relative gaming-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-red-400"
                onClick={() => setBuyModal(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={buyModal.image}
                alt={buyModal.name}
                className="w-24 h-24 object-contain mx-auto mb-4 drop-shadow-lg"
              />
              <h3 className="text-2xl font-bold text-white mb-2 font-gaming text-glow text-center">
                {buyModal.name}
              </h3>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <span className="text-orange-400 font-gaming capitalize">
                  Seller: {buyModal.seller}
                </span>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <span className="text-lg font-bold text-orange-400 font-gaming">
                  {buyModal.price} RP
                </span>
                <span className="text-gray-400 font-fantasy">per item</span>
              </div>
              <div className="flex items-center justify-center space-x-3 mb-6">
                <span className="text-gray-300 font-fantasy">Quantity</span>
                <input
                  type="number"
                  min={1}
                  max={buyModal.stack}
                  value={buyQty}
                  onChange={(e) =>
                    setBuyQty(
                      Math.max(
                        1,
                        Math.min(Number(e.target.value), buyModal.stack)
                      )
                    )
                  }
                  className="w-20 px-3 py-2 rounded-lg bg-black/70 border border-orange-500 text-white font-fantasy text-center focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-center space-x-2 mb-6">
                <span className="text-gray-400 font-fantasy">Total:</span>
                <span className="text-xl font-bold text-orange-400 font-gaming">
                  {buyModal.price * buyQty} RP
                </span>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold font-gaming text-glow shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Confirm Buy
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExchangeMall;
