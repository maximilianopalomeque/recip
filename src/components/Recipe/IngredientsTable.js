import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const IngredientsTable = ({ ingredientsAndMeasures }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 600, maxHeight: 420 }}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              Ingredients
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredientsAndMeasures.map((i) => (
            <TableRow key={i.name}>
              <TableCell key={i.name} width={300} align="center" size="small">
                {i.name}
              </TableCell>
              <TableCell
                key={i.measure}
                width={300}
                align="center"
                size="small"
              >
                {i.measure}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IngredientsTable;
