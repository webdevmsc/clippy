import React, { useState } from "react";
import { Container, Box, Typography, TextField, Button, MobileStepper, Card, CardActionArea, CardContent } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EventIcon from "@mui/icons-material/Event";
import InfoIcon from "@mui/icons-material/Info";

const SetupPage = () => {
    // Mock data representing activities and templates
    const activities = [
        {
            title: "Snowboarding Adventure",
            tips: "Capture dynamic moments with wide shots!",
            templates: [
                "Action Highlights", "Slow Motion", "First-Person View", "Cinematic Shots", "Close-Ups",
                "POV Footage", "Aerial Shots", "Dynamic Angles", "High-Speed Clips"
            ],
        },
        {
            title: "Sunset View",
            tips: "Use low light settings to capture the sunset beautifully.",
            templates: [
                "Time-lapse", "Romantic Mood", "Golden Hour Close-ups", "Silhouette Shots", "Reflection Capture",
                "Colorful Clouds", "Sunset Portraits", "Wide-Angle Sunset", "Artistic Filters"
            ],
        },
        {
            title: "Morning Routine",
            tips: "Capture cozy, natural light in the morning.",
            templates: [
                "Quick Clips", "Aesthetic Angles", "Morning Vibes", "Routine Highlights", "Sunrise Glow",
                "Coffee Time", "Self-care Moments", "Cozy Bedroom Shots", "Breakfast Prep"
            ],
        },
        {
            title: "Walking in the Park",
            tips: "Shoot from different angles to add variety.",
            templates: [
                "Scenic Walk", "Close-Up Details", "Drone View", "Footpath Angles", "Bird's Eye View",
                "Nature Focus", "People in Motion", "Leafy Trails", "Relaxed Walk"
            ],
        },
    ];

    // State for the active step
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = activities.length;

    // State for form fields
    const [dates, setDates] = useState(Array(maxSteps).fill(""));
    const [musicTracks, setMusicTracks] = useState(Array(maxSteps).fill(""));
    const [selectedTemplates, setSelectedTemplates] = useState(Array(maxSteps).fill(""));

    // Handle change for input fields
    const handleDateChange = (index, value) => {
        const updatedDates = [...dates];
        updatedDates[index] = value;
        setDates(updatedDates);
    };

    const handleMusicChange = (index, value) => {
        const updatedTracks = [...musicTracks];
        updatedTracks[index] = value;
        setMusicTracks(updatedTracks);
    };

    // Handle selecting a template
    const handleTemplateSelect = (index, template) => {
        const updatedTemplates = [...selectedTemplates];
        updatedTemplates[index] = template;
        setSelectedTemplates(updatedTemplates);
    };

    // Handle click for next and previous buttons
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
            {/* Informational Alert */}
            <Box
                sx={{
                    mb: 3,
                    p: 2,
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                    border: "1px solid #90caf9",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                }}
            >
                <InfoIcon sx={{ color: "#007aff" }} />
                <Typography variant="body2" sx={{ color: "#333", fontWeight: 500 }}>
                    This is just the planning stage! You can modify all of these settings later. Feel free to add placeholder values now.
                </Typography>
            </Box>

            {/* Header */}
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 500,
                    color: "#333",
                    mb: 2,
                    textAlign: "left",
                }}
            >
                Set Up Your Activities
            </Typography>

            {/* Activity Setup Card */}
            <Box
                sx={{
                    padding: 2,
                    background: "#f9f9f9",
                    borderRadius: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    mb: 3,
                }}
            >
                {/* Activity Title */}
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#333", mb: 1 }}>
                    {activities[activeStep].title}
                </Typography>

                {/* Input for Date */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    <EventIcon sx={{ color: "#007aff" }} />
                    <TextField
                        label="Select Date"
                        type="date"
                        value={dates[activeStep]}
                        onChange={(e) => handleDateChange(activeStep, e.target.value)}
                        sx={{ width: "100%" }}
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>

                {/* Input for Music */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                    <MusicNoteIcon sx={{ color: "#007aff" }} />
                    <TextField
                        label="Music Track"
                        placeholder="Add a music track"
                        value={musicTracks[activeStep]}
                        onChange={(e) => handleMusicChange(activeStep, e.target.value)}
                        sx={{ width: "100%" }}
                    />
                </Box>

                {/* Tips Section */}
                <Typography variant="subtitle2" sx={{ fontWeight: 500, color: "#666", mb: 1 }}>
                    Tips:
                </Typography>
                <Typography variant="body2" sx={{ color: "#444", mb: 2 }}>
                    {activities[activeStep].tips}
                </Typography>

                {/* Templates Section */}
                <Typography variant="subtitle2" sx={{ fontWeight: 500, color: "#666", mb: 1 }}>
                    Choose a Template:
                </Typography>
                <Box sx={{ overflowX: "auto", display: "flex", gap: 2, paddingBottom: 1, pt: 1 }}>
                    {activities[activeStep].templates.map((template, idx) => (
                        <Card
                            key={idx}
                            sx={{
                                minWidth: 160,
                                height: 160,
                                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                                borderRadius: 3,
                                flexShrink: 0,
                                position: "relative",
                                background: [
                                    "linear-gradient(135deg, #f6d365, #fda085)",
                                    "linear-gradient(135deg, #84fab0, #8fd3f4)",
                                    "linear-gradient(135deg, #fccb90, #d57eeb)",
                                    "linear-gradient(135deg, #ff9a9e, #fad0c4)"
                                ][idx % 4], // Используем разные градиенты для карточек
                            }}
                        >
                            <CardActionArea onClick={() => handleTemplateSelect(activeStep, template)}>
                                <CardContent
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontWeight: 700,
                                            color: "#fff",
                                            textAlign: "center",
                                        }}
                                    >
                                        {template}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </Box>
            </Box>

            {/* Pagination Stepper */}
            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ backgroundColor: "transparent", justifyContent: "center" }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                        Next
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        Back
                    </Button>
                }
            />
        </Container>
    );
};

export default SetupPage;
