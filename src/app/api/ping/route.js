export async function GET() {
  return new Response(JSON.stringify({ ok: true, ts: new Date(), name:"전상현"}), {
    headers: { "Content-Type": "application/json" },
  });
}
