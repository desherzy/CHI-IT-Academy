import { Box, 
    Container, 
    Typography, 
    Stack, 
    Card,
    Button, 
    CardContent 
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";

async function getExhibits(page: number) {
    // temporary API endpoint for demonstration
    const res = await fetch(`api/exhibits?page=${page}&limit=10`, {
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch data.");
    return res.json();
};

export default async function PostsPage({ searchParams, }: { searchParams: { page?: string } }) {
    const currentPage = Number(searchParams.page) || 1;
    const data = await getExhibits(currentPage);
    const totalPages = data.totalPages || 10;

    return(
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Exhibits - Page {currentPage}
            </Typography>

            <Stack spacing={3}>
                {data.map((exhibit: any) => (
                    <Card key={exhibit.id} variant="outlined" sx={{ borderRadius: 2 }}>
                        <CardContent>
                            <Typography variant="h6" color="primary">{exhibit.title}</Typography>
                            <Typography color="text.secondary">{exhibit.description}</Typography>
                        </CardContent>
                        <CardContent>
                            <Button size="small" component={Link} href={`/exhibits/${exhibit.id}`}>
                                Show more
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Pagination page={currentPage} 
                    count={totalPages}
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem component={Link} 
                        href={`/posts?page=${item.page}`}
                        scroll={false} 
                        {...item} />
                    )}
                />
            </Box>
        </Container>
    );
};

