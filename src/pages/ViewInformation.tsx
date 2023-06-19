import React, { useState } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { Box } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

function DropDown() {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    const option = options.find((o) => o.value === value);
    setSelectedOption(option || null);
  };

  const options: Option[] = [
    
        {value:"تهران", label: 'تهران',  },
        {value:"البرز", label: 'البرز' },
        {value:"مشهد", label: 'مشهد' },
        {value:"تبریز", label: 'تبریز'},
        {value:"ارومیه", label: 'ارومیه'  },
        {value:"گیلان", label: "گیلان" },
        {value:"گرگان", label: 'گرگان'  },
        
      
  ];

  return (
    <Box>
      <Select value={selectedOption?.value || ""} onChange={handleChange}>
        <MenuItem value="">شهر خود را انتخاب کنید</MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {selectedOption && (
        <div>
      
          <p>{selectedOption.label}</p>
        </div>
      )}
    </Box>
  );
}

export default DropDown;