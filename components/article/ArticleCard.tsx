import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AppProps } from 'next/app';
import Link from 'next/link';
const parse = require('html-react-parser');

interface ArticleProps {
  article: any;
}

export const ArticleCard = ({ article }: ArticleProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="mx-auto my-[1rem] lg:my-0">
      <CardMedia
        component="img"
        height="140"
        image={article.pic}
        alt={article.picAlt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        {parse(article.caption)}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link href="/Blog/[pid]" as={`/Blog/${article.id}`}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
