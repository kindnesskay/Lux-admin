export default async function handler(req, res) {
  let id = req.query.id;

  async function run() {
    const resposnse = await fetch(
      `http://127.0.0.1:5000/api/deleteproduct/${Number(id)}`
    );
    const resData = await resposnse.json();
    return resData;
  }
  if (req.method == "POST") {
    res.status(200).json({ response: "This method is not allowed" });
  }

  const data = await run();
  res.status(200).json({ response: data });
}
