import React, { useState } from "react";
import { Container, Grid, Card, Typography, Box, Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {useNavigate} from "react-router";

const ActivitiesPage = () => {

    const navigate = useNavigate();

    const [activities, setActivities] = useState([
        { title: "Snowboarding Adventure", date: "2024-12-05", music: "Avicii - Wake Me Up" },
        { title: "Sunset View", date: "2024-12-06", music: null },
        { title: "Morning Routine", date: null, music: "Coldplay - Paradise" },
        { title: "Walking in the Park", date: "2024-12-08", music: null },
    ]);

    const handleActivityClick = (activity) => {
        navigate('/event')
        // Here you can add navigation logic, e.g., using react-router
    };

    return (
        <Container sx={{ paddingTop: 3, paddingBottom: 3 }}>
            {/* Header */}
            <Typography
                variant="h5"
                sx={{
                fontWeight: 500,
                color: "#555",
                mb: 3,
                textAlign: "left", // Слева
                fontSize: "1.5rem",
            }}
                >
                Your Planned Activities
        </Typography>

            {/* Activities List */}
            <Grid container spacing={2}>
                {activities.map((activity, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                background: "linear-gradient(135deg, #ffffff, #f0f4ff)", // Soft gradient with color accent
                                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                                borderRadius: 3,
                                padding: 2,
                                display: "flex",
                                flexDirection: "column",
                                gap: 0.5,
                                position: "relative",
                                cursor: "pointer",
                                "&:hover": {
                                    background: "linear-gradient(135deg, #f5f7ff, #e8edff)", // Highlight on hover
                                },
                            }}
                            onClick={() => handleActivityClick(activity)}
                        >
                            {/* Activity Title with Arrow */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    mb: 0.5,
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        color: "#333",
                                        fontSize: "1rem",
                                    }}
                                >
                                    {activity.title}
                                </Typography>
                                <ArrowForwardIosIcon
                                    sx={{
                                        fontSize: "16px",
                                        color: "#007aff",
                                    }}
                                />
                            </Box>

                            {/* Divider */}
                            <Divider sx={{ marginY: 0.5 }} />

                            {/* Date */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <EventIcon sx={{ color: activity.date ? "#007aff" : "#ccc", fontSize: "1rem" }} />
                                <Typography variant="body2" sx={{ color: activity.date ? "#333" : "#888" }}>
                                    {activity.date || "Not assigned"}
                                </Typography>
                            </Box>

                            {/* Music */}
                            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                <MusicNoteIcon
                                    sx={{ color: activity.music ? "#007aff" : "#ccc", fontSize: "1rem" }}
                                />
                                <Typography variant="body2" sx={{ color: activity.music ? "#333" : "#888" }}>
                                    {activity.music || "Not assigned"}
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ActivitiesPage;
