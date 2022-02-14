import Layout from '../components/Layout';
import data from '../utils/data';
import {Button, Grid, Card, CardActionArea, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import NextLink from 'next/link';
import db from '../utils/db';
import Product from  '../models/Product'

export default function Home({products}) {
  return ( 
    <Layout>  
        <h1>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component = "img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                  <Button size="small" color="primary">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>           
          ))}
        </Grid>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props:{
      products: products.map(db.convertDocToObj),
    },
  };
} 