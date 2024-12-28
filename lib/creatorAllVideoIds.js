import Creator from "../models/creator_lists.model";
import connectDB from "./connectDB";


export default async function creatorAllVideoIds() {
  await connectDB();

  try{
    let response = await Creator.aggregate([
      { $sort: {_id: -1 } },
      { $project: {_id: 0, url: 1, created_at: 1} }
    ]);
    return JSON.parse(JSON.stringify(response))
  }catch(e){
    return{error : e};
  }
}
