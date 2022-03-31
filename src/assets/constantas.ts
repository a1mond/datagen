import { IType } from "../app/models/type.model";

export const API_URL = 'http://localhost:3000'

export const CSS_BASIC_COLORS = [
  'maroon',
  'red',
  'purple',
  'fuchsia',
  'green',
  'lime',
  'olive',
  'orange',
  'navy',
  'blue',
  'teal',
  'aqua'
];

export const AVAILABLE_TYPES: IType[] = [
  {
    type: 'random',
    options: undefined
  },
  {
    type: 'name',
    options: {
      'firstName': 'text',
      'lastName': 'text'
    }
  },
  {
    type: 'uuid',
    options: {
      'seed': 'number'
    }
  }
]
