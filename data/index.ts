import { Unit, Grade } from '@/types';
import { grade3Units } from './grade3';
import { grade4Units } from './grade4';
import { grade5Units } from './grade5';
import { grade6Units } from './grade6';
import { grade7Units } from './grade7';
import { grade8Units } from './grade8';
import { grade9Units } from './grade9';

const allUnits: Unit[] = [
  ...grade3Units,
  ...grade4Units,
  ...grade5Units,
  ...grade6Units,
  ...grade7Units,
  ...grade8Units,
  ...grade9Units,
];

export function getUnitsByGrade(grade: Grade): Unit[] {
  return allUnits.filter(unit => unit.grade === grade);
}

export function getUnitById(id: string): Unit | undefined {
  return allUnits.find(unit => unit.id === id);
}