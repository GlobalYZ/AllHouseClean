"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import houseInside from "@/assets/images/house-inside_clipped.webp";
import { Room } from "@/components/CheckList/Room";
import { Modal } from "@/components/Modal";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type RoomType = "bathroom" | "kitchen" | "living" | "bedroom";
type CleaningType = "daily" | "deep";

export const CheckList = () => {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [cleaningType, setCleaningType] = useState<CleaningType>("daily");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleRoomClick = (room: RoomType) => {
    setSelectedRoom(room);
  };

  useEffect(() => {
    if (selectedRoom) {
      const tasksKey = `checklist.rooms.${selectedRoom}.${cleaningType}Tasks`;
      const tasksList = t(tasksKey);

      if (Array.isArray(tasksList)) {
        setTasks(tasksList);
      } else {
        console.error("Tasks list is not an array:", tasksList);
        setTasks([]);
      }
    } else {
      setTasks([]);
    }
  }, [selectedRoom, cleaningType, t]);

  const getTranslatedString = (path: string): string => {
    const value = t(path);
    return typeof value === "string" ? value : "";
  };

  return (
    <section id="checklist-section" className="bg-background">
      <div className="py-16 px-4 container mx-auto">
        <SectionHeader
          eyebrow={getTranslatedString("checklist.header.eyebrow")}
          title={getTranslatedString("checklist.header.title")}
          description={getTranslatedString("checklist.header.description")}
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
            {getTranslatedString("checklist.cleaningTypes.daily")}
          </button>
          <button
            onClick={() => setCleaningType("deep")}
            className={`px-4 py-1.5 text-sm rounded-full border-2 border-secondary transition-all duration-300 ${
              cleaningType === "deep"
                ? "bg-secondary text-white scale-110"
                : "bg-gray-100 text-secondary-500"
            }`}
          >
            {getTranslatedString("checklist.cleaningTypes.deep")}
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
              ? getTranslatedString(`checklist.rooms.${selectedRoom}.title`) +
                " - " +
                getTranslatedString(`checklist.cleaningTypes.${cleaningType}`)
              : ""
          }
        >
          {selectedRoom && tasks.length > 0 && (
            <ul className="space-y-2">
              {tasks.map((task, index) => (
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
          )}
        </Modal>
      </div>
    </section>
  );
};
