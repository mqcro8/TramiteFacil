import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface TramiteCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  category?: string;
  onDetailsClick: () => void;
}

export function TramiteCard({ icon: Icon, title, description, category, onDetailsClick }: TramiteCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="bg-[#2F6FED] bg-opacity-10 rounded-lg p-3 shrink-0">
          <Icon className="w-6 h-6 text-[#2F6FED]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[#1F2937] mb-1">{title}</h3>
          {category && (
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block mb-2">
              {category}
            </span>
          )}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
          <button
            onClick={onDetailsClick}
            className="text-[#2F6FED] text-sm hover:underline"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </motion.div>
  );
}
// <Icon className="w-6 h-6 text-[#2F6FED]" /> blue squares