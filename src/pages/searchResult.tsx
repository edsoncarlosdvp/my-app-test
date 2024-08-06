import Button from '@mui/material/Button';
import { useState } from 'react';
import SearchInput from '../Components/SearchInput/SearchInput';
// import premios from '../api/db_premios.json';

interface IColaborador {
  nomeColaborador: string;
  matriculaColaborador: number;
  cargo: string;
  setor: string;
}

interface IFilial {
  filial: string;
  filialId: number;
  colaboradores: IColaborador[];
}

interface IGrandeCentro {
  grandeCentro: string;
  codigoGrandeCentro: number;
  filiais: IFilial[];
}

const data = {
  premios: [
    {
      grandeCentro: "string",
      codigoGrandeCentro: 0,
      filiais: [
        {
          filial: "string",
          filialId: 0,
          colaboradores: [
            {
              nomeColaborador: "Edson",
              matriculaColaborador: 20,
              cargo: "string",
              setor: "string"
            }
          ]
        }
      ]
    },
    {
      grandeCentro: "string",
      codigoGrandeCentro: 0,
      filiais: [
        {
          filial: "string",
          filialId: 0,
          colaboradores: [
            {
              nomeColaborador: "Sandro",
              matriculaColaborador: 15,
              cargo: "string",
              setor: "string"
            }
          ]
        }
      ]
    },
    {
      grandeCentro: "string",
      codigoGrandeCentro: 0,
      filiais: [
        {
          filial: "string",
          filialId: 0,
          colaboradores: [
            {
              nomeColaborador: "Cassandra",
              matriculaColaborador: 25,
              cargo: "string",
              setor: "string"
            }
          ]
        }
      ]
    }
  ]
}

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<IColaborador[]>([]);

  const filterResults = () => {
    const filtered: IColaborador[] = data.premios.flatMap((gc: IGrandeCentro) => 
      gc.filiais.flatMap((filial: IFilial) =>
        filial.colaboradores.filter((colaborador: IColaborador) =>
          colaborador.matriculaColaborador.toString().includes(searchTerm)
        )
      )
    );
    setResults(filtered);
  };

  return (
    <div>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Button variant="contained" color="primary" onClick={filterResults}>
        Filtrar
      </Button>
      <div>
        {results.map((colaborador, index) => (
          <div key={index}>
            <p>Nome: {colaborador.nomeColaborador}</p>
            <p>Matrícula: {colaborador.matriculaColaborador}</p>
            <p>Cargo: {colaborador.cargo}</p>
            <p>Setor: {colaborador.setor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
