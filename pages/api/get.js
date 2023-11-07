export default async function handler(req, res) {
  const form_data = new FormData();

  let body_res = JSON.parse(req.body);

  form_data.append("name", body_res["name"]);
  form_data.append("price", body_res["price"]);

  async function run() {
    const resposnse = await fetch("http://127.0.0.1:5000/api/addproduct", {
      method: "POST",
      body: form_data,
    });
    const resData = await resposnse.json();
    return resData;
  }
  if (req.method == "POST") {
    const data = await run();
    res.status(200).json({ response: data });
  }

  res.status(200).json({ response: "hell" });
}
