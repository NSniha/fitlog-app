export default function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-350 px-4 sm:px-5 md:px-6 lg:px-8 ${className}`}>{children}</div>;
}