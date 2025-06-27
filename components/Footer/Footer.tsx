import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          Built by{" "}
          <Link 
            href="https://x.com/rafiwiranaa" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 underline underline-offset-4" 
            aria-label="Visit Rafi's Twitter"
          >
            Rafi
          </Link>
        </p>
      </div>
    </footer>
  )
}