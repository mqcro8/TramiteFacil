import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { BottomNav } from './BottomNav';
import { TramiteCard } from './TramiteCard';
import { getSavedTramites } from '../utils/localStorage';
import { tramitesInfo, categoryNames } from '../utils/tramitesData';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function SavedScreen() {
  const navigate = useNavigate();
  const [savedTramites, setSavedTramites] = useState<any[]>([]);

  useEffect(() => {
    // Leer los IDs de trámites guardados de localStorage
    const savedIds = getSavedTramites();
    
    // Mapear los IDs a objetos completos con información
    const tramites = savedIds.map(id => {
      const info = tramitesInfo[id];
      if (!info) return null;
      
      return {
        id,
        category: info.category,
        icon: info.icon,
        title: info.title,
        description: info.description,
        categoryName: categoryNames[info.category]
      };
    }).filter(Boolean); // Filtrar nulls
    
    setSavedTramites(tramites);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <img src={appIcon} alt="TrámiteFácil" className="w-8 h-8" />
            </div>
            <h1 className="text-xl text-white">Trámites guardados</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {savedTramites.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <p className="text-gray-600">
                Tienes {savedTramites.length} trámite{savedTramites.length !== 1 ? 's' : ''} guardado{savedTramites.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <div className="space-y-4">
              {savedTramites.map((tramite, index) => (
                <motion.div
                  key={tramite.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TramiteCard
                    icon={tramite.icon}
                    title={tramite.title}
                    description={tramite.description}
                    category={tramite.categoryName}
                    onDetailsClick={() => navigate(`/tramite/${tramite.category}/${tramite.id}`)}
                  />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="bg-gray-100 rounded-full p-8 inline-block mb-4">
              <Bookmark className="w-16 h-16 text-gray-300" />
            </div>
            <h2 className="text-xl text-[#1F2937] mb-2">Sin trámites guardados</h2>
            <p className="text-gray-500 mb-6">
              Los trámites que guardes aparecerán aquí para acceder rápidamente
            </p>
            <button
              onClick={() => navigate('/home')}
              className="bg-[#2F6FED] text-white px-6 py-3 rounded-xl hover:bg-[#1e40af] transition-colors"
            >
              Explorar trámites
            </button>
          </motion.div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}