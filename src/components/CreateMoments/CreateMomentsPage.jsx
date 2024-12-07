import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    MobileStepper,
    Grid,
    Card,
    CardActionArea,
    CardContent, IconButton,
} from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import EventIcon from "@mui/icons-material/Event";
import InfoIcon from "@mui/icons-material/Info";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate} from "react-router";

const categories = [
    { id: 1, name: "Snowboarding Adventure", gradient: "linear-gradient(135deg, #76b852, #8dc26f)" },
    { id: 2, name: "Sunset View", gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)" },
    { id: 3, name: "Morning Routine", gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)" },
    { id: 4, name: "Walking in the Park", gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)" },
];

const activities = {
    1: {
        title: "Snowboarding Adventure",
        tips: "Capture dynamic moments with wide shots!",
        templates: ["Action Highlights", "Slow Motion", "POV Footage", "Cinematic Shots"],
    },
    2: {
        title: "Sunset View",
        tips: "Use low light settings to capture the sunset beautifully.",
        templates: ["Time-lapse", "Golden Hour Close-ups", "Silhouette Shots", "Reflection Capture"],
    },
    3: {
        title: "Morning Routine",
        tips: "Capture cozy, natural light in the morning.",
        templates: ["Quick Clips", "Morning Vibes", "Self-care Moments", "Breakfast Prep"],
    },
    4: {
        title: "Walking in the Park",
        tips: "Shoot from different angles to add variety.",
        templates: ["Scenic Walk", "Drone View", "Leafy Trails", "Nature Focus"],
    },
};

