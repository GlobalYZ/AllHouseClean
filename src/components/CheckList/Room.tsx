interface RoomProps {
  top: string;
  left: string;
  onClick: () => void;
}

export const Room = ({ top, left, onClick }: RoomProps) => {
  return (
    <div className="absolute" style={{ top, left }} onClick={onClick}>
      <div className="absolute size-3 md:size-6 rounded-full bg-primary-300/40 animate-ping-large" />
      <div className="cursor-pointer relative size-3 md:size-6 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 shadow-[0_0_10px_rgba(7,141,174,0.5)] border border-primary-200/50" />
    </div>
  );
};
