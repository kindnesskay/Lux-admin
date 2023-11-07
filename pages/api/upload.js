import { Formidable } from "formidable";
console.log(Formidable);
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method == "POST") {
    const data = await req.body;
    res.status(200).json({ message: data });
  }
  res.status(200).json({ message: "get" });
};
