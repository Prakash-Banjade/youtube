import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function Media() {
  return (
    <div className="skeleton-container">
      {Array.from(new Array(12)).map((item, index) => (
        <Box key={index} sx={{ width: 250 }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="90%"
            sx={{ backgroundColor: "var(--dark-light)", borderRadius: '8px' }}
          />

          <div style={{ display: "flex", flexDirection: 'column', width: '100%', gap: '2px', marginBottom: '10px' }}>
            <Skeleton
              width="80%"
              sx={{ backgroundColor: "var(--dark-light)" }}
            />
            <Skeleton
              width="60%"
              sx={{ backgroundColor: "var(--dark-light)" }}
            />
          </div>
        </Box>
      ))}
    </div>
  );
}

export default function YouTube_Skeleton() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media />
    </Box>
  );
}

export function Narrow_Video_Skeleton(){
  return(
    <Box sx={{ overflow: "hidden" }}>
      <div className="skeleton-container">
      {Array.from(new Array(12)).map((item, index) => (
        <Box key={index} sx={{ width: '100%',height: '100px',  display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ backgroundColor: "var(--dark-light)", borderRadius: '8px' }}
          />

          <div style={{ display: "flex", flexDirection: 'column', width: '100%', gap: '2px', marginBottom: '10px' }}>
            <Skeleton
              width="80%"
              sx={{ backgroundColor: "var(--dark-light)" }}
            />
            <Skeleton
              width="60%"
              sx={{ backgroundColor: "var(--dark-light)" }}
            />
          </div>
        </Box>
      ))}
    </div>
    </Box>
  )
}
