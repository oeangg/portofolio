import { readFile } from "fs/promises";
import path from "path";
export const runtime = "edge";

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "src/assets/CV_subhan.pdf"),
  );
  const headers = new Headers();
  headers.append("Content-Disposition", 'attachment; filename="CV_subhan.pdf"');
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, { headers });
}
