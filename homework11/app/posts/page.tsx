import { Box, 
    Container, 
    Typography, 
    Stack, 
    Card, 
    CardContent 
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";

async function getExhibits(page: number) {
    // URL is a mock API that returns paginated data of exhibits
    const res = await fetch(`https://66367566415f4e1a.api.mocki.io/exhibits?page=${page}&limit=10`, {
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
                    <Card key={exhibit.id}>
                        <CardContent>
                            <Typography variant="h6">{exhibit.title}</Typography>
                            <Typography color="text.secondary">{exhibit.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>

            <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
                <Pagination page={currentPage} 
                    count={totalPages}
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

