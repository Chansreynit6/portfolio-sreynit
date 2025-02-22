import Image from "next/image";

interface ToolCardProps {
  tool: string;
  imageSrc: string;
}

const ToolCard = ({ tool, imageSrc }: ToolCardProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Add width and height here */}
      <Image
        src={imageSrc}
        alt={tool}
        width={100}   // Example width, adjust as needed
        height={100}  // Example height, adjust as needed
        className="w-full h-full object-contain"
      />
      <h3 className="text-center mt-2">{tool}</h3>
    </div>
  );
};

export default ToolCard;
