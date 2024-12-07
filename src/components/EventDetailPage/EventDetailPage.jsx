import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Card,
    Grid,
    IconButton,
    Divider,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventIcon from "@mui/icons-material/Event";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import {ArrowBackIosNew} from "@mui/icons-material";
import {useNavigate} from "react-router";

const EventDetailPage = ({ event = { title: "", date: "", music: "", videos: [] } }) => {
    const [editMode, setEditMode] = useState(false);
    const [showVideoEditor, setShowVideoEditor] = useState(false);
    const [showFragmentSelector, setShowFragmentSelector] = useState(false);
    const [editedEvent, setEditedEvent] = useState(event);
    const [videoGallery, setVideoGallery] = useState([
        { id: 1, name: "Mountain Scene with Beautiful Views", thumbnail: null, type: "video" },
        { id: 2, name: "Snowboarding Action", thumbnail: null, type: "video" },
        { id: 3, name: "Drone View Over Mountains", thumbnail: null, type: "photo" },
        { id: 4, name: "Group Photo in the Snow", thumbnail: null, type: "photo" },
    ]);

    const gradients = [
        "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)",
    ];

    const handleEdit = () => setEditMode(true);
    const handleCancel = () => {
        setEditMode(false);
        setEditedEvent(event);
    };
    const handleSave = () => {
        setEditMode(false);
        console.log("Saved event details:", editedEvent);
    };

    const navigate = useNavigate()

    const handleGoToFragmentSelector = () => setShowFragmentSelector(true);
    const handleGoToVideoEditor = () => {
        setShowFragmentSelector(false);
        setShowVideoEditor(true);
    };
    const handleBackToDetails = () => {
        setShowFragmentSelector(false);
        setShowVideoEditor(false);
    };
    const handleBackToFragments = () => {
        setShowFragmentSelector(true);
        setShowVideoEditor(false);
    };

    const handleAddFragment = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "video/*,image/*";
        input.onchange = (event) => {
            const newFile = event.target.files[0];
            const newMedia = {
                id: Date.now(),
                name: newFile.name || "New Fragment",
                thumbnail: null,
                type: newFile.type.includes("video") ? "video" : "photo",
            };
            setVideoGallery((prev) => [...prev, newMedia]);
        };
        input.click();
    };

    const handleDeleteFragment = (id) => {
        setVideoGallery((prev) => prev.filter((media) => media.id !== id));
    };

    return (
        <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
            {
                !showFragmentSelector && !showVideoEditor && <Box sx={{ mb: 1 }}>
                    <IconButton
                        onClick={() => navigate("/activities")}
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
            }
            <Typography variant="h6" sx={{ fontWeight: 500, color: "#333", mb: 3, textAlign: "left" }}>
                {showFragmentSelector
                    ? "Select Video Fragments"
                    : showVideoEditor
                        ? "Video Editor"
                        : "Work on Your Event"}
            </Typography>

            {/* Main Video Placeholder */}
            {!showFragmentSelector && !showVideoEditor && (
                <>
                    <Box
                        sx={{
                            width: "100%",
                            height: 200,
                            backgroundColor: "#f9f9f9",
                            border: "2px dashed #e0e0e0",
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                        }}
                    >
                        <Typography variant="body1" sx={{ color: "#666", textAlign: "center" }}>
                            Final video is not ready
                        </Typography>
                    </Box>

                    {/* Edit Video Scenes Button */}
                    <Button
                        variant="outlined"
                        onClick={handleGoToFragmentSelector}
                        sx={{
                            width: "100%",
                            textTransform: "none",
                            borderColor: "#007aff",
                            color: "#007aff",
                            mb: 3,
                            '&:hover': { backgroundColor: "rgba(0, 122, 255, 0.1)" },
                        }}
                    >
                        Edit Video Scenes
                    </Button>
                </>
            )}

            {/* Main Event Details */}
            {!showFragmentSelector && !showVideoEditor && (
                <Card sx={{ padding: 3, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: 3, background: "#fff", mb: 3 }}>
                    {/* Title Section */}
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 1 }}>
                            {editMode ? (
                                <TextField
                                    name="title"
                                    label="Event Title"
                                    value={editedEvent.title}
                                    onChange={(e) => setEditedEvent((prev) => ({ ...prev, title: e.target.value }))}
                                    fullWidth
                                />
                            ) : (
                                editedEvent.title || "Untitled Event"
                            )}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    {/* Date Section */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <EventIcon sx={{ color: "#007aff" }} />
                        {editMode ? (
                            <TextField
                                name="date"
                                label="Event Date"
                                type="date"
                                value={editedEvent.date}
                                onChange={(e) => setEditedEvent((prev) => ({ ...prev, date: e.target.value }))}
                                InputLabelProps={{ shrink: true }}
                            />
                        ) : (
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                Date: {editedEvent.date || "Not Assigned"}
                            </Typography>
                        )}
                    </Box>

                    {/* Music Section */}
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <MusicNoteIcon sx={{ color: "#007aff" }} />
                        {editMode ? (
                            <TextField
                                name="music"
                                label="Music Track"
                                value={editedEvent.music}
                                onChange={(e) => setEditedEvent((prev) => ({ ...prev, music: e.target.value }))}
                                fullWidth
                            />
                        ) : (
                            <Typography variant="body1" sx={{ color: "#333" }}>
                                Music: {editedEvent.music || "No Music Selected"}
                            </Typography>
                        )}
                    </Box>
                </Card>
            )}

            {/* Video Fragment Selector */}
            {showFragmentSelector && (
                <Box>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBackToDetails}
                        sx={{
                            textTransform: "none",
                            mb: 2,
                            color: "#007aff",
                            '&:hover': { backgroundColor: "rgba(0, 122, 255, 0.1)" },
                        }}
                    >
                        Back to Details
                    </Button>
                    <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                        Media Fragments
                    </Typography>
                    <Grid container spacing={2}>
                        {videoGallery.map((media, index) => (
                            <Grid item xs={6} sm={4} md={3} key={media.id}>
                                <Card
                                    sx={{
                                        position: "relative",
                                        height: 150,
                                        background: gradients[index % gradients.length],
                                        borderRadius: 3,
                                        overflow: "hidden",
                                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {/* Name Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            bottom: 0,
                                            width: "100%",
                                            padding: "5px 10px",
                                            background: "rgba(0, 0, 0, 0.4)",
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: "12px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {media.name}
                                    </Box>

                                    {/* Action Buttons */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 5,
                                            right: 5,
                                            display: "flex",
                                            gap: 1,
                                        }}
                                    >
                                        <IconButton
                                            size="small"
                                            onClick={() => alert(`Edit ${media.name}`)}
                                            sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", "&:hover": { backgroundColor: "#007aff" } }}
                                        >
                                            <EditIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            onClick={() => handleDeleteFragment(media.id)}
                                            sx={{ color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)", "&:hover": { backgroundColor: "#d32f2f" } }}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={handleAddFragment}
                        sx={{
                            width: "100%",
                            textTransform: "none",
                            backgroundColor: "#007aff",
                            color: "#fff",
                            mt: 3,
                            '&:hover': { backgroundColor: "#005bb5" },
                        }}
                    >
                        Add New Fragment
                    </Button>

                    <Button
                        variant="contained"
                        onClick={handleGoToVideoEditor}
                        sx={{
                            marginTop: 3,
                            backgroundColor: "#4caf50",
                            color: "#fff",
                            width: "100%",
                            textTransform: "none",
                            '&:hover': { backgroundColor: "#388e3c" },
                        }}
                    >
                        Go to Video Editor
                    </Button>
                </Box>
            )}

            {/* Video Editor */}
            {showVideoEditor && (
                <Box>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={handleBackToFragments}
                        sx={{
                            textTransform: "none",
                            mb: 2,
                            color: "#007aff",
                            '&:hover': { backgroundColor: "rgba(0, 122, 255, 0.1)" },
                        }}
                    >
                        Back to Fragments
                    </Button>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Video Editor Interface (Placeholder)
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            height: 300,
                            backgroundColor: "#000",
                            borderRadius: 3,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 3,
                        }}
                    >
                        <Typography variant="h6" sx={{ color: "#fff" }}>
                            Video Editing in Progress...
                        </Typography>
                    </Box>
                </Box>
            )}
        </Container>
    );
};

export default EventDetailPage;
