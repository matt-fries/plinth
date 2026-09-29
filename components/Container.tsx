export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
