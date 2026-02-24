import { Container, Stack, Skeleton, Box } from "@mui/material";

export default function Loading() {
    return(
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Skeleton variant="text" width={200} height={60} sx={{ mb: 2 }} />
            <Stack spacing={3}>
                {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} variant="rectangular" height={120} sx={{ borderRadius: 2 }} />
                ))}
            </Stack>
        </Container>
    );
};

