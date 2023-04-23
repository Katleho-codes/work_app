import React, { useState } from 'react'
import Link from "next/link"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function Jobs() {
  return (
    <>
      <TabButtons />
    </>
  )
}



function TabButtons() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event: any, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  }
  return (
    <>

      <Box>
        <Box>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="All jobs" />
            <Tab label="My jobs" />
            <Tab label="Videos" />
            <Tab label="Links" />
          </Tabs>
        </Box>
        <Box sx={{ padding: 2 }}>
          {tabIndex === 0 && (
            <Box>

              <Typography>The first tab</Typography>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>

              <Typography>The second tab</Typography>

            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <Typography>The third tab</Typography>
            </Box>
          )}
          {tabIndex === 3 && (
            <Box>
              <Typography>The fourth tab</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
}