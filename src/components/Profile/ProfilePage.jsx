import React from "react";
import {
    Container,
    Box,
    Typography,
    Card,
    Avatar,
    Grid,
    Divider,
    Button,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const ProfilePage = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "https://via.placeholder.com/100",
        stats: {
            plannedEvents: 12,
            completedVideos: 8,
        },
        recentActivity: [
            { id: 1, title: "Completed: Sunset View", date: "2024-12-06" },
            { id: 2, title: "Planned: Snowboarding Adventure", date: "2024-12-10" },
        ],
    };

    return (
        <Container sx={{ py: 3 }}>
            {/* Profile Header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                <Avatar
                    src={user.avatar}
                    alt={user.name}
                    sx={{
                        width: 80,
                        height: 80,
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        mr: 3,
                    }}
                />
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                        {user.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666" }}>
                        {user.email}
                    </Typography>
                </Box>
                <IconButton sx={{ marginLeft: "auto", color: "#007aff" }}>
                    <EditIcon />
                </IconButton>
            </Box>

            {/* Statistics Section */}
            <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#333", mb: 2 }}
            >
                Your Statistics
            </Typography>
            <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            padding: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: 3,
                        }}
                    >
                        <EventAvailableIcon sx={{ fontSize: 40, color: "#007aff" }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
                            >
                                {user.stats.plannedEvents}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#666" }}>
                                Planned Events
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        sx={{
                            padding: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: 3,
                        }}
                    >
                        <CheckCircleIcon sx={{ fontSize: 40, color: "#4caf50" }} />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: 600, color: "#333", mb: 0.5 }}
                            >
                                {user.stats.completedVideos}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#666" }}>
                                Videos
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>

            {/* Recent Activity Section */}
            <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#333", mb: 2 }}
            >
                Recent Activity
            </Typography>
            <Card
                sx={{
                    mb: 4,
                    padding: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: 3,
                }}
            >
                <List>
                    {user.recentActivity.map((activity) => (
                        <ListItem key={activity.id} disableGutters>
                            <ListItemAvatar>
                                <CheckCircleIcon sx={{ color: "#4caf50" }} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={activity.title}
                                secondary={`Date: ${activity.date}`}
                                primaryTypographyProps={{
                                    fontWeight: 600,
                                    color: "#333",
                                }}
                                secondaryTypographyProps={{
                                    color: "#666",
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Card>

            {/* Settings and Logout */}
            <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#333", mb: 2 }}
            >
                Settings
            </Typography>
            <Card
                sx={{
                    padding: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: 3,
                }}
            >
                <List>
                    <ListItem disableGutters>
                        <ListItemAvatar>
                            <SettingsIcon sx={{ color: "#007aff" }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Account Settings"
                            primaryTypographyProps={{
                                fontWeight: 600,
                                color: "#333",
                            }}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" sx={{ color: "#007aff" }}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider sx={{ my: 1 }} />
                    <ListItem disableGutters>
                        <ListItemAvatar>
                            <LogoutIcon sx={{ color: "#d32f2f" }} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Log Out"
                            primaryTypographyProps={{
                                fontWeight: 600,
                                color: "#333",
                            }}
                        />
                    </ListItem>
                </List>
            </Card>
        </Container>
    );
};

export default ProfilePage;
