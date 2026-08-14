interface Student {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}

const students: Student[] = [
  { id: 1, name: 'Alice', email: 'alice@email.com', status: 'active' },
  { id: 2, name: 'Bob', email: 'bob@email.com', status: 'inactive' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com', status: 'active' },
];

for (const student of students) {
  console.log(formatStudent(student));
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

function isValidStudent(student: unknown) {
  // Check if student is an object

  // Check if student has required properties

  // Check if status is valid

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

const mockApiResponse: ApiResponse<unknown> = {
  success: true,
  data: { id: 4, name: 'David', email: 123, status: 'active' },
};

if (isValidStudent(mockApiResponse.data)) {
  console.log('Valid student');
} else {
  console.log('Invalid student');
}
