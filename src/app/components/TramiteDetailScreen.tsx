import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, MapPin, Calendar, Bookmark, Bell, CheckCircle2, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { 
  isTramiteSaved, 
  saveTramite, 
  removeSavedTramite, 
  addReminder 
} from '../utils/localStorage';
const appIcon = "https://ease-smile-15617808.figma.site/_assets/v11/1deec5215c51266c1f8b6f090c9b80cd89d0f0e2.png";

export function TramiteDetailScreen() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  // Verificar si el trámite está guardado al cargar
  useEffect(() => {
    if (id) {
      setIsSaved(isTramiteSaved(id));
    }
  }, [id]);

  // Mock data - en producción vendría de una API o base de datos
  const tramiteDetails: Record<string, any> = {
    // TRÁMITES GUBERNAMENTALES
    pasaporte: {
      title: 'Pasaporte',
      description: 'Trámite para obtener o renovar el pasaporte mexicano para poder viajar al extranjero',
      image: 'https://images.unsplash.com/photo-1613244470042-e69e8ccb303a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMGRvY3VtZW50JTIwdHJhdmVsfGVufDF8fHx8MTc3MzIxMDc4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Identificación oficial vigente',
        'Acta de nacimiento',
        'CURP',
        'Comprobante de pago',
        'Fotografía tamaño pasaporte'
      ],
      pasos: [
        'Reunir todos los documentos',
        'Agendar una cita en línea',
        'Presentarse en la oficina de la Secretaría de Relaciones Exteriores',
        'Entregar los documentos',
        'Realizar el pago del trámite',
        'Recibir el pasaporte'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Tiempo de entrega: 3 a 6 semanas'
      },
      lugar: {
        direccion: 'Oficinas de la Secretaría de Relaciones Exteriores',
        sitioWeb: 'www.gob.mx/sre'
      },
      costo: '$1,345 MXN (vigencia de 3 años)'
    },
    curp: {
      title: 'CURP',
      description: 'Consulta o impresión de la Clave Única de Registro de Población',
      image: 'https://images.unsplash.com/photo-1537222961176-50d25fff78ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZ292ZXJubWVudCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NzMyMTA3ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Nombre completo',
        'Fecha de nacimiento',
        'Entidad de nacimiento'
      ],
      pasos: [
        'Ingresar al portal oficial del gobierno',
        'Introducir los datos personales',
        'Buscar el registro',
        'Descargar o imprimir la CURP'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Disponible permanentemente'
      },
      lugar: {
        direccion: 'Portal oficial del gobierno de México',
        sitioWeb: 'www.gob.mx/curp'
      },
      costo: 'Sin costo'
    },
    acta: {
      title: 'Acta de nacimiento',
      description: 'Solicitud de copia certificada de acta de nacimiento',
      image: 'https://images.unsplash.com/photo-1689383993197-06d499831745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aCUyMGNlcnRpZmljYXRlJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzczMjEwNDY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'CURP',
        'Nombre completo',
        'Fecha de nacimiento',
        'Lugar de nacimiento',
        'Comprobante de pago'
      ],
      pasos: [
        'Ingresar al portal oficial del Registro Civil',
        'Llenar formulario con datos personales',
        'Realizar el pago correspondiente',
        'Descargar acta certificada en formato digital',
        'O solicitar envío a domicilio'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Proceso permanente'
      },
      lugar: {
        direccion: 'Portal del Registro Civil o en oficinas estatales',
        sitioWeb: 'www.gob.mx/actas'
      },
      costo: '$86 MXN'
    },
    ine: {
      title: 'INE (Credencial de elector)',
      description: 'Trámite para obtener o renovar la credencial para votar',
      image: 'https://images.unsplash.com/photo-1579642984814-2176e81e0de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3RlciUyMGlkJTIwY2FyZCUyMGlkZW50aWZpY2F0aW9ufGVufDF8fHx8MTc3MzIxMDc4NXww&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Acta de nacimiento',
        'CURP',
        'Comprobante de domicilio',
        'Identificación oficial (para renovación)'
      ],
      pasos: [
        'Tramitar pre-registro en línea',
        'Acudir al módulo del INE con cita',
        'Presentar documentos originales',
        'Toma de fotografía y firma',
        'Recibir credencial (envío a domicilio o recoger)'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Tiempo de entrega: 4 a 6 semanas'
      },
      lugar: {
        direccion: 'Módulos del INE a nivel nacional',
        sitioWeb: 'www.ine.mx'
      },
      costo: 'Sin costo'
    },
    predial: {
      title: 'Pago de predial',
      description: 'Pago del impuesto predial anual',
      requisitos: [
        'Número de cuenta predial',
        'Identificación oficial',
        'Escrituras del inmueble (primera vez)'
      ],
      pasos: [
        'Obtener número de cuenta predial',
        'Consultar monto a pagar en línea',
        'Realizar pago en línea o en ventanilla',
        'Descargar recibo de pago'
      ],
      fechas: {
        inicio: '1 de enero',
        fin: '31 de marzo (con descuento)',
        vigencia: 'Anual'
      },
      lugar: {
        direccion: 'Portal de gobierno municipal o ventanillas',
        sitioWeb: 'Portal municipal correspondiente'
      },
      costo: 'Variable según valor del inmueble'
    },
    'alta-sat': {
      title: 'Alta en SAT',
      description: 'Registro ante el Servicio de Administración Tributaria',
      image: 'https://images.unsplash.com/photo-1772588627499-baefc8ab0ce7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudHMlMjBhY2NvdW50aW5nfGVufDF8fHx8MTc3MzEyNzc1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'CURP',
        'Acta de nacimiento',
        'Comprobante de domicilio',
        'Correo electrónico',
        'Identificación oficial'
      ],
      pasos: [
        'Agendar cita en el SAT',
        'Reunir documentos requeridos',
        'Acudir a la cita',
        'Generar e-firma',
        'Recibir constancia de situación fiscal'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Proceso permanente'
      },
      lugar: {
        direccion: 'Oficinas del SAT',
        sitioWeb: 'www.sat.gob.mx'
      },
      costo: 'Sin costo'
    },
    'pago-impuestos': {
      title: 'Pago de impuestos',
      description: 'Declaración y pago de impuestos federales',
      requisitos: [
        'RFC',
        'e-firma',
        'Contraseña del SAT',
        'Constancia de situación fiscal',
        'Información de ingresos y deducciones'
      ],
      pasos: [
        'Ingresar al portal del SAT',
        'Seleccionar tipo de declaración',
        'Llenar formulario con datos fiscales',
        'Revisar y validar información',
        'Realizar pago correspondiente',
        'Guardar acuse de recibo'
      ],
      fechas: {
        inicio: '1 de abril',
        fin: '30 de abril (anual)',
        vigencia: 'Mensual o anual según régimen'
      },
      lugar: {
        direccion: 'Portal del SAT (en línea)',
        sitioWeb: 'www.sat.gob.mx'
      },
      costo: 'Variable según declaración'
    },

    // TRÁMITES EDUCATIVOS
    beca: {
      title: 'Solicitud de beca educativa',
      description: 'Trámite para solicitar apoyo económico para estudiantes',
      image: 'https://images.unsplash.com/photo-1604336480714-ed7fa506014e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc2Nob2xhcnNoaXAlMjBlZHVjYXRpb258ZW58MXx8fHwxNzczMjEwNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'CURP',
        'Comprobante de estudios',
        'Identificación oficial',
        'Comprobante de domicilio'
      ],
      pasos: [
        'Registrarse en la plataforma',
        'Completar el formulario',
        'Subir documentos',
        'Esperar validación'
      ],
      fechas: {
        inicio: '1 de enero',
        fin: '31 de marzo',
        vigencia: 'Convocatoria abierta: Enero a marzo'
      },
      lugar: {
        direccion: 'Portal de becas del gobierno',
        sitioWeb: 'www.becas.gob.mx'
      },
      costo: 'Sin costo'
    },
    certificado: {
      title: 'Certificado de estudios',
      description: 'Solicitud de certificado oficial de estudios realizados',
      requisitos: [
        'Solicitud oficial',
        'Identificación del alumno o tutor',
        'Comprobante de pago',
        'Boleta o kardex'
      ],
      pasos: [
        'Acudir a la institución educativa',
        'Llenar solicitud de certificado',
        'Realizar pago correspondiente',
        'Esperar tiempo de entrega (5-10 días hábiles)',
        'Recoger certificado sellado'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Proceso permanente'
      },
      lugar: {
        direccion: 'Institución educativa correspondiente',
        sitioWeb: 'Consultar con la escuela'
      },
      costo: '$150 - $300 MXN (variable)'
    },
    inscripcion: {
      title: 'Inscripción escolar',
      description: 'Proceso de inscripción para nuevo ciclo escolar',
      image: 'https://images.unsplash.com/photo-1660795670842-f183567078b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBlbnJvbGxtZW50JTIwc3R1ZGVudHxlbnwxfHx8fDE3NzMyMTA3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Acta de nacimiento',
        'CURP',
        'Certificado de nivel anterior',
        'Comprobante de domicilio',
        'Cartilla de vacunación (nivel básico)',
        'Fotografías tamaño infantil'
      ],
      pasos: [
        'Pre-registro en línea',
        'Reunir documentación requerida',
        'Acudir a la escuela asignada',
        'Entregar documentos originales',
        'Realizar pago de inscripción',
        'Recibir horario y lista de útiles'
      ],
      fechas: {
        inicio: '1 de febrero',
        fin: '15 de agosto',
        vigencia: 'Según calendario escolar oficial'
      },
      lugar: {
        direccion: 'Institución educativa asignada',
        sitioWeb: 'www.gob.mx/aefcm (CDMX) o portal estatal'
      },
      costo: 'Sin costo (escuelas públicas)'
    },

    // TRÁMITES MÉDICOS
    'seguro-social': {
      title: 'Registro al Seguro Social',
      description: 'Permite registrarse en el sistema de seguridad social',
      image: 'https://images.unsplash.com/photo-1619975101918-6d27886e8c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW5zdXJhbmNlJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzczMjEwNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'CURP',
        'Identificación oficial',
        'Acta de nacimiento',
        'Comprobante de domicilio'
      ],
      pasos: [
        'Ingresar al portal del IMSS',
        'Crear una cuenta',
        'Registrar datos personales',
        'Descargar el número de seguridad social'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Disponible permanentemente'
      },
      lugar: {
        direccion: 'Portal del IMSS o oficinas',
        sitioWeb: 'www.imss.gob.mx'
      },
      costo: 'Sin costo'
    },
    seguro: {
      title: 'Afiliación al seguro médico',
      description: 'Registro para obtener cobertura de servicios médicos',
      requisitos: [
        'CURP',
        'Identificación oficial',
        'Comprobante de domicilio',
        'Acta de nacimiento',
        'RFC (opcional)'
      ],
      pasos: [
        'Acudir a la unidad médica más cercana',
        'Solicitar formato de afiliación',
        'Llenar formulario con datos personales',
        'Entregar documentación',
        'Recibir número de afiliación'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Proceso permanente',
        vigencia: 'Disponible siempre'
      },
      lugar: {
        direccion: 'Unidades de Medicina Familiar',
        sitioWeb: 'www.imss.gob.mx'
      },
      costo: 'Sin costo'
    },
    cita: {
      title: 'Cita médica',
      description: 'Solicitud de cita con especialista',
      requisitos: [
        'Número de seguridad social',
        'Vigencia de derechos',
        'Identificación oficial'
      ],
      pasos: [
        'Llamar a IMSS Digital o ingresar al portal',
        'Proporcionar NSS',
        'Seleccionar especialidad y fecha',
        'Confirmar cita',
        'Acudir en fecha programada'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Según disponibilidad'
      },
      lugar: {
        direccion: 'Unidad Médica Familiar asignada',
        sitioWeb: 'www.imss.gob.mx'
      },
      costo: 'Sin costo (con afiliación vigente)'
    },
    'certificado-medico': {
      title: 'Certificado médico',
      description: 'Obtención de certificado médico oficial',
      requisitos: [
        'Identificación oficial',
        'Comprobante de pago',
        'Exámenes médicos (si se requieren)'
      ],
      pasos: [
        'Agendar cita médica',
        'Realizar pago correspondiente',
        'Acudir a valoración médica',
        'Realizar estudios solicitados',
        'Recibir certificado firmado y sellado'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Vigencia según tipo (3-6 meses)'
      },
      lugar: {
        direccion: 'Clínicas privadas o centros de salud',
        sitioWeb: 'Variable según proveedor'
      },
      costo: '$200 - $500 MXN (variable)'
    },
    resultados: {
      title: 'Resultados de laboratorio',
      description: 'Consulta y descarga de resultados médicos',
      requisitos: [
        'Número de folio',
        'Nombre completo',
        'Fecha de nacimiento o clave de acceso'
      ],
      pasos: [
        'Ingresar al portal del laboratorio',
        'Introducir folio y datos de acceso',
        'Consultar resultados en línea',
        'Descargar PDF de resultados',
        'Consultar con médico si es necesario'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Disponible 24-72 horas después del estudio'
      },
      lugar: {
        direccion: 'Portal en línea del laboratorio',
        sitioWeb: 'Consultar con laboratorio específico'
      },
      costo: 'Incluido en el costo del estudio'
    },

    // TRÁMITES VEHICULARES
    licencia: {
      title: 'Licencia de conducir',
      description: 'Trámite para obtener o renovar licencia de conducir',
      image: 'https://images.unsplash.com/photo-1630406144797-821be1f35d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcml2ZXJzJTIwbGljZW5zZSUyMGNhcnxlbnwxfHx8fDE3NzMyMTA0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Identificación oficial',
        'Comprobante de domicilio',
        'CURP',
        'Examen médico'
      ],
      pasos: [
        'Agendar cita',
        'Presentar documentos',
        'Realizar examen teórico',
        'Realizar examen práctico',
        'Pagar el trámite'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: '1 a 3 años según tipo'
      },
      lugar: {
        direccion: 'Oficina de tránsito estatal',
        sitioWeb: 'Portal estatal de tránsito'
      },
      costo: '$700 - $1,200 MXN (variable por estado)'
    },
    verificacion: {
      title: 'Verificación vehicular',
      description: 'Verificación obligatoria de emisiones contaminantes',
      requisitos: [
        'Tarjeta de circulación',
        'Póliza de seguro vigente',
        'Comprobante de pago de tenencia',
        'Identificación del propietario'
      ],
      pasos: [
        'Verificar calendario según terminación de placa',
        'Acudir a verificentro autorizado',
        'Presentar documentos',
        'Realizar prueba de emisiones',
        'Recibir calcomanía y holograma'
      ],
      fechas: {
        inicio: '1 de enero',
        fin: '31 de diciembre',
        vigencia: 'Semestral según calendario'
      },
      lugar: {
        direccion: 'Verificentros autorizados',
        sitioWeb: 'Consultar portal ambiental estatal'
      },
      costo: '$350 - $600 MXN'
    },
    tenencia: {
      title: 'Pago de tenencia',
      description: 'Pago del impuesto vehicular anual',
      requisitos: [
        'Tarjeta de circulación',
        'Número de placa',
        'RFC (opcional)',
        'Identificación oficial'
      ],
      pasos: [
        'Consultar adeudo en portal estatal',
        'Generar línea de captura',
        'Realizar pago en banco o en línea',
        'Descargar comprobante de pago'
      ],
      fechas: {
        inicio: '1 de enero',
        fin: '31 de marzo (con descuento)',
        vigencia: 'Anual'
      },
      lugar: {
        direccion: 'Portal de gobierno estatal o bancos',
        sitioWeb: 'Portal estatal de finanzas'
      },
      costo: 'Variable según modelo y valor del vehículo'
    },
    placas: {
      title: 'Reemplazo de placas',
      description: 'Cambio o reemplazo de placas vehiculares',
      requisitos: [
        'Tarjeta de circulación original',
        'Identificación oficial del propietario',
        'Comprobante de pago',
        'Factura del vehículo',
        'Reporte de robo (en caso de extravío)'
      ],
      pasos: [
        'Realizar denuncia si es por robo/extravío',
        'Realizar pago de reposición',
        'Acudir a oficina de tránsito',
        'Presentar documentos',
        'Recibir nuevas placas y calcomanía'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Según vida útil de las placas'
      },
      lugar: {
        direccion: 'Oficinas de tránsito y vialidad',
        sitioWeb: 'Portal estatal de tránsito'
      },
      costo: '$400 - $800 MXN (variable por estado)'
    },

    // TRÁMITES LABORALES
    'registro-empresa': {
      title: 'Registro de empresa',
      description: 'Alta de nueva empresa ante las autoridades',
      image: 'https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZSUyMHBhcGVyd29ya3xlbnwxfHx8fDE3NzMyMTA3ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      requisitos: [
        'Acta constitutiva',
        'RFC de la empresa',
        'Identificación de representante legal',
        'Comprobante de domicilio fiscal',
        'Permiso de uso de suelo'
      ],
      pasos: [
        'Constituir la sociedad ante notario',
        'Obtener RFC de la empresa',
        'Registrarse ante IMSS como patrón',
        'Tramitar licencia de funcionamiento',
        'Registrar marca ante IMPI (opcional)'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Proceso permanente'
      },
      lugar: {
        direccion: 'Notarías, SAT, IMSS, Gobierno municipal',
        sitioWeb: 'www.gob.mx/tuempresa'
      },
      costo: '$5,000 - $20,000 MXN (variable según tipo)'
    },
    rfc: {
      title: 'RFC (Registro Federal de Contribuyentes)',
      description: 'Obtención del Registro Federal de Contribuyentes',
      requisitos: [
        'CURP',
        'Acta de nacimiento',
        'Comprobante de domicilio',
        'Identificación oficial',
        'Correo electrónico'
      ],
      pasos: [
        'Agendar cita en el SAT (opcional para personas físicas)',
        'Completar formulario en línea',
        'Cargar documentos digitalizados',
        'Validar información',
        'Recibir cédula de RFC'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Permanente'
      },
      lugar: {
        direccion: 'Portal del SAT o módulos presenciales',
        sitioWeb: 'www.sat.gob.mx'
      },
      costo: 'Sin costo'
    },
    'domicilio-fiscal': {
      title: 'Cambio de domicilio fiscal',
      description: 'Actualización de domicilio fiscal ante el SAT',
      requisitos: [
        'RFC',
        'e-firma vigente',
        'Comprobante del nuevo domicilio',
        'Fotografía del establecimiento'
      ],
      pasos: [
        'Ingresar al portal del SAT',
        'Acceder a "Trámites"',
        'Seleccionar "Cambio de domicilio"',
        'Cargar comprobante y fotografía',
        'Enviar solicitud',
        'Esperar validación (24-48 hrs)'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible todo el año',
        vigencia: 'Debe actualizarse en 10 días hábiles'
      },
      lugar: {
        direccion: 'Portal del SAT (en línea)',
        sitioWeb: 'www.sat.gob.mx'
      },
      costo: 'Sin costo'
    },
    'constancia-situacion': {
      title: 'Constancia de situación fiscal',
      description: 'Obtención de constancia fiscal actualizada',
      requisitos: [
        'RFC',
        'e-firma vigente o Contraseña',
        'Acceso al portal del SAT'
      ],
      pasos: [
        'Ingresar al portal del SAT',
        'Acceder con RFC y contraseña o e-firma',
        'Ir a "Servicios por Internet"',
        'Seleccionar "Constancia de situación fiscal"',
        'Descargar PDF con código QR'
      ],
      fechas: {
        inicio: 'Todo el año',
        fin: 'Disponible 24/7',
        vigencia: 'Documento vigente al momento de descarga'
      },
      lugar: {
        direccion: 'Portal del SAT (en línea)',
        sitioWeb: 'www.sat.gob.mx'
      },
      costo: 'Sin costo'
    }
  };

  const currentTramite = tramiteDetails[id as string];

  if (!currentTramite) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-600">Trámite no encontrado</p>
          <button
            onClick={() => navigate('/home')}
            className="mt-4 text-[#2F6FED] hover:underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    if(id){
      if (isSaved) {
        removeSavedTramite(id);
      } else {
        saveTramite(id);
      }
    }
    setIsSaved(!isSaved);
    toast.success(
      isSaved ? 'Trámite eliminado de guardados' : 'Trámite guardado correctamente',
      {
        icon: <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
      }
    );
  };

  const handleReminder = () => {
    // Crear recordatorio con información del trámite
    const newReminder = {
      id: `${id}-${Date.now()}`,
      tramiteId: id || '',
      tramite: currentTramite.title,
      category: category || '',
      fecha: currentTramite.fechas.fin,
      estado: 'pendiente' as const,
      diasRestantes: 30 // Valor por defecto - se puede calcular basado en fecha real
    };
    
    addReminder(newReminder);
    toast.success('Recordatorio activado', {
      icon: <Bell className="w-5 h-5 text-[#2F6FED]" />
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      {/* Header */}
      <div className="bg-[#2F6FED] px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>
          
          <div className="flex items-center gap-3">
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <img src={appIcon} alt="TrámiteFácil" className="w-20 h-20" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl text-white">{currentTramite.title}</h1>
              <p className="text-white text-opacity-80 text-sm">{currentTramite.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-6 space-y-6">
        {/* Image (if available) */}
        {currentTramite.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <img 
              src={currentTramite.image} 
              alt={currentTramite.title}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        )}

        {/* Requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h2 className="text-xl text-[#1F2937] mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#2F6FED]" />
            Requisitos
          </h2>
          <ul className="space-y-3">
            {currentTramite.requisitos.map((req: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#2F6FED] rounded-full mt-2 shrink-0"></span>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Pasos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h2 className="text-xl text-[#1F2937] mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#2F6FED]" />
            Pasos a seguir
          </h2>
          <ol className="space-y-3">
            {currentTramite.pasos.map((paso: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-[#2F6FED] text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm">
                  {index + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{paso}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Fechas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h2 className="text-xl text-[#1F2937] mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#2F6FED]" />
            Fechas importantes
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Inicio de registro:</span>
              <span className="text-[#1F2937]">{currentTramite.fechas.inicio}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Cierre:</span>
              <span className="text-[#1F2937]">{currentTramite.fechas.fin}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Vigencia:</span>
              <span className="text-[#1F2937]">{currentTramite.fechas.vigencia}</span>
            </div>
          </div>
        </motion.div>

        {/* Lugar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-md"
        >
          <h2 className="text-xl text-[#1F2937] mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#2F6FED]" />
            Lugar para realizar el trámite
          </h2>
          <div className="space-y-3">
            <div>
              <span className="text-gray-600 block mb-1">Dirección:</span>
              <span className="text-[#1F2937]">{currentTramite.lugar.direccion}</span>
            </div>
            <div>
              <span className="text-gray-600 block mb-1">Sitio web:</span>
              <a href={`https://${currentTramite.lugar.sitioWeb}`} className="text-[#2F6FED] hover:underline">
                {currentTramite.lugar.sitioWeb}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Costo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-linear-to-r from-[#2F6FED] to-[#1e40af] rounded-xl p-6 text-white shadow-md"
        >
          <h3 className="text-lg mb-2 flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            Costo del trámite
          </h3>
          <p className="text-2xl">{currentTramite.costo}</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 pt-4"
        >
          <button
            onClick={handleSave}
            className={`flex-1 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 ${
              isSaved
                ? 'bg-[#22C55E] text-white'
                : 'bg-white text-[#2F6FED] border-2 border-[#2F6FED]'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
            {isSaved ? 'Guardado' : 'Guardar trámite'}
          </button>
          
          <button
            onClick={handleReminder}
            className="flex-1 bg-[#22C55E] text-white py-4 rounded-xl hover:bg-[#16a34a] transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Bell className="w-5 h-5" />
            Activar recordatorio
          </button>
        </motion.div>
      </div>
    </div>
  );
}