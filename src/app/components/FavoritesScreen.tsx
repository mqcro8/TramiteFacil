import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { BottomNav } from './BottomNav';

export function FavoritesScreen() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl text-[#1F2937]">Favoritos</h1>
        </div>
      </div>

      {/* Favorites Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="bg-gray-100 rounded-full p-8 inline-block mb-4">
            <Heart className="w-16 h-16 text-gray-300" />
          </div>
          <h2 className="text-xl text-[#1F2937] mb-2">Sin favoritos aún</h2>
          <p className="text-gray-500">
            Los elementos que marques como favoritos aparecerán aquí
          </p>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
