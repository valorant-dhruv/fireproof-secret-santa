import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";

export function Component() {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-800">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-gray-900">
          <div className="flex-1 relative z-0 flex overflow-y-auto">
            <div className="py-6 flex flex-col justify-between w-full">
              <div className="flex-1 px-2 space-y-1">
                <h2 className="text-lg font-semibold text-white">
                  Create a Group
                </h2>
                <div className="mt-6 flex-grow flex flex-col">
                  <input
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white"
                    placeholder="Enter Group Name"
                    type="text"
                  />
                  <Button className="mt-4 w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Create
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none bg-[#DC143C]">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">
              <h2 className="text-lg font-semibold text-white">
                Christmas Themed Groups
              </h2>
              <div className="mt-6 text-center">
                <img
                  alt="Santa Claus"
                  className="mx-auto h-40 w-40"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width="200"
                />
                <div className="mt-6 flex-grow flex flex-col items-center">
                  <input
                    className="px-4 py-2 rounded-lg bg-gray-700 text-white text-center"
                    placeholder="Enter Your Name"
                    type="text"
                  />
                  <Button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                  </Button>
                </div>
              </div>
              <div className="mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
                <Card>
                  <CardHeader className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Group 1
                    </h3>
                    <Badge className="mt-1 text-sm text-white">Active</Badge>
                  </CardHeader>
                  <CardContent className="px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <Avatar className="bg-white text-gray-800" />
                      <Link className="mt-2 text-sm text-white" href="#">
                        View Group
                      </Link>
                    </dl>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Group 2
                    </h3>
                    <Badge className="mt-1 text-sm text-white">Active</Badge>
                  </CardHeader>
                  <CardContent className="px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <Avatar className="bg-white text-gray-800" />
                      <Link className="mt-2 text-sm text-white" href="#">
                        View Group
                      </Link>
                    </dl>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-white">
                      Group 3
                    </h3>
                    <Badge className="mt-1 text-sm text-white">Active</Badge>
                  </CardHeader>
                  <CardContent className="px-4 py-5 sm:p-0">
                    <dl className="sm:divide-y sm:divide-gray-200">
                      <Avatar className="bg-white text-gray-800" />
                      <Link className="mt-2 text-sm text-white" href="#">
                        View Group
                      </Link>
                    </dl>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
