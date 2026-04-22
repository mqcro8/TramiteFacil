import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Heart, Building2, FileText, CreditCard, Briefcase, Home, Car, Users, FileCheck, Landmark, Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import { BottomNav } from './BottomNav';
import { TramiteCard } from './TramiteCard';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function TramitesListScreen() {
  const { category } = useParams();
  const navigate = useNavigate();

  const tramitesByCategory = {
    educativos: {
      title: 'Trámites educativos',
      icon: GraduationCap,
      tramites: [
        {
          id: 'beca',
          icon: GraduationCap,
          title: 'Solicitud de beca educativa',
          description: 'Trámite para solicitar apoyo económico para estudiantes.'
        },
        {
          id: 'certificado',
          icon: FileText,
          title: 'Certificado de estudios',
          description: 'Solicitud de certificado oficial de estudios realizados.'
        },
        {
          id: 'inscripcion',
          icon: FileCheck,
          title: 'Inscripción escolar',
          description: 'Proceso de inscripción para nuevo ciclo escolar.'
        },
      ]
    },
    medicos: {
      title: 'Trámites médicos',
      icon: Heart,
      tramites: [
        {
          id: 'seguro-social',
          icon: Heart,
          title: 'Registro al Seguro Social',
          description: 'Permite registrarse en el sistema de seguridad social.'
        },
        {
          id: 'seguro',
          icon: Heart,
          title: 'Afiliación al seguro médico',
          description: 'Registro para obtener cobertura médica.'
        },
        {
          id: 'cita',
          icon: Heart,
          title: 'Cita médica',
          description: 'Solicitud de cita con especialista.'
        },
        {
          id: 'certificado-medico',
          icon: FileText,
          title: 'Certificado médico',
          description: 'Obtención de certificado médico oficial.'
        },
        {
          id: 'resultados',
          icon: FileText,
          title: 'Resultados de laboratorio',
          description: 'Consulta y descarga de resultados médicos.'
        },
      ]
    },
    gubernamentales: {
      title: 'Trámites gubernamentales',
      icon: Building2,
      tramites: [
        {
          id: 'pasaporte',
          icon: CreditCard,
          title: 'Pasaporte',
          description: 'Trámite para obtener o renovar el pasaporte mexicano para viajar al extranjero.'
        },
        {
          id: 'curp',
          icon: FileText,
          title: 'CURP',
          description: 'Consulta o impresión de la Clave Única de Registro de Población.'
        },
        {
          id: 'acta',
          icon: FileText,
          title: 'Acta de nacimiento',
          description: 'Solicitud de copia certificada de acta de nacimiento.'
        },
        {
          id: 'ine',
          icon: CreditCard,
          title: 'INE (Credencial de elector)',
          description: 'Trámite para obtener o renovar la credencial para votar.'
        },
        {
          id: 'predial',
          icon: Home,
          title: 'Pago de predial',
          description: 'Pago del impuesto predial anual.'
        },
        {
          id: 'alta-sat',
          icon: Landmark,
          title: 'Alta en SAT',
          description: 'Registro ante el Servicio de Administración Tributaria.'
        },
        {
          id: 'pago-impuestos',
          icon: Wallet,
          title: 'Pago de impuestos',
          description: 'Declaración y pago de impuestos federales.'
        },
      ]
    },
    vehiculares: {
      title: 'Trámites vehiculares',
      icon: Car,
      tramites: [
        {
          id: 'licencia',
          icon: CreditCard,
          title: 'Licencia de conducir',
          description: 'Trámite para obtener o renovar licencia de conducir.'
        },
        {
          id: 'verificacion',
          icon: Car,
          title: 'Verificación vehicular',
          description: 'Verificación obligatoria de emisiones contaminantes.'
        },
        {
          id: 'tenencia',
          icon: FileText,
          title: 'Pago de tenencia',
          description: 'Pago del impuesto vehicular anual.'
        },
        {
          id: 'placas',
          icon: Car,
          title: 'Reemplazo de placas',
          description: 'Cambio o reemplazo de placas vehiculares.'
        },
      ]
    },
    laborales: {
      title: 'Trámites laborales',
      icon: Briefcase,
      tramites: [
        {
          id: 'registro-empresa',
          icon: Briefcase,
          title: 'Registro de empresa',
          description: 'Alta de nueva empresa ante las autoridades.'
        },
        {
          id: 'rfc',
          icon: FileText,
          title: 'RFC (Registro Federal de Contribuyentes)',
          description: 'Obtención del Registro Federal de Contribuyentes.'
        },
        {
          id: 'domicilio-fiscal',
          icon: Home,
          title: 'Cambio de domicilio fiscal',
          description: 'Actualización de domicilio fiscal ante el SAT.'
        },
        {
          id: 'constancia-situacion',
          icon: FileCheck,
          title: 'Constancia de situación fiscal',
          description: 'Obtención de constancia fiscal actualizada.'
        },
      ]
    },
  };

  const currentCategory = tramitesByCategory[category as keyof typeof tramitesByCategory];
  
  if (!currentCategory) {
    return null;
  }

  const Icon = currentCategory.icon;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
          <img src={appIcon} alt="TrámiteFácil" className="w-20 h-20" />
            </div>
            <h1 className="text-xl text-white">{currentCategory.title}</h1>
          </div>
        </div>
      </div>

      {/* Tramites List */}
      <div className="max-w-md mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-gray-600">
            {currentCategory.tramites.length} trámites disponibles
          </p>
        </motion.div>

        <div className="space-y-4">
          {currentCategory.tramites.map((tramite, index) => (
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
                onDetailsClick={() => navigate(`/tramite/${category}/${tramite.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}