export async function GET(_, { params }) {
  const { productName } = params;

  try {
    const response = await fetch(
      `http://157.230.240.97:9999/api/v1/product/${productName}`
    );
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch product" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
