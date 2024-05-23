
import dbConnect from "../../../../config";
import PostItem from "../../../../models/postItem";

dbConnect();

export async function GET(request: Request, response: Response) {
  const postItem = await PostItem.find().select("-__v");
  return Response.json(postItem);
}

export async function POST(request: Request, response: Response) {
 const postData = await request.json();
 console.log(postData)
const postItem = new PostItem(postData);

  try {
    await postItem.save();
   return  Response.json(postItem);
  } catch (error: any) {
    console.log(error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
