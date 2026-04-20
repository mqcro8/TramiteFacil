import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  color: string;
  onClick: () => void;
}

export function CategoryCard({ icon: Icon, title, color, onClick }: CategoryCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-4">
        <div className={`${color} bg-opacity-10 rounded-lg p-4`}>
          <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
        </div>
        <h3 className="text-[#1F2937] text-left flex-1">{title}</h3>
      </div>
    </motion.button>
  );
}
