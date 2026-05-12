import { useState } from 'react';
import { Search, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { BottomNav } from './BottomNav';

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl text-white">Buscar trámites</h1>
          </div>
        </div>
      </div>

      {/* Search Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2F6FED] focus:border-transparent bg-white"
              placeholder="Buscar por nombre de trámite..."
            />
          </div>
        </motion.div>

        {!searchQuery ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <div className="bg-gray-100 rounded-full p-8 inline-block mb-4">
              <FileText className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-xl text-[#1F2937] mb-2">Busca un trámite</h2>
            <p className="text-gray-500">
              Escribe el nombre del trámite que necesitas consultar
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600">Buscando: "{searchQuery}"</p>
            <p className="text-gray-400 text-sm mt-2">No se encontraron resultados</p>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
