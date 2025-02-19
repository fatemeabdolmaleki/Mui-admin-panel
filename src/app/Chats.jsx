"use client";
import { Avatar, Badge, Box, Typography } from "@mui/material";
import React from "react";


const Chats = ({ src, name, text, min, isMessage, status, numberMessages }) => {


  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px",
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Badge
          color="secondary"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          overlap="circular"
          sx={{
            "& .MuiBadge-dot": {
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              backgroundColor:
                status === "online"
                  ? "#10B981"
                  : status === "offline"
                  ? "#FF6766"
                  : status === "soon"
                  ? "#FFBA00"
                  : "transparent",
            },
          }}
        >
          <Avatar src={src} sx={{ width: "3.5rem", height: "3.5rem" }} />
        </Badge>
        <Box sx={{ marginX: "10px" }}>
          <Typography
            sx={{
              fontSize: "16px",
        
            }}
          >
            {name}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <Typography
              sx={{
                fontSize: "14px",
              
              }}
            >
              {text}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                marginLeft: "5px",
              }}
            >
              {min}
            </Typography>
          </Box>
        </Box>
      </Box>
      {isMessage && (
        <Box
          sx={{
            backgroundColor: "#3C50E0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            width: "25px",
            height: "25px",
            color: "white",
          }}
        >
          {numberMessages}
        </Box>
      )}
    </Box>
  );
};

export default Chats;
