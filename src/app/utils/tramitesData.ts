// Mapeo completo de iconos para cada categoría de trámite
import { 
  GraduationCap, 
  Heart, 
  Building2, 
  Car, 
  Briefcase
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

// Mapa de iconos por categoría
export const categoryIcons: Record<string, LucideIcon> = {
  educativos: GraduationCap,
  medicos: Heart,
  gubernamentales: Building2,
  vehiculares: Car,
  laborales: Briefcase,
};

// Información básica de todos los trámites para las tarjetas
export const tramitesInfo: Record<string, {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
}> = {
  // TRÁMITES GUBERNAMENTALES
  pasaporte: {
    title: 'Pasaporte',
    description: 'Trámite para obtener o renovar el pasaporte mexicano para poder viajar al extranjero',
    category: 'gubernamentales',
    icon: Building2
  },
  curp: {
    title: 'CURP',
    description: 'Consulta o impresión de la Clave Única de Registro de Población',
    category: 'gubernamentales',
    icon: Building2
  },
  acta: {
    title: 'Acta de nacimiento',
    description: 'Solicitud de copia certificada de acta de nacimiento',
    category: 'gubernamentales',
    icon: Building2
  },
  ine: {
    title: 'INE (Credencial de elector)',
    description: 'Trámite para obtener o renovar la credencial para votar',
    category: 'gubernamentales',
    icon: Building2
  },
  predial: {
    title: 'Pago de predial',
    description: 'Pago del impuesto predial anual',
    category: 'gubernamentales',
    icon: Building2
  },
  'alta-sat': {
    title: 'Alta en SAT',
    description: 'Registro ante el Servicio de Administración Tributaria',
    category: 'gubernamentales',
    icon: Building2
  },
  'pago-impuestos': {
    title: 'Pago de impuestos',
    description: 'Declaración y pago de impuestos federales',
    category: 'gubernamentales',
    icon: Building2
  },
  
  // TRÁMITES EDUCATIVOS
  beca: {
    title: 'Solicitud de beca educativa',
    description: 'Trámite para solicitar apoyo económico para estudiantes',
    category: 'educativos',
    icon: GraduationCap
  },
  certificado: {
    title: 'Certificado de estudios',
    description: 'Solicitud de certificado oficial de estudios realizados',
    category: 'educativos',
    icon: GraduationCap
  },
  inscripcion: {
    title: 'Inscripción escolar',
    description: 'Proceso de inscripción para nuevo ciclo escolar',
    category: 'educativos',
    icon: GraduationCap
  },
  
  // TRÁMITES MÉDICOS
  'seguro-social': {
    title: 'Registro al Seguro Social',
    description: 'Permite registrarse en el sistema de seguridad social',
    category: 'medicos',
    icon: Heart
  },
  seguro: {
    title: 'Afiliación al seguro médico',
    description: 'Registro para obtener cobertura de servicios médicos',
    category: 'medicos',
    icon: Heart
  },
  cita: {
    title: 'Cita médica',
    description: 'Solicitud de cita con especialista',
    category: 'medicos',
    icon: Heart
  },
  'certificado-medico': {
    title: 'Certificado médico',
    description: 'Obtención de certificado médico oficial',
    category: 'medicos',
    icon: Heart
  },
  resultados: {
    title: 'Resultados de laboratorio',
    description: 'Consulta y descarga de resultados médicos',
    category: 'medicos',
    icon: Heart
  },
  
  // TRÁMITES VEHICULARES
  licencia: {
    title: 'Licencia de conducir',
    description: 'Trámite para obtener o renovar licencia de conducir',
    category: 'vehiculares',
    icon: Car
  },
  verificacion: {
    title: 'Verificación vehicular',
    description: 'Verificación obligatoria de emisiones contaminantes',
    category: 'vehiculares',
    icon: Car
  },
  tenencia: {
    title: 'Pago de tenencia',
    description: 'Pago del impuesto vehicular anual',
    category: 'vehiculares',
    icon: Car
  },
  placas: {
    title: 'Reemplazo de placas',
    description: 'Cambio o reemplazo de placas vehiculares',
    category: 'vehiculares',
    icon: Car
  },
  
  // TRÁMITES LABORALES
  'registro-empresa': {
    title: 'Registro de empresa',
    description: 'Alta de nueva empresa ante las autoridades',
    category: 'laborales',
    icon: Briefcase
  },
  rfc: {
    title: 'RFC (Registro Federal de Contribuyentes)',
    description: 'Obtención del Registro Federal de Contribuyentes',
    category: 'laborales',
    icon: Briefcase
  },
  'domicilio-fiscal': {
    title: 'Cambio de domicilio fiscal',
    description: 'Actualización de domicilio fiscal ante el SAT',
    category: 'laborales',
    icon: Briefcase
  },
  'constancia-situacion': {
    title: 'Constancia de situación fiscal',
    description: 'Obtención de constancia fiscal actualizada',
    category: 'laborales',
    icon: Briefcase
  },
};

// Nombres amigables de categorías
export const categoryNames: Record<string, string> = {
  gubernamentales: 'Trámites gubernamentales',
  educativos: 'Trámites educativos',
  medicos: 'Trámites médicos',
  vehiculares: 'Trámites vehiculares',
  laborales: 'Trámites laborales',
};
