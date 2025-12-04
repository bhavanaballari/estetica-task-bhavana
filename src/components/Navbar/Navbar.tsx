import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#000",
        borderBottom: "1px solid #e6eef7",
        px: 2,
        width: "100%",
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT SECTION */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton size="large">
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" sx={{ fontWeight: 600, color: "#8b6be8" }}>
            Estetica
          </Typography>

          <Box sx={{ ml: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Welcome Back, Rajesh
            </Typography>
            <Typography variant="body2" sx={{ color: "gray", mt: "-2px" }}>
              Hello, here you can manage your orders by zone
            </Typography>
          </Box>
        </Stack>

        {/* RIGHT SECTION */}
        <Stack direction="row" alignItems="center" spacing={3}>
          {/* Search Bar */}
          <Paper
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
              py: 0.8,
              borderRadius: "12px",
              border: "1px solid #d2d9e5",
              width: "260px",
            }}
          >
            <SearchIcon fontSize="small" sx={{ mr: 1.2, color: "#7a7a7a" }} />
            <InputBase placeholder="Search..." fullWidth />
          </Paper>

          {/* Notifications */}
          <IconButton>
            <Badge
              variant="dot"
              color="warning"
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <NotificationsNoneIcon sx={{ color: "#000" }} />
            </Badge>
          </IconButton>

          {/* Profile */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <Avatar
              sx={{ width: 32, height: 32, bgcolor: "#dfe4ee", color: "#000" }}
            >
              AD
            </Avatar>
            <Typography variant="body1">Profile</Typography>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
