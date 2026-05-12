// Utilidades para manejar localStorage

export interface Reminder {
  id: string;
  tramiteId: string;
  tramite: string;
  category: string;
  fecha: string;
  estado: 'pendiente' | 'urgente' | 'completado';
  diasRestantes: number;
}

// Keys para localStorage
const SAVED_TRAMITES_KEY = 'tramitesfacil_saved';
const REMINDERS_KEY = 'tramitesfacil_reminders';

// TRÁMITES GUARDADOS
export const getSavedTramites = (): string[] => {
  try {
    const saved = localStorage.getItem(SAVED_TRAMITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Error reading saved tramites:', error);
    return [];
  }
};

export const saveTramite = (tramiteId: string): void => {
  try {
    const saved = getSavedTramites();
    if (!saved.includes(tramiteId)) {
      saved.push(tramiteId);
      localStorage.setItem(SAVED_TRAMITES_KEY, JSON.stringify(saved));
    }
  } catch (error) {
    console.error('Error saving tramite:', error);
  }
};

export const removeSavedTramite = (tramiteId: string): void => {
  try {
    const saved = getSavedTramites();
    const filtered = saved.filter(id => id !== tramiteId);
    localStorage.setItem(SAVED_TRAMITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing saved tramite:', error);
  }
};

export const isTramiteSaved = (tramiteId: string): boolean => {
  const saved = getSavedTramites();
  return saved.includes(tramiteId);
};

// RECORDATORIOS
export const getReminders = (): Reminder[] => {
  try {
    const reminders = localStorage.getItem(REMINDERS_KEY);
    return reminders ? JSON.parse(reminders) : [];
  } catch (error) {
    console.error('Error reading reminders:', error);
    return [];
  }
};

export const addReminder = (reminder: Reminder): void => {
  try {
    const reminders = getReminders();
    // Verificar si ya existe un recordatorio para este trámite
    const exists = reminders.some(r => r.tramiteId === reminder.tramiteId);
    if (!exists) {
      reminders.push(reminder);
      localStorage.setItem(REMINDERS_KEY, JSON.stringify(reminders));
      // Disparar evento personalizado para actualizar el contador
      window.dispatchEvent(new Event('remindersUpdated'));
    }
  } catch (error) {
    console.error('Error adding reminder:', error);
  }
};

export const removeReminder = (reminderId: string): void => {
  try {
    const reminders = getReminders();
    const filtered = reminders.filter(r => r.id !== reminderId);
    localStorage.setItem(REMINDERS_KEY, JSON.stringify(filtered));
    // Disparar evento personalizado para actualizar el contador
    window.dispatchEvent(new Event('remindersUpdated'));
  } catch (error) {
    console.error('Error removing reminder:', error);
  }
};

export const getRemindersCount = (): number => {
  const reminders = getReminders();
  // Contar solo los que no están completados
  return reminders.filter(r => r.estado !== 'completado').length;
};