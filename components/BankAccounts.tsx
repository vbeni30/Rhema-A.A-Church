import Image from "next/image"
import { Copy, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const accounts = [
  {
    bankName: "First National Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fnb-logo-8Hs5Ij8Hs5Ij.png",
    purpose: "Tithes & General Offerings",
    details: {
      accountName: "Gospel Church Ministry",
      accountNumber: "1234-5678-9012-3456",
      branchCode: "087654321",
    },
  },
  {
    bankName: "Standard Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/standard-bank-logo-YbHKzwYbHKzw.png",
    purpose: "Building Fund",
    details: {
      accountName: "Gospel Church Building",
      accountNumber: "9876-5432-1098-7654",
      branchCode: "087654322",
    },
  },
  {
    bankName: "ABSA Bank",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/absa-logo-N8F9TkN8F9Tk.png",
    purpose: "Missions & Outreach",
    details: {
      accountName: "Gospel Church Missions",
      accountNumber: "4567-8901-2345-6789",
      branchCode: "087654323",
    },
  },
]

export default function BankAccounts() {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-normal mb-4">Our Banking Details</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            You can make direct deposits or transfers to any of our bank accounts below.
          </p>
        </div>

        <div className="space-y-8">
          {accounts.map((account, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Bank Logo */}
                <div className="w-40 h-20 relative flex-shrink-0 bg-white rounded-lg p-4">
                  <Image
                    src={account.logo || "/placeholder.svg"}
                    alt={account.bankName}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                {/* Account Details */}
                <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">Purpose</label>
                    <p className="font-medium text-lg">{account.purpose}</p>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Account Name</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.accountName}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.accountName, `${index}-name`)}
                      >
                        {copiedField === `${index}-name` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Account Number</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.accountNumber}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.accountNumber, `${index}-account`)}
                      >
                        {copiedField === `${index}-account` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-500">Branch Code</label>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{account.details.branchCode}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={() => handleCopy(account.details.branchCode, `${index}-branch`)}
                      >
                        {copiedField === `${index}-branch` ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-[#9B2B3A]/5 rounded-lg border border-[#9B2B3A]/10">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#9B2B3A]/10 rounded-lg">
              <svg
                className="w-6 h-6 text-[#9B2B3A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Reference Format</h4>
              <p className="text-gray-600">
                Please use the following format for your reference:{" "}
                <span className="font-medium">SURNAME + INITIAL + PURPOSE</span>
                <br />
                Example: <span className="font-medium">SMITHJ TITHE</span> or{" "}
                <span className="font-medium">SMITHJ BUILDING</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

