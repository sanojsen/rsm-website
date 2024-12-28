import connectDB from '../../../lib/connectDB';
import VideoList from '../../../models/video_lists.model';

export default async function handler(req, res) {
  await connectDB();

  try {
    let response = await VideoList.aggregate([
      { $match: { active: '1' } },
      { $project: {_id: 1, url: 1 } },
      { $sort: {_id:-1 } },
    ]);
    res.send(response);
  } catch (e) {
    res.send({ error: e });
  }
}
