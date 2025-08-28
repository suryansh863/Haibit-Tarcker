const STORAGE_KEY = 'badHabitsTracker';

// Initial data structure
const initialHabits = [
  {
    id: 1,
    name: 'Alcohol Consumption',
    type: 'Alcohol Consumption',
    notes: 'Avoiding all alcoholic beverages',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 2,
    name: 'Sugar Intake',
    type: 'Sugar',
    notes: 'Cutting out processed sugars',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 3,
    name: 'Smoking',
    type: 'Smoking',
    notes: 'Starting my journey to quit sir',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
  {
    id: 4,
    name: 'Masturbation',
    type: 'Masturbation',
    notes: 'Working on self-control and focus',
    startDate: '2025-08-27',
    lastBreakDate: null,
    targetDuration: '6 months',
  },
];

// Load habits from localStorage
export const loadHabits = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure all habits have required fields
      return parsed.map(habit => ({
        ...habit,
        id: habit.id || Date.now() + Math.random(),
        startDate: habit.startDate || new Date().toISOString().slice(0, 10),
        lastBreakDate: habit.lastBreakDate || null,
        targetDuration: habit.targetDuration || '6 months',
        type: habit.type || 'General',
        notes: habit.notes || '',
      }));
    }
    // If no stored data, save initial data and return it
    saveHabits(initialHabits);
    return initialHabits;
  } catch (error) {
    console.error('Error loading habits:', error);
    // If there's an error, return initial data
    return initialHabits;
  }
};

// Save habits to localStorage
export const saveHabits = (habits) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    return true;
  } catch (error) {
    console.error('Error saving habits:', error);
    return false;
  }
};

// Add a new habit
export const addHabit = (habit) => {
  const habits = loadHabits();
  const newHabit = {
    ...habit,
    id: Date.now() + Math.random(), // Ensure unique ID
    startDate: habit.startDate || new Date().toISOString().slice(0, 10),
    lastBreakDate: null,
    targetDuration: '6 months',
  };
  const updatedHabits = [...habits, newHabit];
  saveHabits(updatedHabits);
  return updatedHabits;
};

// Update an existing habit
export const updateHabit = (updatedHabit) => {
  const habits = loadHabits();
  const updatedHabits = habits.map(habit =>
    habit.id === updatedHabit.id ? updatedHabit : habit
  );
  saveHabits(updatedHabits);
  return updatedHabits;
};

// Delete a habit
export const deleteHabit = (habitId) => {
  const habits = loadHabits();
  const updatedHabits = habits.filter(habit => habit.id !== habitId);
  saveHabits(updatedHabits);
  return updatedHabits;
};

// Break a streak (update lastBreakDate)
export const breakStreak = (habitId) => {
  const habits = loadHabits();
  const today = new Date().toISOString().slice(0, 10);
  const updatedHabits = habits.map(habit =>
    habit.id === habitId ? { ...habit, lastBreakDate: today } : habit
  );
  saveHabits(updatedHabits);
  return updatedHabits;
};

// Clear all data (for testing)
export const clearAllData = () => {
  localStorage.removeItem(STORAGE_KEY);
};

// Export initial data for reference
export { initialHabits };
