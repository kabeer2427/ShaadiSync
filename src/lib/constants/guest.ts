export const TAG_COLORS = [
  '#3b82f6', // blue
  '#10b981', // green
  '#8b5cf6', // purple
  '#f59e0b', // amber
  '#ef4444', // red
  '#ec4899', // pink
  '#06b6d4', // cyan
  '#84cc16', // lime
] as const

export const pickRandomTagColor = () =>
  TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)] ?? TAG_COLORS[0]

export const MAX_TAGS_PER_GUEST = 10

export const AGE_GROUP_OPTIONS = [
  { value: 'INFANT', label: 'Infant (0-2 years)' },
  { value: 'CHILD', label: 'Child (3-12 years)' },
  { value: 'TEEN', label: 'Teen (13-17 years)' },
  { value: 'ADULT', label: 'Adult (18+ years)' },
] as const

export const INDIAN_DIETARY_OPTIONS = [
  { value: 'Vegetarian', label: 'Vegetarian (No meat/fish)' },
  { value: 'Jain Vegetarian', label: 'Jain (No onion/garlic/root veg)' },
  { value: 'Vegan', label: 'Vegan (Strict plant-based)' },
  { value: 'Halal Non-Veg', label: 'Halal (Non-vegetarian)' },
  { value: 'Eggetarian', label: 'Eggetarian (Vegetarian + eggs)' },
  { value: 'Gluten-Free', label: 'Gluten-Free' },
  { value: 'Nut Allergy', label: 'Nut Allergy / Nut-Free' },
] as const

export const ACCESSIBILITY_OPTIONS = [
  { value: 'Wheelchair Access', label: 'Wheelchair Ramp / Step-Free Access' },
  { value: 'Ground Floor Seating', label: 'Ground Floor Seating' },
  { value: 'Senior Citizen Support', label: 'Elderly / Mobility Support' },
  { value: 'Close to Stage/Mandap', label: 'Close Proximity to Mandap/Stage' },
] as const
