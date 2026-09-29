import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="border-t-2 border-ink pt-4 font-mono text-xs">
        <h1 className="tracking-wide uppercase">404 — Not found</h1>
        <p className="mt-4 text-muted">
          Nothing here.{" "}
          <Link href="/" className="text-ink underline underline-offset-4">
            Back to the work
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
