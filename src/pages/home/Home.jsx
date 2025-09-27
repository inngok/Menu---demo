import { useState } from "react";

export default function Home() {
  const menuItems = [
    { name: "Cơm gà xối mỡ", tag: "Thịt gà" },
    { name: "Cơm sườn bì chả", tag: "Thịt heo" },
    { name: "Cơm tấm đặc biệt", tag: "Thịt heo" },
    { name: "Canh chua cá", tag: "Cá" },
    { name: "Rau xào thập cẩm", tag: "Rau" },
    { name: "Canh khổ qua dồn thịt", tag: "Canh" },
  ];

  const tags = ["Tất cả", "Thịt gà", "Thịt heo", "Cá", "Canh", "Rau"];
  const [selectedTag, setSelectedTag] = useState("Tất cả");

  const filteredItems =
    selectedTag === "Tất cả"
      ? menuItems
      : menuItems.filter((item) => item.tag === selectedTag);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full text-sm font-medium border ${
              selectedTag === tag
                ? "bg-[#0099CF] text-white border-[#0099CF]"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Menu list */}
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <ul className="divide-y divide-gray-200">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className="py-3 px-2 hover:bg-gray-50 rounded-md"
            >
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-blue-600 mt-1">{item.tag}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
