import dbConnect from "../../../../../config";
import PostItem from "../../../../../models/postItem";

dbConnect();

//In the provided code, the function signature is designed to take the request object as the first parameter and an object containing params as the second parameter
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postItem = await PostItem.findById(params.id).select("-__v");
    return Response.json(postItem);
  } catch (error: any) {
    console.log(error.message);
    return Response.json(
      { message: "No post found for this ID" },
      { status: 404 }
    );
  }
}
