import type { Student, StudentStatus } from '../types/student.js';

// uses a type predicate (student is Student) to tell TypeScript that if it returns true the type of student is really Student
export function isValidStudent(student: unknown): student is Student {
  return (
    typeof student === 'object' &&
    student !== null &&
    'id' in student &&
    typeof (student as Student).id === 'number' &&
    'name' in student &&
    typeof (student as Student).name === 'string' &&
    'email' in student &&
    typeof (student as Student).email === 'string' &&
    'status' in student &&
    ((student as Student).status === 'active' ||
      (student as Student).status === 'inactive')
  );
}

export function getStatusLabel(status: StudentStatus): string {
  switch (status) {
    case 'active':
      return 'Active Student';
    case 'inactive':
      return 'Inactive Student';
    default:
      const _exhaustiveCheck: never = status;
      return 'Unknown Status';
  }
}

export function formatStudent(student: Student): string {
  const readableStatus = getStatusLabel(student.status);
  return `${student.id} - ${student.name} (${readableStatus})`;
}
