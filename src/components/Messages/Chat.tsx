import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomTextInput from "../CustomInput";
import { Colors } from "../../utils/Colors";

interface chatProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Chat: React.FC<chatProps> = ({ children, style }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setMessages([...messages, inputValue.trim()]);
      setInputValue("");
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          "@media(max-width: 900px)": {
            height: "100%",
            "@media(max-width: 600px)": {
              height: "100%",
            },
          },
          ...style,
        }}
      >
        {children}
        <Box
          sx={{
            marginTop: "1rem",
            textAlign: "center",
            padding: "0.6rem 10px 1px",
            flex: 1,
            overflowY: "auto",
          }}
        >
          <Typography>Today</Typography>
          {messages.map((message, index) => (
            <Box ref={scrollRef}>
              <Typography
                key={index}
                sx={{
                  backgroundColor: `${Colors.LinkColor}`,
                  color: "#fff",
                  marginTop: "1rem",
                  width: "fit-content",
                  borderRadius: "10px",
                  padding: "5px",
                  fontSize: "12px",
                }}
              >
                {message}{" "}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ padding: 1 }}>
          <CustomTextInput
            placeholder="Type Your Message Here"
            multiline={true}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              position: "sticky",
              bottom: "0",
              // backgroundColor: "red !important",
              zIndex: 100,
            }}
          />
        </Box>
      </Box>
    </>
  );
};
