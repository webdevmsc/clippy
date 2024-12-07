import React from "react";
import {
    Container,
    Box,
    Typography,
    Card,
    CardContent,
} from "@mui/material";

const sections = {
    templates: [
        {
            id: 1,
            title: "Sunset Template",
            description: "Capture stunning sunsets effortlessly.",
            gradient: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        },
        {
            id: 2,
            title: "Adventure Template",
            description: "Record your thrilling adventures.",
            gradient: "linear-gradient(135deg, #76b852, #8dc26f)",
        },
        {
            id: 3,
            title: "Evening Template",
            description: "Perfect for city walks and night vibes.",
            gradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        },
    ],
    news: [
        {
            id: 4,
            title: "Winter Sale",
            description: "50% Off Premium Membership!",
            gradient: "linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)",
        },
        {
            id: 5,
            title: "New Feature Update",
            description: "Explore our latest improvements.",
            gradient: "linear-gradient(135deg, #000046, #1cb5e0)",
        },
    ],
    userPosts: [
        {
            id: 6,
            username: "JohnDoe",
            description: "Snowboarding adventure last weekend.",
            gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        },
        {
            id: 7,
            username: "JaneSmith",
            description: "Loved the sunset template!",
            gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        },
        {
            id: 8,
            username: "TravelLover",
            description: "New vlog on my morning hike.",
            gradient: "linear-gradient(135deg, #cfd9df, #e2ebf0)",
        },
    ],
};

const captions = {
    templates: "Explore new ways to make your moments shine.",
    news: "Stay updated with the latest news and offers.",
    userPosts: "Discover what our community is creating.",
};

const FeedPage = () => {
    const renderSection = (title, content, caption) => (
        <Box sx={{ mb: 2 }}>
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    color: "#333",
                    mb: 1,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "#666",
                    mb: 2,
                }}
            >
                {caption}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    pb: 2,
                    "&::-webkit-scrollbar": { display: "none" },
                }}
            >
                {content.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            flexShrink: 0,
                            width: 250,
                            height: 180,
                            borderRadius: 3,
                            background: item.gradient,
                            position: "relative",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                        }}
                    >
                        <CardContent
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                color: "#fff",
                                padding: 2,
                            }}
                        >
                            {item.username && (
                                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                    @{item.username}
                                </Typography>
                            )}
                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    opacity: 0.9,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );

    return (
        <Container sx={{ py: 3, pb: 10 }}>
            {renderSection("Templates", sections.templates, captions.templates)}
            {renderSection("News", sections.news, captions.news)}
            {renderSection("From the Community", sections.userPosts, captions.userPosts)}
        </Container>
    );
};

export default FeedPage;
