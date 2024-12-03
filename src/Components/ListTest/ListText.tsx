import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

interface FieldData {
  id: string;
  value: string;
  disabled: boolean;
}

const ListText: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([]);
  const [values, setValues] = useState<string[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const addNewField = () => {
    const newField: FieldData = {
      id: Date.now().toString(),
      value: "",
      disabled: disabled,
    };
    setFields((prev) => [...prev, newField]);
  };

  const updateFieldValue = (id: string, value: string) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  const confirmField = (id: string) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id ? { ...field, disabled: true } : field
      )
    );
    const confirmedValue = fields.find((field) => field.id === id)?.value || "";
    setValues((prev) => [...prev, confirmedValue]);
    addNewField(); // Add a new empty TextField after confirming
    setDisabled(true);
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
    const removedValue = fields.find((field) => field.id === id)?.value;
    if (removedValue) {
      setValues((prev) => prev.filter((value) => value !== removedValue));
      setDisabled(false);
    }
  };

  useEffect(() => {
    // Adiciona o campo inicial
    if (fields.length === 0) {
      addNewField();
    }
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dynamic TextFields with Material UI
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {fields.map((field) => (
          <Box
            key={field.id}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Digite aqui"
              disabled={field.disabled}
              value={field.value}
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
            />
            {field.value && !field.disabled && (
              <IconButton
                color="success"
                onClick={() => confirmField(field.id)}
              >
                <CheckIcon />
              </IconButton>
            )}
            <IconButton color="error" onClick={() => removeField(field.id)}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))}
        {fields.length === 0 && (
          <Typography variant="body1">
            Clique no botão de check para adicionar um campo.
          </Typography>
        )}
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Valores Confirmados:</Typography>
        <Box>
          {values.map((value, index) => (
            <Typography key={index} variant="body1">
              {value}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListText;