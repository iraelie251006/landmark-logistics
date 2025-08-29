import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-2">
        <h1 className="text-6xl font-bold font-poppins mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="space-y-3">
          <Link href="/" className="btn-hero block">
            Return to Home
          </Link>
          <Link href="/services" className="btn-outline block">
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
