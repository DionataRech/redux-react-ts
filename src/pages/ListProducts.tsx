import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppSelector } from '../store/hooks';
import { ProductType } from '../store/models/ProductsSlice';
import { Paper } from '@mui/material';

const columns: GridColDef<ProductType[][number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nome',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Preço',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Descrição',
    width: 150,
    editable: true,
  },
  {
    field: 'active',
    headerName: 'Ativo',
    editable: true,
    width: 150,
  },
];

export default function ListProducts() {
  const productsredux = useAppSelector(state => state.products);

  return (
    <DefaultLayout>
      <Paper sx={{ padding: '20px', marginY: '20px' }}>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={productsredux}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </Paper>
    </DefaultLayout>
  );
}
