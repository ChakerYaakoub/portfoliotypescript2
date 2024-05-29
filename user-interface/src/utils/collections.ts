// collections.ts

// Define a string literal type for the collection names
export type CollectionName =
  | 'userInfo'
  | 'workspaceDescriptions'
  | 'skills'
  | 'workingPeriods'
  | 'aboutUs'
  | 'services'
  | 'contactUs';

// Define and export the collections array
const collections: CollectionName[] = [
  'userInfo',
  'workspaceDescriptions',
  'skills',
  'workingPeriods',
  'aboutUs',
  'services',
  'contactUs'
];

export default collections;
