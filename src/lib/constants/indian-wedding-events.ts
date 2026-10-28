/**
 * Indian Wedding Event Presets
 *
 * Pre-configured presets for multi-event Indian weddings (ShaadiSync).
 * Organizers can select any preset to automatically pre-fill event title,
 * suggested attire, description, and logistical notes.
 */

export interface IndianWeddingEventPreset {
  id: string
  label: string
  name: string
  suggestedAttire: string
  description: string
  suggestedNotes: string
  category: 'pre-wedding' | 'ceremony' | 'post-wedding'
}

export const INDIAN_EVENT_PRESETS: IndianWeddingEventPreset[] = [
  {
    id: 'roka',
    label: 'Roka & Engagement',
    name: 'Roka & Ring Ceremony',
    suggestedAttire: 'Pastel Festive / Smart Traditional',
    description: 'Official family union, blessing rituals, and formal ring exchange ceremony.',
    suggestedNotes:
      'Prepare puja thali, gifts for in-laws, ring boxes, and photographer placement.',
    category: 'pre-wedding',
  },
  {
    id: 'haldi',
    label: 'Haldi',
    name: 'Haldi Ceremony',
    suggestedAttire: 'Yellow / Mustard Festive (Stain-friendly)',
    description:
      'Joyful turmeric paste ritual for purification, blessings, laughter, and auspicious beginnings.',
    suggestedNotes:
      'Arrange natural turmeric paste, floral jewelry, water sprinklers, wet wipes, and change of clothes.',
    category: 'pre-wedding',
  },
  {
    id: 'mehendi',
    label: 'Mehendi',
    name: 'Mehendi Night',
    suggestedAttire: 'Green / Floral Ethnic Festive',
    description:
      'Intricate henna application for bride and guests, accompanied by folk songs and celebration.',
    suggestedNotes:
      'Coordinate henna artists count, lounge seating with cushions, tea/snack service, and drying stations.',
    category: 'pre-wedding',
  },
  {
    id: 'sangeet',
    label: 'Sangeet & Cocktails',
    name: 'Sangeet & Musical Evening',
    suggestedAttire: 'Glamorous Indo-Western / Bandhgala / Shimmer Lehengas',
    description:
      'High-energy musical night featuring choreographed family dance performances, DJ music, and dinner.',
    suggestedNotes:
      'Sound check DJ/AV console, choreograph stage running order, MC briefing, and bar setup.',
    category: 'pre-wedding',
  },
  {
    id: 'wedding',
    label: 'Wedding Ceremony (Pheras)',
    name: 'Main Wedding Ceremony (Pheras / Anand Karaj / Nikah)',
    suggestedAttire: 'Royal Traditional / Formal Sherwani / Bridal Red or Pastel Lehengas',
    description:
      'The sacred marriage vows, holy fire pheras, sindoor/mangalsutra ritual, and blessings.',
    suggestedNotes:
      'Coordinate priest (pandit/qazi/granthi), havan samagri, varmala garlands, seating for elders, and vidai timing.',
    category: 'ceremony',
  },
  {
    id: 'reception',
    label: 'Grand Reception',
    name: 'Grand Wedding Reception',
    suggestedAttire: 'Black Tie / Tuxedo / Formal Evening Couture',
    description:
      'Elegant formal banquet and celebratory evening welcoming the newlyweds into married life.',
    suggestedNotes:
      'Stage photo-op coordination, guest gift counter, family table assignments, cake cutting, and toast timings.',
    category: 'post-wedding',
  },
]
