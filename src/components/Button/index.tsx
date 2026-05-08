import React from 'react'
import { Button } from "@mui/material";

export default function MyButton({ children, href, variant = "contained" }) {
  return (
    <Button
      component="a"
      href={href}
      variant={variant}
      size="large"
      sx={{ textTransform: "none", minWidth: 140 }}
    >
      {children}
    </Button>
  )
} 