const SetupPage = () => {
    const [step, setStep] = useState(0); // 0: Choose categories, 1+: Setup each category
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [dates, setDates] = useState({});
    const [musicTracks, setMusicTracks] = useState({});
    const [selectedTemplates, setSelectedTemplates] = useState({});
    const [editedTitles, setEditedTitles] = useState({});

    const navigate = useNavigate();

    const handleToggleCategory = (id) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((categoryId) => categoryId !== id) : [...prev, id]
        );
    };

    const handleDateChange = (id, value) => {
        setDates((prev) => ({ ...prev, [id]: value }));
    };

    const handleMusicChange = (id, value) => {
        setMusicTracks((prev) => ({ ...prev, [id]: value }));
    };

    const handleTemplateSelect = (id, template) => {
        setSelectedTemplates((prev) => ({ ...prev, [id]: template }));
    };

    const handleTitleChange = (id, value) => {
        setEditedTitles((prev) => ({ ...prev, [id]: value }));
    };

    const handleNext = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handleBack = () => {
        setStep((prevStep) => prevStep - 1);
    };

    return (
        <Container sx={{ py: 3 }}>
            {step === 0 ? (
                <>
                    <Box sx={{ mb: 1 }}>
                        <IconButton
                            onClick={() => navigate("/")}
                            sx={{
                                color: "#007aff",
                                fontSize: "16px",
                                "&:hover": {
                                    backgroundColor: "rgba(0, 122, 255, 0.1)",
                                },
                            }}
                        >
                            <ArrowBackIosNew fontSize="small" sx={{ mr: 0.5 }} />
                            Back
                        </IconButton>
                    </Box>
                    {/* Step 1: Choose Categories */}
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 0 }}>
                        Choose Categories
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                        Select categories you want to work on.
                    </Typography>
                    <Grid container spacing={2}>
                        {categories.map((category) => (
                            <Grid item xs={6} sm={3} key={category.id}>
                                <Card
                                    onClick={() => handleToggleCategory(category.id)}
                                    sx={{
                                        height: 150,
                                        borderRadius: 3,
                                        background: category.gradient,
                                        position: "relative",
                                        cursor: "pointer",
                                        boxShadow: selectedCategories.includes(category.id)
                                            ? "0px 0px 10px 3px rgba(0, 122, 255, 0.6)"
                                            : "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        transition: "box-shadow 0.2s ease-in-out",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "100%",
                                                color: "#fff",
                                                fontWeight: 600,
                                                textAlign: "center",
                                            }}
                                        >
                                            {category.name}
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ textAlign: "center", mt: 4 }}>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            disabled={selectedCategories.length === 0}
                            sx={{
                                backgroundColor: selectedCategories.length > 0 ? "#007aff" : "#ccc",
                                color: "#fff",
                                textTransform: "none",
                                px: 5,
                                py: 1.5,
                                fontSize: "16px",
                                fontWeight: "bold",
                                borderRadius: "50px",
                                "&:hover": {
                                    backgroundColor: selectedCategories.length > 0 ? "#005bb5" : "#ccc",
                                },
                            }}
                        >
                            Continue
                        </Button>
                    </Box>
                </>
            ) : (
                <>
                    {/* Step 2+: Setup Selected Categories */}
                    <Box
                        sx={{
                            mb: 1,
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
                            This is just the planning stage! You can modify all of these settings later.
                        </Typography>
                    </Box>
                    <TextField
                        label="Edit Title"
                        value={editedTitles[selectedCategories[step - 1]] || activities[selectedCategories[step - 1]].title}
                        onChange={(e) => handleTitleChange(selectedCategories[step - 1], e.target.value)}
                        fullWidth
                        sx={{ mb: 2, mt: 1 }}
                    />
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ color: "#666", mb: 1 }}>
                            Tips:
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#444" }}>
                            {activities[selectedCategories[step - 1]].tips}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 1 }}>
                        <TextField
                            label="Select Date"
                            type="date"
                            value={dates[selectedCategories[step - 1]] || ""}
                            onChange={(e) => handleDateChange(selectedCategories[step - 1], e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Music Track"
                            placeholder="Add a music track"
                            value={musicTracks[selectedCategories[step - 1]] || ""}
                            onChange={(e) => handleMusicChange(selectedCategories[step - 1], e.target.value)}
                        />
                    </Box>
                    {/* Templates */}
                    <Box>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: "#666",
                                mb: 2,
                                fontWeight: 500,
                            }}
                        >
                            Select a template that best fits your activity. These templates will guide the tone and structure of your final video.
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 2,
                            }}
                        >
                            {activities[selectedCategories[step - 1]].templates.map((template, idx) => (
                                <Card
                                    key={idx}
                                    onClick={() => handleTemplateSelect(selectedCategories[step - 1], template)}
                                    sx={{
                                        height: 100,
                                        background: [
                                            "linear-gradient(135deg, #f6d365, #fda085)",
                                            "linear-gradient(135deg, #84fab0, #8fd3f4)",
                                            "linear-gradient(135deg, #fccb90, #d57eeb)",
                                            "linear-gradient(135deg, #ff9a9e, #fad0c4)",
                                        ][idx % 4],
                                        borderRadius: 4,
                                        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "100%",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 600,
                                                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
                                            }}
                                        >
                                            {template}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                    <MobileStepper
                        variant="dots"
                        steps={selectedCategories.length + 1}
                        position="static"
                        activeStep={step}
                        sx={{ backgroundColor: "transparent", mt: 3 }}
                        nextButton={
                            <Button size="small" onClick={handleNext} disabled={step === selectedCategories.length}>
                                Next
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={step === 0}>
                                Back
                            </Button>
                        }
                    />
                    {step === selectedCategories.length && (
                        <Box sx={{ textAlign: "center" }}>
                            <Button
                                onClick={() => navigate('/activities')}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#4caf50",
                                    color: "#fff",
                                    textTransform: "none",
                                    px: 4,
                                    py: 1.5,
                                    fontSize: "12px",
                                    fontWeight: "bold",
                                    borderRadius: "50px",
                                    "&:hover": {
                                        backgroundColor: "#388e3c",
                                    },
                                }}
                            >
                                Done
                            </Button>
                        </Box>
                    )}
                </>
            )}
        </Container>
    );
};

export default SetupPage;
