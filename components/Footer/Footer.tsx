import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-6 fixed bottom-0 flex justify-center items-center">
      <p className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300">
        Built by{" "}
        <Link href="https://x.com/rafiwiranaa" passHref className="underline" aria-label="Visit Rafi's Twitter">
          Rafi
        </Link>
        .
      </p>
    </footer>
  )
}