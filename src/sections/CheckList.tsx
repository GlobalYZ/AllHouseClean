import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import houseInside from "@/assets/images/house-inside_clipped.webp";
import { Room } from "@/components/CheckList/Room";
import { Modal } from "@/components/Modal";
import { useState } from "react";

type RoomType = "bathroom" | "kitchen" | "living" | "bedroom";
type CleaningType = "daily" | "deep";

interface RoomInfo {
  title: string;
  dailyTasks: string[];
  deepTasks: string[];
}

const roomsInfo: Record<RoomType, RoomInfo> = {
  bathroom: {
    title: "卫生间",
    dailyTasks: [
      "清洁马桶和座圈",
      "擦拭浴缸/淋浴间",
      "清洁水槽和镜子",
      "拖地和消毒",
      "更换毛巾",
      "补充洗手液和纸巾",
    ],
    deepTasks: [
      "清洁马桶和座圈",
      "擦拭浴缸/淋浴间",
      "清洁水槽和镜子",
      "拖地和消毒",
      "更换毛巾",
      "补充洗手液和纸巾",
      "深度清洁瓷砖缝隙 ⭐",
    ],
  },
  kitchen: {
    title: "厨房",
    dailyTasks: [
      "清洁灶台和油烟机",
      "擦拭所有台面",
      "清洁微波炉内外",
      "整理冰箱",
      "拖地和消毒",
      "清洗水槽",
    ],
    deepTasks: [
      "清洁灶台和油烟机",
      "擦拭所有台面",
      "清洁微波炉内外",
      "整理冰箱",
      "拖地和消毒",
      "清洗水槽",
      "深度清洁油烟机滤网 ⭐",
    ],
  },
  living: {
    title: "客厅",
    dailyTasks: [
      "吸尘和拖地",
      "擦拭家具表面",
      "整理沙发垫",
      "清洁电视和电器",
      "擦拭窗户",
      "整理杂物",
    ],
    deepTasks: [
      "吸尘和拖地",
      "擦拭家具表面",
      "整理沙发垫",
      "清洁电视和电器",
      "擦拭窗户",
      "整理杂物",
      "深度清洗沙发和地毯 ⭐",
    ],
  },
  bedroom: {
    title: "卧室",
    dailyTasks: [
      "更换床单和枕套",
      "吸尘和拖地",
      "整理衣柜",
      "擦拭家具表面",
      "清洁窗户",
      "整理床头柜",
    ],
    deepTasks: [
      "更换床单和枕套",
      "吸尘和拖地",
      "整理衣柜",
      "擦拭家具表面",
      "清洁窗户",
      "整理床头柜",
      "深度清洁床垫除螨 ⭐",
    ],
  },
};

export const CheckList = () => {
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [cleaningType, setCleaningType] = useState<CleaningType>("daily");

  const handleRoomClick = (room: RoomType) => {
    setSelectedRoom(room);
  };

  return (
    <section className="bg-background">
      <div className="py-16 px-4 container mx-auto">
        <SectionHeader
          eyebrow="我们的服务"
          title="Duty Checklist"
          description="我们提供专业的清洁服务，确保您的家居环境整洁舒适"
        />
        <div className="mt-4 md:mt-10 flex justify-center gap-4 mb-6 font-semibold">
          <button
            onClick={() => setCleaningType("daily")}
            className={`px-4 py-1.5 text-sm rounded-full border-2 border-secondary transition-all duration-300 ${
              cleaningType === "daily"
                ? "bg-secondary text-white scale-110"
                : "bg-gray-100 text-secondary-500"
            }`}
          >
            日常清洁
          </button>
          <button
            onClick={() => setCleaningType("deep")}
            className={`px-4 py-1.5 text-sm rounded-full border-2 border-secondary transition-all duration-300 ${
              cleaningType === "deep"
                ? "bg-secondary text-white scale-110"
                : "bg-gray-100 text-secondary-500"
            }`}
          >
            深度清洁
          </button>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="relative w-full max-w-3xl aspect-[16/12]">
            <Image
              src={houseInside}
              alt="House Interior"
              fill
              className="object-cover"
              loading="lazy"
            />
            <Room
              top="38%"
              left="16%"
              onClick={() => handleRoomClick("bathroom")}
            />
            <Room
              top="22%"
              left="40%"
              onClick={() => handleRoomClick("kitchen")}
            />
            <Room
              top="38%"
              left="70%"
              onClick={() => handleRoomClick("living")}
            />
            <Room
              top="68%"
              left="51%"
              onClick={() => handleRoomClick("bedroom")}
            />
          </div>
        </div>

        <Modal
          isOpen={selectedRoom !== null}
          onClose={() => setSelectedRoom(null)}
          title={
            selectedRoom
              ? roomsInfo[selectedRoom].title +
                (cleaningType === "daily" ? " - 日常清洁" : " - 深度清洁")
              : ""
          }
        >
          <ul className="space-y-2">
            {selectedRoom &&
              (cleaningType === "daily"
                ? roomsInfo[selectedRoom].dailyTasks
                : roomsInfo[selectedRoom].deepTasks
              ).map((task, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{task}</span>
                </li>
              ))}
          </ul>
        </Modal>
      </div>
    </section>
  );
};
