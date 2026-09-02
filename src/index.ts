import type { Student, ApiResponse } from './types/student.js';
import { formatStudent, isValidStudent } from './utils/studentUtils.js';

const mockApiResponse: ApiResponse<unknown> = {
  success: true,
  data: { id: 4, name: 'David', email: 123, status: 'active' },
};

const students: Student[] = [
  { id: 1, name: 'Alice', email: 'alice@email.com', status: 'active' },
  { id: 2, name: 'Bob', email: 'bob@email.com', status: 'inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com', status: 'active' },
];

for (const student of students) {
  console.log(formatStudent(student));
}

