import MUIDataTable from 'mui-datatables';
import { CircularProgress } from '@mui/material';

interface Props {
  isLoading: boolean;
  data: any[][];
  columns: string[];
  title?: string;
}

const MyTable = ({ isLoading, data, columns, title = '' }: Props) => {
  const options: any = {
    selectableRows: false,
    download: false,
    elevation: 0,
    filter: false,
    print: false,
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center p-12">
          <CircularProgress />
        </div>
      ) : (
        <MUIDataTable
          title={title!}
          data={data}
          columns={columns}
          options={options}
        />
      )}
    </>
  );
};

export default MyTable;
