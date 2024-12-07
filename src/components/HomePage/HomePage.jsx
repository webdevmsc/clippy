import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { useNavigate } from "react-router";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Fab,
    BottomNavigation,
    BottomNavigationAction,
    IconButton,
    Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/DynamicFeed";
import PersonIcon from "@mui/icons-material/Person";
import ActivityIcon from "@mui/icons-material/TrendingUp";
import MenuIcon from "@mui/icons-material/Menu";
import {Checklist, Timeline, TrendingUp} from "@mui/icons-material";
import CreateMomentsPage from "../CreateMoments/CreateMomentsPage";
import ActivitiesPage from "../Activities/ActivitiesPage";
import SetupPage from "../Setup/SetupPage";
import EventWorkPage from "../EventDetailPage/EventDetailPage";
import {
    Card,
    Grid,
    Divider,
    CircularProgress,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FeedPage from "../Feed/FeedPage";
import ProfilePage from "../Profile/ProfilePage";

// Placeholder Components for Routes
const HomePage = ({ plannedEvents = 5, completedVideos = 3 }) => {
    const navigate = useNavigate();
    return (
        <Container sx={{ paddingTop: 3, paddingBottom: 12 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 1 }}>
                Welcome Back!
            </Typography>

            {/* Statistics Section */}
            <Box sx={{ mb: 3 }}>
                <Grid container spacing={2}>
                    {/* Planned Events */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Card
                            sx={{
                                padding: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 3,
                                height: 80,
                            }}
                        >
                            <EventAvailableIcon sx={{ fontSize: 40, color: "#007aff" }} />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                                    {plannedEvents}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Planned Events
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Completed Videos */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Card
                            sx={{
                                padding: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 3,
                                height: 80,
                            }}
                        >
                            <CheckCircleIcon sx={{ fontSize: 40, color: "#4caf50" }} />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                                    {completedVideos}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Completed Videos
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Weekly Completion Rate */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Card
                            sx={{
                                padding: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 3,
                                height: 80,
                            }}
                        >
                            <BarChartIcon sx={{ fontSize: 40, color: "#007aff" }} />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                                    {Math.round((completedVideos / plannedEvents) * 100)}%
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Weekly Completion Rate
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Days Left Until Next Event */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Card
                            sx={{
                                padding: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                borderRadius: 3,
                                height: 80,
                            }}
                        >
                            <TrendingUp sx={{ fontSize: 40, color: "#ff9800" }} />
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
                                    {plannedEvents > 0 ? "3 Days" : "N/A"}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                    Days Left Until Next Event
                                </Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>




            {/* Activity Feed */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 2 }}>
                    Recent Activities
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <Card
                        sx={{
                            padding: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: 3,
                        }}
                    >
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: "#333" }}>
                                Snowboarding Adventure
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#666" }}>
                                Planned: 10th Dec 2024
                            </Typography>
                        </Box>
                        <Button
                            onClick={() => navigate('/event')}
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ textTransform: "none", color: "#007aff" }}
                        >
                            View
                        </Button>
                    </Card>
                    <Card
                        sx={{
                            padding: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            borderRadius: 3,
                        }}
                    >
                        <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: "#333" }}>
                                Sunset Photography
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#666" }}>
                                Completed: 5th Dec 2024
                            </Typography>
                        </Box>
                        <Button
                            onClick={() => navigate('/event')}
                            size="small"
                            endIcon={<ArrowForwardIcon />}
                            sx={{ textTransform: "none", color: "#007aff" }}
                        >
                            View
                        </Button>
                    </Card>
                </Box>
            </Box>

            {/* Recommendations Section */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#333", mb: 2 }}>
                    Recommendations
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={4}>
                        <Card
                            sx={{
                                height: 100,
                                backgroundColor: "#e3f2fd",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="body1" sx={{ color: "#007aff", fontWeight: 600 }}>
                                Try Snowboarding
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Card
                            sx={{
                                height: 100,
                                backgroundColor: "#f1f8e9",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="body1" sx={{ color: "#4caf50", fontWeight: 600 }}>
                                Capture a Sunset
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Card
                            sx={{
                                height: 100,
                                backgroundColor: "#ffecb3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 3,
                            }}
                        >
                            <Typography variant="body1" sx={{ color: "#ff9800", fontWeight: 600 }}>
                                Plan a Morning Walk
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};



const ActivityPage = () => (
    <Container>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
            Activity Page
        </Typography>
    </Container>
);


// Main Component with Routing
const MainApp = () => {


    return (
        <Router>
            <MainAppContent/>
        </Router>
    );
};

const MainAppContent = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    return (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f9f9f9" }}>
            {/* AppBar (Header) */}
            <AppBar
                position="static"
                elevation={1}
                sx={{
                    backgroundColor: "#fff",
                    borderBottom: "1px solid #e0e0e0",
                }}
            >
                <Toolbar>
                    <IconButton edge="start" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon sx={{ color: "#333" }} />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#333",
                            fontWeight: 600,
                            textAlign: "left",
                        }}
                    >
                        Clippy
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content with Routes */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/activities" element={<ActivitiesPage />} />
                <Route path="/create-moments" element={<CreateMomentsPage />} />
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/event" element={<EventWorkPage />} />
            </Routes>

            {/* Footer Navigation */}
            <AppBar
                position="fixed"
                sx={{
                    top: "auto",
                    bottom: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 -1px 6px rgba(0, 0, 0, 0.1)",
                }}
            >
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => setValue(newValue)}
                    showLabels
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/" />
                    <BottomNavigationAction label="Feed" icon={<FeedIcon />} component={Link} to="/feed" />
                    <Fab
                        onClick={() => navigate('/create-moments')}
                        color="primary"
                        aria-label="add"
                        sx={{
                            position: "absolute",
                            top: -30,
                            left: "50%",
                            transform: "translateX(-50%)",
                        }}
                    >
                        <AddIcon />
                    </Fab>
                    <BottomNavigationAction label="Activity" icon={<Checklist />} component={Link} to="/activities" />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} component={Link} to="/profile" />
                </BottomNavigation>
            </AppBar>
        </Box>
    )
}

export default MainApp;
