import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function AMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
    className="bg-dark text-white mt-3"
      sx={{
        
        flexGrow: 1,
        width:'100%',
       textAlign:'center',
      
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
      className='text-white'
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab   className='text-white' label="Item 1" />
        <Tab   className='text-white' label="Item 2" />
        <Tab   className='text-white' label="Item 3" />
        <Tab   className='text-white' label="Item 4" />
        <Tab   className='text-white' label="Item 5" />
        <Tab   className='text-white' label="Item 6" />
        <Tab   className='text-white' label="Item 7" />
        <Tab   className='text-white' label="Item 8" />
        <Tab   className='text-white' label="Item 9" />
        <Tab   className='text-white' label="Item 10" />
        <Tab   className='text-white' label="Item 11" />
        <Tab   className='text-white' label="Item 12" />
        <Tab   className='text-white' label="Item 13" />
        <Tab   className='text-white' label="Item 14" />
        <Tab   className='text-white' label="Item 15" />



      </Tabs>
    </Box>
  );
}