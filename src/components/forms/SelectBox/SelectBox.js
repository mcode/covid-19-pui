import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { useForm } from '../../FormProvider/FormProvider';

function SelectBox({ id, formKey, label, options }) {
  if (formKey == null) formKey = id;

  const { setForm } = useForm();
  const [selectedItem, setItem] = useState();

  const handleChange = event => {
    setForm(prevState => {
      return {
        ...prevState,
        [formKey]: event.target.value
      };
    });
    setItem(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        name={id}
        select
        label={label}
        value={selectedItem || ''}
        onChange={handleChange}
        variant="outlined"
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}

export default SelectBox;