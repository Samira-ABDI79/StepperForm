import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, SelectProps } from '@material-ui/core';

interface Option {
  value: string;
  label: string;
}

interface MySelectProps extends SelectProps {
  renderOption: (option: Option) => React.ReactElement;
}

const allOptions: Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
  { value: 'kiwi', label: 'Kiwi' },
  { value: 'lemon', label: 'Lemon' },
  { value: 'mango', label: 'Mango' },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MySelect(props: MySelectProps) {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [options, setOptions] = useState<Option[]>(allOptions);

  const handleSearch = (event: React.ChangeEvent<{ value: string }>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term === '') {
      setOptions(allOptions);
    } else {
      const filteredOptions = allOptions.filter((option) =>
        option.label.toLowerCase().startsWith(term.toLowerCase())
      );
      setOptions(filteredOptions);
    }
  };

  const renderValue = (selected: unknown) => {
    const selectedOptions = selected as Option[];
    if (selectedOptions.length === 0) {
      return 'Select an option';
    }
    return selectedOptions.map((option) => option.label).join(', ');
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-multiple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-multiple-select-label"
        id="demo-multiple-select"
        multiple
        value={props.value}
        onChange={props.onChange}
        renderValue={renderValue}
        onOpen={() => setSearchTerm('')}
        {...props}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem disabled>Search:</MenuItem>
        <MenuItem>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </MenuItem>
        {options.map((option) => props.renderOption(option))}
      </Select>
    </FormControl>
  );
}