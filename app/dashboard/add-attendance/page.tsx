'use client';

import { useSearchParams } from 'next/navigation';

import UpdateAttendanceForm from 'features/attendance/presentation/components/UpdateAttendanceForm';

const Page = () => {
  const searchParams = useSearchParams();
  const update = searchParams.get('update');

  return <UpdateAttendanceForm update={update} />;
};

export default Page;
