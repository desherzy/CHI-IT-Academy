import { 
    Card, 
    CardContent, 
    CardMedia, 
    CardActions, 
    Typography, 
    Button, 
    IconButton 
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

interface PostProps {
  data: {
    id: string;
    title: string;
    description: string;
    image: string;
    user: string;
  };
}

const Post = ({ data }: PostProps) => {
    const currentUser = useSelector((state: RootState) => state.user.user);
    const isOwner = currentUser && currentUser.id === data.user;

    return (
        <Card sx={{ width: '100%', maxWidth: 600, mb: 3 }}>
            <CardMedia
                component='img'
                height='200'
                image={data.image ? `http://localhost:5000/${data.image}` : 'https://via.placeholder.com/600x200'}
                alt={data.title}
            />
            <CardContent>
                <Typography variant='h6'>{data.title}</Typography>
                <Typography variant='body2' color='text.secondary'>
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button startIcon={<ChatBubbleOutlineIcon />}>
                    Comments
                </Button>
                {isOwner && (
                    <IconButton color='error' onClick={() => console.log('Delete', data.id)}>
                        <DeleteIcon />
                    </IconButton>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;