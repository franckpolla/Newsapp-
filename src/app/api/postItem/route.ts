import dbComnect from "../../../../config";
import PostItem from "../../../../models/postItem";

dbComnect();

export async function GET(request: Request, response: Response) {
  const postItem = await PostItem.find();
  return Response.json(postItem);
}


export async function POST(request: Request) {
    const postItem = new PostItem(request.body);
    await postItem.save();
    return postItem;
}
