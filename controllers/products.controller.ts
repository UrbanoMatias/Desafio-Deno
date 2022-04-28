import {Response,Request,Context} from "https://deno.land/x/oak@v10.5.1/mod.ts";

const products = [{}]

export const getAllProducts = (context:Context)=>{
    context.response.body={
        payload:products
    }
}

export const saveProduct = async({request,response}:{request:Request,response:Response})=>{
    const body = await request.body();
    const values = await body.value;
    products.push(values)
    response.body=values;
}
