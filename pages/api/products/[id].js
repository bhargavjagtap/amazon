import nc from "next-connect";
import Product from '../../../models/Product';
import db from '../../../utils/db';

const handler = nc();

await db.connect(); 
handler.get(async(req, res) => {
    const products = await Product.find({});
    await db.disconnect();
    res.send(products)  
});

export default handler;  